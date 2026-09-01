import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="text-gray-800 font-sans">

      {/* Hero */}
      <header className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
            One More Club<span className="align-super text-xl md:text-2xl">™</span>
          </h1>
          <div className="max-w-xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </header>

      {/* What */}
      <section className="bg-white max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-widest">W H A T .</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          This is not simply another club. Besides Miami&rsquo;s share of remarkable
          clubs — the Economic Club, Founder&rsquo;s Run Club, the Investment Club —
          One More Club is going to be exactly that: one more club, but with a
          distinct purpose. We are a community built around sustainable business,
          responsible innovation, and the people driving it forward. We believe
          the most powerful currency in any room is genuine human connection.
        </p>
      </section>

      {/* Why */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 tracking-widest">W H Y .</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Enterprises and small to mid-sized companies in particular struggle to
            know where to begin with developing and implementing AI systems, let
            alone doing so safely and responsibly. One More Club aims to close the
            distance between executive leadership and governance, trust and
            safety professionals.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our event format reflects that mission. Each session features two hot
            seats: one for an executive posing real challenges, and one for a
            professional offering solutions in real time.
          </p>
        </div>
      </section>

      {/* Who */}
      <section className="bg-white max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-2 tracking-widest">W H O .</h2>
        <p className="text-center text-gray-400 mb-10 text-lg">
          A team built for this moment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-yellow-400 text-center">
            <h3 className="font-bold text-lg mb-1">Yuliya</h3>
            <p className="text-gray-500 text-sm font-medium mb-2">President, One More Club &amp; AI Salon Miami</p>
            <p className="text-gray-500 text-sm">
              Former Verizon Analyst. AIGP Certified.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-green-400 text-center">
            <h3 className="font-bold text-lg mb-1">Michael</h3>
            <p className="text-gray-500 text-sm font-medium mb-2">Director of Technology, One More Club</p>
            <p className="text-gray-500 text-sm">
              Software Engineer, Building Agent Swarms.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-emerald-400 text-center">
            <h3 className="font-bold text-lg mb-1">Chris</h3>
            <p className="text-gray-500 text-sm font-medium mb-2">Advisor, One More Club</p>
            <p className="text-gray-500 text-sm">
              CEO and Founder of Broadline Capital, a PE firm. Brings legal and
              business acumen.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-yellow-500 text-center">
            <h3 className="font-bold text-lg mb-1">Eddie</h3>
            <p className="text-gray-500 text-sm font-medium mb-2">CFO, One More Club</p>
            <p className="text-gray-500 text-sm">
              Brings PwC and McKinsey experience.
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          As we grow our community, we are seeking partners to support our
          mission, speakers and professionals to occupy the hot seat, and an
          audience that stands to benefit — including the potential to engage
          our advisors directly within their own organizations.
        </p>
      </section>

    </main>
  );
}
