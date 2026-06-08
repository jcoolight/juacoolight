import { Link } from 'react-router-dom'

import baridiRenderPlansPhoto    from '../assets/pbaridihub/pbhubrender+plans.jpg'
import ndeiya1Photo  from '../assets/ndeiyafarm/ndeiya1.jpg'
import ndeiya2Photo from '../assets/ndeiyafarm/ndeiya2.jpg'
import ndeiya3Photo from '../assets/ndeiyafarm/ndeiya3.jpg'

const ASSETS = {
  baridiRender:   baridiRenderPlansPhoto,
  ndeiya1:        ndeiya1Photo,
  ndeiya2:        ndeiya2Photo,
  ndeiya3:        ndeiya3Photo,
}

export default function Updates() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">Updates</p>
        <h1>Latest From the Field</h1>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Post 1 */}
          <article>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs text-sun-400 tracking-widest border border-sun-400/30 px-2.5 py-1 rounded-sm">R&D</span>
              <span className="font-mono text-xs text-white/30">2025</span>
            </div>
            <h2 className="font-display text-3xl text-white font-bold mb-5">
              Introducing Project BaridiHub
            </h2>
            <img
              src={ASSETS.baridiRender}
              alt="Project BaridiHub 3D design render"
              className="w-full rounded-sm object-cover h-72 mb-8"
            />
            <div className="space-y-5 text-white/60 font-body leading-relaxed">
              <p>
                Project BaridiHub is the flagship cold storage initiative under Jua Coolight, designed to provide
                reliable, solar-powered refrigeration services to smallholder farmers and rural communities. "Baridi"
                (meaning cold in Swahili) reflects the project's core purpose — preserving perishable agricultural
                produce by ensuring consistent, off-grid cooling infrastructure where it is needed most.
              </p>
              <p>
                The project focuses on reducing post-harvest losses by enabling farmers, cooperatives, and aggregation
                centers to store fruits, vegetables, and dairy products safely before they reach the market. By
                leveraging clean solar energy, BaridiHub eliminates dependence on unreliable grid electricity and
                costly diesel alternatives, making cold storage both accessible and sustainable.
              </p>
              <p>
                Beyond preservation, Project BaridiHub is designed as a community value hub that supports better
                market timing, improved pricing power for farmers, and reduced food waste. It plays a key role in
                strengthening rural agricultural value chains and improving overall food security while laying the
                foundation for scalable, clean energy-driven rural infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Cold Storage', 'R&D', 'BaridiHub', 'Solar'].map(tag => (
                <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-sm border border-white/10 text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <div className="border-t border-white/10" />

          {/* Post 2 */}
          <article>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-widest border px-2.5 py-1 rounded-sm" style={{ color: '#6fbb8a', borderColor: 'rgba(111,187,138,0.3)' }}>Field Work</span>
              <span className="font-mono text-xs text-white/30">2025</span>
            </div>
            <h2 className="font-display text-3xl text-white font-bold mb-5">
              Field Visit: Ndeiya Farm, Kiambu County
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <img src={ASSETS.ndeiya1} alt="Jua Coolight team visiting Ndeiya dairy farm" className="w-full rounded-sm object-cover h-52 md:col-span-1" />
              <img src={ASSETS.ndeiya2} alt="Dairy cows at Ndeiya Farm"                    className="w-full rounded-sm object-cover h-52" />
              <img src={ASSETS.ndeiya3} alt="Farm assessment during Ndeiya visit"           className="w-full rounded-sm object-cover h-52" />
            </div>
            <div className="space-y-5 text-white/60 font-body leading-relaxed">
              <p>
                Jua Coolight conducted a field visit to Ndeiya Farm, a dairy farming operation in Kiambu County,
                to explore potential partnership opportunities and better understand on-ground cold storage and
                energy needs. The engagement focused on assessing how post-harvest handling of milk and other
                perishable products could benefit from reliable off-grid refrigeration solutions.
              </p>
              <p>
                During the visit, we gathered insights into current milk storage practices, transportation
                timelines, and the challenges faced in maintaining product quality before reaching the market.
                We also explored broader energy constraints affecting farm operations, including lighting and
                general power reliability.
              </p>
              <p>
                The visit provided valuable real-world context for refining the design and deployment strategy
                of Jua Coolight systems, particularly in aligning cold storage capacity and energy services
                with the operational realities of dairy farming communities.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Field Visit', 'Dairy', 'Kiambu', 'Partnerships'].map(tag => (
                <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-sm border border-white/10 text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* LinkedIn CTA */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-white/50 font-body mb-4 text-sm">Stay connected for more field updates and project news.</p>
            <a
              href="https://ke.linkedin.com/company/juacoolight"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow Us on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
