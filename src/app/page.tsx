import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div className="text-5xl mb-4">🔐</div>
        <h1 className="text-4xl font-extrabold mb-3">One More Club</h1>
        <p className="text-gray-600">
          Be one of the first inside. Drop your email to join the movement.
        </p>
        <WaitlistForm />
      </div>
    </main>
  );
}
