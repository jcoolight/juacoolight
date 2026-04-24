import { Link } from 'react-router-dom'

const steps = [
  {
    n: '01',
    title: 'Farmer Brings Produce',
    desc: "Smallholder farmers bring their perishable produce — fruits, vegetables, dairy — to the Jua Coolight hub.",
  },
  {
    n: '02',
    title: 'Stored in Cold Room',
    desc: 'Produce is safely stored in the solar-powered cold room at optimal temperatures to preserve quality.',
  },
  {
    n: '03',
    title: 'Temperature Monitored & Optimized',
    desc: 'Integrated temperature control and monitoring systems ensure consistent, reliable cold chain management.',
  },
  {
    n: '04',
    title: 'Farmer Retrieves When Ready',
    desc: 'Farmers retrieve their produce when market conditions are optimal, gaining better pricing power.',
  },
  {
    n: '05',
    title: 'Pay Per Use',
    desc: 'Farmers pay based on storage duration only — an affordable, flexible pay-per-use model.',
  },
  {
    n: '06',
    title: 'Access Lighting Services',
    desc: 'Community members can also access charging ports or lease lamps for household and business use.',
  },
]

const pricing = [
  { title: 'Pay-Per-Use Cold Storage', desc: 'No subscription, no upfront costs. Pay based on storage duration.', audience: 'Smallholder farmers' },
  { title: 'Lamp Leasing',             desc: 'Lamps with varying brightness leased on flexible terms.',             audience: 'Households & shop owners' },
  { title: 'Lamp Charging Service',    desc: 'Charging ports for community members who own electric lamps.',         audience: 'Electric lamp owners' },
  { title: 'Cooperative Pricing',      desc: 'Structured pricing for cooperatives and aggregation centers at scale.', audience: 'Cooperatives' },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">How It Works</p>
        <h1>Simple. Reliable. Impactful.</h1>
      </section>

      {/* Steps */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {steps.map(({ n, title, desc }, i) => (
              <div
                key={n}
                className={`flex gap-8 items-start p-6 md:p-8 rounded-sm border border-white/10 hover:border-sun-500/30 transition-colors duration-300 ${
                  i % 2 === 0 ? 'bg-earth-800/30' : 'bg-earth-900'
                }`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-sun-500/10 border border-sun-500/30 flex items-center justify-center">
                  <span className="font-mono text-sun-400 font-bold text-sm">{n}</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-white/30 tracking-widest">STEP {n}</span>
                  <h3 className="font-display text-xl text-white font-semibold mt-1 mb-2">{title}</h3>
                  <p className="text-white/60 font-body leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Business Model</p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2">
              Flexible, <span className="text-sun-400">Inclusive Pricing</span>
            </h2>
            <p className="text-white/50 font-body mt-3 max-w-xl mx-auto">
              Designed to be accessible for rural communities while building a sustainable revenue base.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {pricing.map(({ title, desc, audience }) => (
              <div key={title} className="card hover:border-sun-500/30 transition-colors duration-300">
                <h4 className="font-display text-lg text-white font-semibold mb-2">{title}</h4>
                <p className="text-white/50 text-sm font-body mb-4 leading-relaxed">{desc}</p>
                <span className="font-mono text-xs text-sun-400 tracking-widest">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl text-white font-bold mb-4">Ready to Partner?</h2>
          <p className="text-white/50 font-body mb-8">
            Bring Jua Coolight to your community or explore collaboration opportunities.
          </p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
