import { Link } from 'react-router-dom'

import heroBgPhoto  from '../assets/webhomepage/hero-bg.jpg'
import coldStoragePhoto from '../assets/webhomepage/cold-storage.jpg'
import lightingPhoto from '../assets/webhomepage/lighting-services.jpg'
import baridiRenderPhoto from '../assets/pbaridihub/JuaCoolightRender.png'
import ndeiya1Photo  from '../assets/ndeiyafarm/ndeiya1.jpg'

const ASSETS = {
  heroBg:       heroBgPhoto,
  coldStorage:  coldStoragePhoto,
  lighting:     lightingPhoto,
  baridiRender: baridiRenderPhoto,
  ndeiyaVisit:  ndeiya1Photo,
}

const steps = [
  { n: '1', title: 'Farmer Brings Produce',      desc: 'Perishable produce delivered to the Jua Coolight hub.' },
  { n: '2', title: 'Stored in Cold Room',         desc: 'Safely stored at optimal temperatures to preserve quality.' },
  { n: '3', title: 'Temperature Monitored',       desc: 'Integrated monitoring ensures reliable cold chain management.' },
  { n: '4', title: 'Retrieve When Ready',         desc: 'Farmers collect when market conditions are optimal.' },
  { n: '5', title: 'Pay Per Use',                 desc: 'Affordable pay-per-use model based on storage duration.' },
  { n: '6', title: 'Access Lighting',             desc: 'Community members charge lamps or lease lighting.' },
]

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={ASSETS.heroBg}
          alt="Solar-powered cold storage in rural Kenya"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/60 to-earth-900" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label fade-up">Clean Energy × Rural Infrastructure</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-4 mb-6 fade-up-delay-1">
            Saving Your Harvest,<br />
            <span className="text-sun-400">Lighting Your Community</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl mx-auto fade-up-delay-2">
            Solar-powered cold storage and productive lighting for off-grid rural communities across Kenya.
            Reducing post-harvest losses while expanding access to affordable lighting.
          </p>
          <div className="flex flex-wrap gap-4 justify-center fade-up-delay-3">
            <Link to="/how-it-works" className="btn-primary">Learn How It Works</Link>
            <Link to="/contact" className="btn-outline">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">The Challenge</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-2">
              Two Crises. <span className="text-sun-400">One Solution.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="card group hover:border-sun-500/40 transition-colors duration-300">
              <div className="w-10 h-10 rounded-sm bg-sun-500/10 border border-sun-500/30 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-sun-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-5-4v4m-6-4v4" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white font-semibold mb-3">Post-Harvest Losses</h3>
              <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
                Smallholder farmers in rural areas face significant post-harvest losses due to the lack of reliable cold storage infrastructure. Without proper preservation facilities, perishable produce spoils quickly.
              </p>
              <ul className="space-y-2">
                {['Forced distress sales at low prices', 'Exploitation by middlemen', 'Significant income loss & food waste'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/50 text-sm font-body">
                    <span className="text-sun-400 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Card 2 */}
            <div className="card group hover:border-sage-500/40 transition-colors duration-300">
              <div className="w-10 h-10 rounded-sm bg-sage-500/10 border border-sage-500/30 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-white font-semibold mb-3">Energy Poverty</h3>
              <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
                Rural communities experience widespread energy poverty, with limited or no access to reliable electricity. This results in poor lighting solutions that are often inadequate, unsafe, or expensive.
              </p>
              <ul className="space-y-2">
                {['Shop owners forced to close early', 'Increased insecurity at night', 'Health risks from poor-quality lighting'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/50 text-sm font-body">
                    <span className="text-sage-400 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SOLUTION ── */}
      <section className="py-24 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Our Solution</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-2">
              One Platform. <span className="text-sun-400">Two Solutions.</span>
            </h2>
            <p className="text-white/50 mt-4 font-body max-w-xl mx-auto">
              A modular, solar-powered rural infrastructure platform integrating cold storage and productive lighting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-sm">
              <img src={ASSETS.coldStorage} alt="Solar-powered cold storage" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs text-sun-400 tracking-widest mb-1">PROJECT BARIDIHUB</p>
                <h3 className="font-display text-xl text-white font-semibold mb-2">Solar-Powered Cold Storage</h3>
                <p className="text-white/60 text-sm font-body mb-3">Fully off-grid cold rooms for farmers, cooperatives, and aggregation centers.</p>
                <Link to="/solution" className="text-sun-400 text-sm font-body hover:text-sun-500 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <img src={ASSETS.lighting} alt="Solar-powered lighting" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs text-sage-400 tracking-widest mb-1">PRODUCTIVE ENERGY</p>
                <h3 className="font-display text-xl text-white font-semibold mb-2">Productive Lighting Services</h3>
                <p className="text-white/60 text-sm font-body mb-3">Charging ports and lamp leasing with varying brightness levels.</p>
                <Link to="/solution" className="text-sage-400 text-sm font-body hover:text-sage-500 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-2">
              Simple. Reliable. <span className="text-sun-400">Impactful.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="card group hover:border-white/20 transition-colors duration-300">
                <span className="font-mono text-3xl font-bold text-sun-500/20 group-hover:text-sun-500/40 transition-colors">{n}</span>
                <h4 className="font-display text-base font-semibold text-white mt-2 mb-2">{title}</h4>
                <p className="text-white/50 text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-outline">See Full Process</Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="py-24 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Our Impact</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-2">
              Real Impact for <span className="text-sun-400">Real People</span>
            </h2>
            <p className="text-white/50 mt-4 font-body max-w-xl mx-auto">
              Every deployment creates measurable social, economic, and environmental value.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Increased Farmer Income', icon: '📈' },
              { label: 'Extended Business Hours', icon: '🔆' },
              { label: 'Lower Carbon Emissions', icon: '🌱' },
            ].map(({ label, icon }) => (
              <div key={label} className="card text-center hover:border-sun-500/30 transition-colors duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="font-display text-lg text-white font-semibold">{label}</h4>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/impact" className="btn-outline">See Our Full Impact</Link>
          </div>
        </div>
      </section>

      {/* ── UPDATES ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Latest Updates</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mt-2">
              From the <span className="text-sun-400">Field</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card group hover:border-white/20 transition-colors duration-300">
              <img src={ASSETS.baridiRender} alt="Project BaridiHub" className="w-full h-48 object-cover rounded-sm mb-5 group-hover:opacity-90 transition-opacity" />
              <span className="font-mono text-xs text-sun-400 tracking-widest">R&D</span>
              <h3 className="font-display text-xl text-white font-semibold mt-2 mb-2">Introducing Project BaridiHub</h3>
              <p className="text-white/50 text-sm font-body">Our flagship cold storage initiative — "Baridi" means cold in Swahili.</p>
              <Link to="/updates" className="inline-block mt-4 text-sun-400 text-sm font-body hover:text-sun-500 transition-colors">
                Read more →
              </Link>
            </div>
            <div className="card group hover:border-white/20 transition-colors duration-300">
              <img src={ASSETS.ndeiyaVisit} alt="Field Visit Ndeiya" className="w-full h-48 object-cover rounded-sm mb-5 group-hover:opacity-90 transition-opacity" />
              <span className="font-mono text-xs text-sage-400 tracking-widest">FIELD WORK</span>
              <h3 className="font-display text-xl text-white font-semibold mt-2 mb-2">Field Visit: Ndeiya Farm, Kiambu County</h3>
              <p className="text-white/50 text-sm font-body">Exploring partnership opportunities in dairy farming cold storage needs.</p>
              <Link to="/updates" className="inline-block mt-4 text-sage-400 text-sm font-body hover:text-sage-500 transition-colors">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img src={ASSETS.heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-earth-900/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-5">
            Join Us in Transforming<br />
            <span className="text-sun-400">Rural Infrastructure</span>
          </h2>
          <p className="text-white/60 font-body mb-8 text-lg">
            Whether you're a partner, investor, cooperative, or community — there's a place for you in the Jua Coolight mission.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
