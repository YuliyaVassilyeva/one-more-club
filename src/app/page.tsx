import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="text-gray-800 font-sans">

      {/* Hero */}
      <header className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <img src="/IMG_4464.jpeg" alt="One More Club logo" className="w-48 h-auto mx-auto mb-4 drop-shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
            One More Club
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mb-2">
            Take control of your own Data.
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Every time an app <strong className="text-gray-800">creates</strong>,{" "}
            <strong className="text-gray-800">updates</strong>, or{" "}
            <strong className="text-gray-800">shares</strong> your personal data, a
            permanent record is written to the blockchain — so you always know
            who has your data and what they did with it.
          </p>
          <div className="max-w-xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </header>

      {/* Simple Explainer */}
      <section className="bg-white max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-2">What Is This, Simply?</h2>
        <p className="text-center text-gray-500 mb-10 text-lg">
          Think of it like a certified mail receipt — for your personal information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-yellow-400">
            <div className="text-4xl mb-3">📬</div>
            <h3 className="font-bold text-lg mb-1">Regular Internet Today</h3>
            <p className="text-gray-500 text-sm">
              Your name, address, location or health info is collected yet you
              have no idea where it is going, who sees it or who profits from it.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-green-400">
            <div className="text-4xl mb-3">🧾</div>
            <h3 className="font-bold text-lg mb-1">One More Club Adds a Receipt</h3>
            <p className="text-gray-500 text-sm">
              Every time any app touches your data, a{" "}
              <strong>tamper-proof receipt</strong> is recorded — forever — on
              the blockchain. And with One More Club, our customers get{" "}
              <strong>paid for their own data</strong>.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-emerald-400">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold text-lg mb-1">You Stay In Control</h3>
            <p className="text-gray-500 text-sm">
              You can see every receipt,{" "}
              <strong>audit who has your data</strong>, and hold apps legally
              accountable — all from one simple dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">How It Works</h2>
          <p className="text-center text-gray-400 mb-10">
            Step by step — even Grandma can follow along 👵
          </p>
          <ol className="relative border-l-4 border-yellow-200 space-y-8 ml-4">
            <li className="pl-8 relative">
              <span className="absolute -left-5 bg-yellow-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow">1</span>
              <h4 className="font-bold text-lg">You sign up for an app — say, a doctor&apos;s portal.</h4>
              <p className="text-gray-500 text-sm mt-1">
                The app collects your name, date of birth, and medical history.
              </p>
            </li>
            <li className="pl-8 relative">
              <span className="absolute -left-5 bg-green-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow">2</span>
              <h4 className="font-bold text-lg">
                One More Club automatically logs a <em>creation record</em>.
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                A digital fingerprint (hash) of what was collected, when, and by
                whom is written to the blockchain. No personal data is stored on
                the chain — only the proof.
              </p>
            </li>
            <li className="pl-8 relative">
              <span className="absolute -left-5 bg-emerald-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow">3</span>
              <h4 className="font-bold text-lg">
                The doctor&apos;s office shares your record with a specialist.
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                A <em>share record</em> is logged — who shared it, who received
                it, and the exact timestamp.
              </p>
            </li>
            <li className="pl-8 relative">
              <span className="absolute -left-5 bg-amber-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow">4</span>
              <h4 className="font-bold text-lg">
                You open your One More Club dashboard and see the full chain.
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                A simple timeline shows every event — just like tracking a
                package on UPS, but for your personal information.
              </p>
            </li>
            <li className="pl-8 relative">
              <span className="absolute -left-5 bg-rose-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow">5</span>
              <h4 className="font-bold text-lg">Dispute anything. Prove everything.</h4>
              <p className="text-gray-500 text-sm mt-1">
                If an app claims they deleted your data — you can verify it. If
                they lied, the blockchain proves it. That receipt cannot be
                altered.
              </p>
            </li>
          </ol>
          <div className="text-center mt-10">
            <a
              href="/onemoreclub-workflow-light.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow transition"
            >
              📄 View Workflow Diagram
            </a>
          </div>
        </div>
      </section>



      {/* Real-World Use Cases */}
      <section className="bg-white max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-2">Real-World Use Cases</h2>
        <p className="text-center text-gray-400 mb-10 text-lg">
          Everyday moments where One More Club gives you answers.
        </p>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md border-l-4 border-rose-400 p-6 flex gap-5 items-start">
            <div className="text-4xl shrink-0">📵</div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                &ldquo;Why am I getting spam texts from strangers?&rdquo;
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                You start receiving text messages and emails from unknown numbers
                — clearly spam, possibly scams. You&apos;ve never heard of these
                senders, yet somehow they have your personal contact info. How
                did they get it?
              </p>
              <div className="bg-rose-50 rounded-xl p-4 text-sm text-gray-700">
                <p className="font-semibold text-rose-600 mb-2">With One More Club:</p>
                <ul className="space-y-1 list-disc list-inside text-gray-600">
                  <li>Open your dashboard and search for events involving your phone number or email.</li>
                  <li>See exactly which app shared your contact info — and when.</li>
                  <li>Identify whether the share was authorized, accidental, or part of a data breach.</li>
                  <li>Download a timestamped proof record to file a complaint or legal action.</li>
                </ul>
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">
                Instead of wondering, you know — and you have the receipts to prove it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Blockchain */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Why Blockchain?</h2>
        <p className="text-center text-gray-400 mb-10">
          Three words: <strong>Nobody can lie.</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-yellow-400">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="font-bold mb-1">Tamper-Proof</h4>
            <p className="text-gray-500 text-sm">
              Once a record is written, it cannot be changed or deleted — by anyone, including us.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-green-500">
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="font-bold mb-1">Decentralized</h4>
            <p className="text-gray-500 text-sm">
              No single company controls the records. Thousands of computers around the world hold copies.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-yellow-500">
            <div className="text-4xl mb-3">📎</div>
            <h4 className="font-bold mb-1">Privacy-Safe</h4>
            <p className="text-gray-500 text-sm">
              Only a cryptographic fingerprint (hash) is stored on-chain — never your actual personal data.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <img src="/lemon.png" alt="" className="w-32 h-auto mx-auto mb-4 drop-shadow-lg" />
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Data privacy shouldn&apos;t be complicated.</h2>
          <p className="text-gray-600 text-lg mb-8">
            One More Club makes it simple, honest, and provable — for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-800 transition shadow-lg">Get Early Access</button>
            <button className="border-2 border-green-700 text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-700 hover:text-white transition">For Developers →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-center text-sm py-6">
        <p>© 2026 One More Club — Blockchain Data Provenance Platform. Built with ❤️ for privacy.</p>
      </footer>

    </main>
  );
}
