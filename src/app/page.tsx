import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="text-gray-800 font-sans">

      {/* Hero */}
      <header className="bg-gradient-to-br from-yellow-500 to-green-700 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-5xl mb-4">🔐</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            One More Club
          </h1>
          <p className="text-xl md:text-2xl font-medium text-yellow-100 mb-2">
            Take control of your own Data.
          </p>
          <p className="text-base md:text-lg text-yellow-200 max-w-2xl mx-auto mb-8">
            Every time an app <strong className="text-white">creates</strong>,{" "}
            <strong className="text-white">updates</strong>, or{" "}
            <strong className="text-white">shares</strong> your personal data, a
            permanent record is written to the blockchain — so you always know
            who has your data and what they did with it.
          </p>
          <div className="max-w-xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </header>

      {/* Simple Explainer */}
      <section className="max-w-4xl mx-auto px-6 py-14">
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
      <section className="bg-green-50 py-14 px-6">
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
              href="/onemoreclub-workflow.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow transition"
            >
              📄 View Workflow Diagram
            </a>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-2">Side-by-Side Comparison</h2>
        <p className="text-center text-gray-400 mb-10 text-lg">
          How One More Club changes the experience for everyone
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* User Column */}
          <div className="bg-gradient-to-b from-yellow-50 to-white rounded-2xl border border-yellow-200 shadow-lg overflow-hidden">
            <div className="bg-yellow-500 text-white px-6 py-4 flex items-center gap-3">
              <span className="text-3xl">👤</span>
              <div>
                <h3 className="text-xl font-bold">You — The User</h3>
                <p className="text-yellow-100 text-sm">Regular person. No tech skills required.</p>
              </div>
            </div>
            <div className="p-6 space-y-5">
              {[
                { icon: "🔎", title: "See everything in plain English", desc: '"Your email was shared with Google Ads on April 3rd at 2:14 PM."' },
                { icon: "🔔", title: "Get alerts when your data moves", desc: "Instant notification any time an app creates, updates, or shares your info." },
                { icon: "📋", title: "Download your full data history", desc: "One-click export of every data event, ready for a lawyer or regulator." },
                { icon: "🚫", title: "Revoke access with one tap", desc: "Tell an app to delete your data — and the blockchain records whether they actually did it." },
                { icon: "💰", title: "Or get paid to share your data", desc: "Choose to share your data on your terms — and earn money every time a company wants access to it." },
                { icon: "🧓", title: "Designed for everyone", desc: "Large text, simple icons, plain-language explanations. No blockchain knowledge needed." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-3 items-start">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-6 mb-6 bg-white border border-yellow-100 rounded-xl p-4 shadow-inner">
              <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-3">
                Your Data Activity — Last 7 Days
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span><span className="text-gray-600">Apr 15 · <strong>Facebook</strong> updated your profile data</span></li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span><span className="text-gray-600">Apr 14 · <strong>Health App</strong> shared data with insurer</span></li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span><span className="text-gray-600">Apr 12 · <strong>Bank Portal</strong> created account record</span></li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-400 inline-block"></span><span className="text-gray-600">Apr 10 · <strong>Ad Network</strong> shared your location ⚠️</span></li>
              </ul>
              <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold py-2 rounded-lg transition">
                View Full History →
              </button>
            </div>
          </div>

          {/* App Owner Column */}
          <div className="bg-gradient-to-b from-green-50 to-white rounded-2xl border border-green-200 shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white px-6 py-4 flex items-center gap-3">
              <span className="text-3xl">🏢</span>
              <div>
                <h3 className="text-xl font-bold">App Owner / Business</h3>
                <p className="text-green-100 text-sm">Developer, startup, or enterprise.</p>
              </div>
            </div>
            <div className="p-6 space-y-5">
              {[
                { icon: "🔌", title: "Simple API integration", desc: "Add 3 lines of code to your existing app. One More Club handles the blockchain automatically." },
                { icon: "⚖️", title: "Built-in compliance (GDPR, CCPA)", desc: "Automatic audit logs satisfy regulators. No more scrambling for data breach reports." },
                { icon: "🛡️", title: "Prove you're trustworthy", desc: "Display a One More Club Trust Badge — users can verify your data practices in real time." },
                { icon: "📊", title: "Admin compliance dashboard", desc: "See all data events across your platform, flag anomalies, and respond to user requests instantly." },
                { icon: "💼", title: "Reduce legal liability", desc: "Immutable records prove you followed the rules — even if a third-party partner did not." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-3 items-start">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-6 mb-6 bg-white border border-green-100 rounded-xl p-4 shadow-inner">
              <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-3">
                Compliance Overview — Your App
              </p>
              <div className="grid grid-cols-3 gap-2 text-center text-sm mb-3">
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xl font-bold text-green-600">4,821</p>
                  <p className="text-gray-500 text-xs">Records Created</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-2">
                  <p className="text-xl font-bold text-emerald-600">99.8%</p>
                  <p className="text-gray-500 text-xs">Compliance Rate</p>
                </div>
                <div className="bg-rose-50 rounded-lg p-2">
                  <p className="text-xl font-bold text-rose-600">2</p>
                  <p className="text-gray-500 text-xs">Open Disputes</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span><span className="text-gray-600">GDPR deletion request #482 — <strong>completed ✓</strong></span></li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span><span className="text-gray-600">Third-party share to analytics — <strong>pending consent</strong></span></li>
              </ul>
              <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-lg transition">
                Open Admin Console →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-yellow-50 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl shadow border border-gray-100">
            <table className="w-full text-sm text-left">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold w-1/2">Feature</th>
                  <th className="px-5 py-4 font-semibold text-center">👤 User</th>
                  <th className="px-5 py-4 font-semibold text-center">🏢 App Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["View data creation events", true, true],
                  ["View data update history", true, true],
                  ["See who your data was shared with", true, true],
                  ["Real-time alerts on data events", true, false],
                  ["Request data deletion & verify it happened", true, false],
                  ["Manage consent & revoke access", true, false],
                  ["GDPR / CCPA auto-compliance logs", false, true],
                  ["API integration (3 lines of code)", false, true],
                  ["One More Club Trust Badge for your site", false, true],
                  ["Immutable blockchain proof (no tampering)", true, true],
                ].map(([feature, user, app]) => (
                  <tr key={feature as string} className="hover:bg-gray-50">
                    <td className="px-5 py-4">{feature as string}</td>
                    <td className="px-5 py-4 text-center font-bold text-lg">
                      {user ? <span className="text-emerald-500">✓</span> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-5 py-4 text-center font-bold text-lg">
                      {app ? <span className="text-emerald-500">✓</span> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="max-w-4xl mx-auto px-6 py-14">
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
      <section className="max-w-4xl mx-auto px-6 py-14">
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
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-700 to-yellow-500 text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold mb-3">Data privacy shouldn&apos;t be complicated.</h2>
          <p className="text-yellow-100 text-lg mb-8">
            One More Club makes it simple, honest, and provable — for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-yellow-50 transition shadow-lg">Get Early Access</button>
            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-green-700 transition">For Developers →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-yellow-100 text-center text-sm py-6">
        <p>© 2026 One More Club — Blockchain Data Provenance Platform. Built with ❤️ for privacy.</p>
      </footer>

    </main>
  );
}
