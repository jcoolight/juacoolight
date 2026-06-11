import { Link } from 'react-router-dom'

import coldStoragePhoto from '../assets/webhomepage/cold-storage.jpg'
import lightingPhoto from '../assets/webhomepage/lighting-services.jpg'
import baridiCadRenderPhoto from '../assets/pbaridihub/baridihub_cad_elevation_drawing.jpg'

const ASSETS = {
  baridiRender: baridiCadRenderPhoto,
  coldStorage:  coldStoragePhoto,
  lighting:     lightingPhoto,
}

const coldFeatures = [
  'Fully off-grid solar operation',
  'Integrated temperature control and monitoring',
  'Scalable and modular design',
  'Suitable for fruits, vegetables, and dairy',
  'Serves farming communities, cooperatives, and aggregation centers',
]

const lightingFeatures = [
  'Charging ports for privately owned electric lamps',
  'Lamp leasing with varying brightness levels',
  'Household and commercial lighting options',
  'Enables extended shop operating hours',
  'Improves community safety at night',
]

const techStack = [
  { title: 'Solar Power System',          desc: 'High-efficiency solar panels providing clean, renewable energy entirely off-grid.' },
  { title: 'Battery Storage System',       desc: 'Reliable battery storage ensures consistent power supply day and night.' },
  { title: 'Cold Room Temperature Control',desc: 'Precision temperature control systems to maintain optimal preservation conditions.' },
  { title: 'Monitoring System (IoT)',       desc: 'Real-time monitoring to track temperature, usage, and system health.' },
  { title: 'Modular & Scalable Design',     desc: 'Infrastructure designed to scale — from a single farm to a full cooperative network.' },
]

export default function Solution() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">Our Solution</p>
        <h1>One Platform. Two Solutions.</h1>
        <p>
          A modular, solar-powered rural infrastructure platform that integrates cold storage and
          productive lighting services to address post-harvest losses and energy poverty in off-grid communities.
        </p>
      </section>

      {/* Cold Storage */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Project BaridiHub</p>
              <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2 mb-5">
                Solar-Powered Cold Storage
              </h2>
              <p className="text-white/60 font-body leading-relaxed mb-6">
                The cold storage system consists of solar-powered, fully off-grid cold rooms designed for farmers,
                cooperatives, and aggregation centers. By providing reliable refrigeration, the system reduces spoilage
                of perishable produce, stabilizes market prices, and improves farmer incomes by allowing them to store
                and sell produce at optimal market conditions.
              </p>
              <ul className="space-y-3">
                {coldFeatures.map(f => (
                  <li key={f} className="flex items-start gap-3 text-white/70 text-sm font-body">
                    <span className="text-sun-400 mt-0.5 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img src={ASSETS.baridiRender} alt="Project BaridiHub 3D design" className="w-full rounded-sm object-cover h-64" />
              <img src={ASSETS.coldStorage}  alt="Solar-powered cold storage"   className="w-full rounded-sm object-cover h-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Lighting */}
      <section className="py-24 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src={ASSETS.lighting} alt="Solar-powered lighting services" className="w-full rounded-sm object-cover h-80" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label" style={{ color: '#6fbb8a' }}>Productive Energy</p>
              <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2 mb-5">
                Productive Lighting Services
              </h2>
              <p className="text-white/60 font-body leading-relaxed mb-6">
                The productive lighting system provides essential lighting services to surrounding communities.
                This includes integrated charging ports for privately owned electric lamps, as well as a lamp
                leasing service offering different brightness levels to meet varying household and commercial needs.
              </p>
              <ul className="space-y-3">
                {lightingFeatures.map(f => (
                  <li key={f} className="flex items-start gap-3 text-white/70 text-sm font-body">
                    <span className="mt-0.5 font-bold" style={{ color: '#6fbb8a' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                {['Shops Open Longer', 'Household Lighting', 'Security Lighting'].map(tag => (
                  <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-sm border border-sage-500/30 text-sage-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label">Technology</p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2">
              Built for Rural <span className="text-sun-400">Resilience</span>
            </h2>
            <p className="text-white/50 font-body mt-3 max-w-xl mx-auto">
              Our technology stack is purpose-built for off-grid, rural deployment — reliable, scalable, and clean.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map(({ title, desc }) => (
              <div key={title} className="card hover:border-sun-500/30 transition-colors duration-300">
                <div className="w-8 h-0.5 bg-sun-500/50 mb-5" />
                <h4 className="font-display text-base text-white font-semibold mb-2">{title}</h4>
                <p className="text-white/50 text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-earth-800/50 border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl text-white font-bold mb-4">See It In Action</h2>
          <p className="text-white/50 font-body mb-8">Discover the step-by-step process of how farmers benefit from Jua Coolight.</p>
          <Link to="/how-it-works" className="btn-primary">How It Works</Link>
        </div>
      </section>
    </div>
  )
}
