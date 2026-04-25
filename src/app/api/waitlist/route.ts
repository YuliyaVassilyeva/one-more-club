import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { isValidEmail, normalizeEmail } from "@/lib/validate";
import { sendVerificationEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_LIST_KEY = "onemoreclub.xyz";
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;

type Body = {
  email?: unknown;
  source?: unknown;
  list_key?: unknown;
  website?: unknown; // honeypot
};

export async function POST(req: Request) {
  const ip = clientIp(req);

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { status: "error", error: "invalid_json" },
      { status: 400 },
    );
  }

  // Honeypot: bots fill hidden `website` field; humans leave it blank.
  // Return a fake success so bots get no signal.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ status: "ok" });
  }

  const limit = rateLimit(`waitlist:${ip}`, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS);
  if (!limit.allowed) {
    return NextResponse.json(
      { status: "error", error: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      },
    );
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json(
      { status: "error", error: "invalid_email" },
      { status: 400 },
    );
  }

  const email = normalizeEmail(body.email);
  const listKey =
    typeof body.list_key === "string" && body.list_key.trim().length > 0
      ? body.list_key.trim()
      : DEFAULT_LIST_KEY;
  const source =
    typeof body.source === "string" && body.source.trim().length > 0
      ? body.source.trim().slice(0, 64)
      : null;
  const userAgent = req.headers.get("user-agent")?.slice(0, 512) ?? null;

  const appUrl = process.env.APP_URL;
  if (!appUrl) {
    return NextResponse.json(
      { status: "error", error: "server_misconfigured" },
      { status: 500 },
    );
  }

  const token = crypto.randomBytes(32).toString("base64url");
  const now = new Date().toISOString();

  const db = supabaseAdmin();
  const { error } = await db.from("waitlist").insert({
    email,
    ip,
    source,
    user_agent: userAgent,
    list_key: listKey,
    verification_token: token,
    verification_sent_at: now,
  });

  if (error) {
    // Postgres unique_violation on (email, list_key) → already registered.
    if (error.code === "23505") {
      return NextResponse.json({ status: "already_registered" });
    }
    console.error("waitlist insert failed", error);
    return NextResponse.json(
      { status: "error", error: "insert_failed" },
      { status: 500 },
    );
  }

  try {
    await sendVerificationEmail({ to: email, token, appUrl });
  } catch (e) {
    console.error("verification email failed", e);
    // Row is saved; surface a soft error so the client can offer "resend".
    return NextResponse.json(
      { status: "saved_but_email_failed" },
      { status: 202 },
    );
  }

  return NextResponse.json({ status: "ok" });
}
