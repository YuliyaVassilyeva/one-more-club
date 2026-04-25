import Link from "next/link";

type Status = "success" | "already" | "invalid" | "error";

const COPY: Record<Status, { emoji: string; title: string; body: string }> = {
  success: {
    emoji: "✅",
    title: "You're in.",
    body: "Your email is confirmed. We'll be in touch when it's your turn.",
  },
  already: {
    emoji: "👍",
    title: "Already verified.",
    body: "This email was confirmed previously — no need to do it again.",
  },
  invalid: {
    emoji: "🤔",
    title: "Link not recognized.",
    body: "This verification link is invalid or has already been used. Try signing up again if you think this is a mistake.",
  },
  error: {
    emoji: "⚠️",
    title: "Something went wrong.",
    body: "We couldn't verify your email just now. Please try the link again in a minute.",
  },
};

function parseStatus(value: string | string[] | undefined): Status {
  const v = Array.isArray(value) ? value[0] : value;
  if (v === "success" || v === "already" || v === "invalid" || v === "error") {
    return v;
  }
  return "invalid";
}

export default async function VerifiedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string | string[] }>;
}) {
  const { status } = await searchParams;
  const key = parseStatus(status);
  const { emoji, title, body } = COPY[key];

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-10 text-center">
        <div className="text-5xl mb-4" aria-hidden>
          {emoji}
        </div>
        <h1 className="text-2xl font-extrabold mb-3 text-gray-900">{title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">{body}</p>
        <Link
          href="/"
          className="inline-block bg-teal-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-900 transition-colors"
        >
          Back to One More Club
        </Link>
      </div>
    </main>
  );
}
