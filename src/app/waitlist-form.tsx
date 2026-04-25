"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          website,
          source: "homepage_hero",
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        status?: string;
        error?: string;
      };

      if (res.ok && data.status === "ok") {
        setStatus({
          kind: "success",
          message: "Check your inbox to confirm your email.",
        });
        setEmail("");
        return;
      }

      if (data.status === "already_registered") {
        setStatus({
          kind: "success",
          message: "You're already on the list.",
        });
        return;
      }

      if (res.status === 202 && data.status === "saved_but_email_failed") {
        setStatus({
          kind: "success",
          message: "You're on the list — confirmation email is delayed.",
        });
        setEmail("");
        return;
      }

      const msg =
        data.error === "invalid_email"
          ? "Please enter a valid email."
          : data.error === "rate_limited"
            ? "Too many attempts. Try again in a minute."
            : "Something went wrong. Please try again.";
      setStatus({ kind: "error", message: msg });
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 w-full" noValidate>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status.kind === "submitting"}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-60"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="px-5 py-3 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status.kind === "submitting" ? "Joining…" : "Join the movement"}
        </button>
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      {status.kind === "success" && (
        <p className="mt-3 text-sm text-green-700">{status.message}</p>
      )}
      {status.kind === "error" && (
        <p className="mt-3 text-sm text-red-600">{status.message}</p>
      )}
    </form>
  );
}
