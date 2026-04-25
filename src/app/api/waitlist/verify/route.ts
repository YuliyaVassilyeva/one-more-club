import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Status = "success" | "already" | "invalid" | "error";

function redirectTo(req: Request, status: Status) {
  const origin =
    process.env.APP_URL?.replace(/\/$/, "") ?? new URL(req.url).origin;
  return NextResponse.redirect(`${origin}/verified?status=${status}`, {
    status: 303,
  });
}

export async function GET(req: Request) {
  const token = new URL(req.url).searchParams.get("token");
  if (!token) return redirectTo(req, "invalid");

  const db = supabaseAdmin();
  const { data, error } = await db
    .from("waitlist")
    .select("id, email_verified")
    .eq("verification_token", token)
    .maybeSingle();

  if (error) {
    console.error("verify lookup failed", error);
    return redirectTo(req, "error");
  }
  if (!data) {
    // Token not found — may be invalid, or may belong to a row that was
    // already verified (token is cleared on success).
    return redirectTo(req, "invalid");
  }
  if (data.email_verified) {
    return redirectTo(req, "already");
  }

  const { error: updateError } = await db
    .from("waitlist")
    .update({
      email_verified: true,
      verified_at: new Date().toISOString(),
      verification_token: null,
    })
    .eq("id", data.id);

  if (updateError) {
    console.error("verify update failed", updateError);
    return redirectTo(req, "error");
  }

  return redirectTo(req, "success");
}
