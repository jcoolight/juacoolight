import { Link } from 'react-router-dom'

const ASSETS = {
  farmer: 'https://juacoolight.lovable.app/assets/farmer-impact-CSgL6D2y.jpg',
}

const impactAreas = [
  {
    category: 'Agricultural Impact',
    color: 'sun',
    items: ['Reduced Post-Harvest Losses', 'Increased Farmer Income', 'Reduced Food Waste', 'Improved Food Security'],
  },
  {
    category: 'Community Impact',
    color: 'sage',
    items: ['Increased Business Operating Hours', 'Improved Safety at Night', 'Reduced Health Risks', 'Job Creation in Rural Areas'],
  },
  {
    category: 'Environmental Impact',
    color: 'green',
    items: ['Lower Carbon Emissions', 'Replaces Diesel Refrigeration', 'Supports Renewable Energy'],
  },
]

const segments = [
  { title: 'Smallholder Farmers',       desc: 'Individual farmers growing perishable produce who need affordable, reliable cold storage.' },
  { title: 'Agricultural Cooperatives', desc: 'Farmer cooperatives looking to reduce collective losses and improve market access.' },
  { title: 'Rural Aggregation Centers', desc: 'Hubs that collect and distribute produce from multiple farms before market delivery.' },
  { title: 'Rural Shop Owners',         desc: 'Businesses needing reliable lighting to extend operating hours and improve security.' },
  { title: 'Off-Grid Communities',      desc: 'Households and communities lacking reliable electricity who need safe, affordable lighting.' },
]

const colorMap = {
  sun:   { border: 'border-sun-500/40',   dot: 'bg-sun-400',   text: 'text-sun-400' },
  sage:  { border: 'border-sage-500/40',  dot: 'bg-sage-400',  text: 'text-sage-400' },
  green: { border: 'border-green-500/40', dot: 'bg-green-400', text: 'text-green-400' },
}

export default function Impact() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">Our Impact</p>
        <h1>Real Impact for Real People</h1>
        <p>
          Every Jua Coolight deployment creates measurable social, economic, and environmental value.
        </p>
      </section>

      {/* Impact Categories */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {impactAreas.map(({ category, color, items }) => {
            const c = colorMap[color]
            return (
              <div key={category} className={`card border ${c.border}`}>
                <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-5 ${c.text}`}>{category}</p>
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                      <span className="text-white/70 text-sm font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Target Market</p>
              <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2 mb-8">
                Who We <span className="text-sun-400">Serve</span>
              </h2>
              <div className="space-y-5">
                {segments.map(({ title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-sm bg-sun-500/10 border border-sun-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-sun-400" />
                    </div>
                    <div>
                      <h4 className="font-display text-base text-white font-semibold mb-1">{title}</h4>
                      <p className="text-white/50 text-sm font-body leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={ASSETS.farmer}
                alt="Farmer benefiting from Jua Coolight"
                className="w-full rounded-sm object-cover h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl text-white font-bold mb-4">Be Part of the Impact</h2>
          <p className="text-white/50 font-body mb-8">Join us in transforming rural livelihoods across Kenya.</p>
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
        </div>
      </section>
    </div>
  )
}
