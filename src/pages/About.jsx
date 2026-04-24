import { Link } from 'react-router-dom'

const values = [
  { title: 'Sustainability',         desc: 'Promoting clean, renewable energy solutions in all our operations' },
  { title: 'Accessibility',          desc: 'Ensuring affordable and inclusive services for rural communities' },
  { title: 'Innovation',             desc: 'Designing integrated solutions that solve multiple challenges at once' },
  { title: 'Impact-Driven',          desc: 'Focusing on measurable improvements in farmer incomes and livelihoods' },
  { title: 'Community Empowerment',  desc: 'Supporting local resilience, productivity, and growth' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">About Us</p>
        <h1>Clean Energy–Powered Rural Infrastructure</h1>
        <p>
          Jua Coolight is a clean energy-powered rural infrastructure platform providing solar-driven
          cold storage and productive lighting services to smallholder farmers.
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Who We Are</p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2 mb-6">About Jua Coolight</h2>
          <div className="space-y-5 text-white/60 font-body leading-relaxed text-base">
            <p>
              Jua Coolight is a clean energy–powered rural infrastructure platform providing cold storage and productive
              lighting services to smallholder farmer communities, addressing post-harvest losses while expanding access
              to reliable off-grid lighting.
            </p>
            <p>
              In many rural and off-grid communities, farmers lack dependable refrigeration, forcing them to sell produce
              quickly at low prices or risk spoilage — leading to income loss, exploitation by middlemen, food waste, and
              reduced food security. At the same time, limited access to proper lighting constrains daily life and economic
              activity: shop owners are forced to close early, communities face heightened insecurity after dark, and reliance
              on low-quality lighting solutions exposes users to poor illumination and related health risks.
            </p>
            <p>
              Our solution is a solar-powered cold room tailored for rural deployment, with integrated productive lighting
              services. Geared to operate entirely off-grid using solar energy, it remains both environmentally sustainable
              and cost-effective. The system is designed to be scalable and adaptable, serving farming communities,
              cooperatives, and aggregation centers.
            </p>
            <p>
              Beyond the technology, Jua Coolight creates social and economic value by empowering farmers with greater control
              over when and how they sell their produce. By reducing spoilage, farmers can access better market prices,
              stabilize their incomes, and improve their livelihoods.
            </p>
            <p>
              Environmentally, Jua Coolight contributes to reduced food waste and lower carbon emissions by replacing
              diesel-powered or non-existent refrigeration systems with renewable energy. Socially, it strengthens rural
              resilience, supports food security, and promotes inclusive economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="card border-l-2 border-sun-500">
            <p className="section-label mb-3">Our Mission</p>
            <p className="text-white/70 font-body leading-relaxed">
              To provide affordable, clean energy-powered cold storage and productive lighting solutions that reduce
              post-harvest losses and improve livelihoods in off-grid rural communities.
            </p>
          </div>
          <div className="card border-l-2 border-sage-500">
            <p className="section-label mb-3" style={{ color: '#6fbb8a' }}>Our Vision</p>
            <p className="text-white/70 font-body leading-relaxed">
              To build a future where every rural community has access to reliable cold storage and productive energy,
              enabling sustainable agriculture, economic empowerment, and improved quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Our Story</p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2 mb-6">Why We Started Jua Coolight</h2>
          <div className="space-y-5 text-white/60 font-body leading-relaxed">
            <p>
              Jua Coolight was started to address two critical and interconnected challenges facing rural communities:
              post-harvest losses and energy poverty. In many off-grid areas, smallholder farmers lose a significant
              portion of their produce due to the lack of reliable cold storage, forcing them into distress sales and
              reducing their income.
            </p>
            <p>
              At the same time, limited access to affordable and dependable energy, especially lighting, restricts
              economic activity, compromises safety, and lowers quality of life.
            </p>
            <p>
              We saw an opportunity to solve these challenges together through a single, integrated solution. By combining
              solar-powered cold storage with productive energy services, Jua Coolight was created to not only preserve
              agricultural produce but also extend productive hours, improve safety, and support everyday rural needs.
              Our goal is to build infrastructure that directly improves livelihoods, strengthens rural economies, and
              enables communities to thrive sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Core Values</p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ title, desc }) => (
              <div key={title} className="card hover:border-sun-500/30 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-sun-400 mb-4" />
                <h4 className="font-display text-lg text-white font-semibold mb-2">{title}</h4>
                <p className="text-white/50 text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl text-white font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-white/50 font-body mb-8">Discover our solution or meet the team behind Jua Coolight.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/solution" className="btn-primary">Our Solution</Link>
            <Link to="/team" className="btn-outline">Meet the Team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
