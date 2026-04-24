import { Link } from 'react-router-dom'

const ASSETS = {
  noah:    'https://juacoolight.lovable.app/assets/noah-midikira-CLDOjkmR.jpg',
  stefan:  'https://juacoolight.lovable.app/assets/stefan-mari-f1tWQ4Y2.jpg',
  anthony: 'https://juacoolight.lovable.app/assets/anthony-mwangi-L5EAiqka.jpg',
}

const team = [
  {
    name:  'Noah Midikira',
    role:  'CEO & Co-Founder',
    photo: ASSETS.noah,
    bio:   "Leads the company's overall vision, strategy, and partnerships, driving the mission to deliver clean energy-powered cold storage and productive energy solutions to rural communities. Key focus is on scaling impact, securing strategic collaborations, and ensuring the business achieves both financial sustainability and social impact.",
  },
  {
    name:  'Stefan Mari',
    role:  'CTO & Co-Founder',
    photo: ASSETS.stefan,
    bio:   "Oversees the design, development, and optimization of the company's solar-powered cold storage and energy systems. Responsible for ensuring technical reliability, scalability, and innovation across both the refrigeration and productive energy infrastructure.",
  },
  {
    name:  'Anthony Mwangi',
    role:  'COO & Co-Founder',
    photo: ASSETS.anthony,
    bio:   'Manages day-to-day operations, including deployment of units, field implementation, and coordination with farming communities and cooperatives. Ensures smooth operational efficiency, service delivery, and alignment between on-ground execution and company objectives.',
  },
]

export default function Team() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">Our Team</p>
        <h1>Meet the Founders</h1>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {team.map(({ name, role, photo, bio }) => (
            <div key={name} className="card group hover:border-sun-500/30 transition-colors duration-300 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 border-2 border-white/10 group-hover:border-sun-500/40 transition-colors duration-300">
                <img src={photo} alt={name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl text-white font-semibold mb-1">{name}</h3>
              <p className="font-mono text-xs text-sun-400 tracking-widest mb-4">{role}</p>
              <p className="text-white/50 text-sm font-body leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-earth-800/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Our Story</p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-bold mt-2 mb-6">Why We Started Jua Coolight</h2>
          <div className="space-y-5 text-white/60 font-body leading-relaxed">
            <p>
              Jua Coolight was started to address two critical and interconnected challenges facing rural communities:
              post-harvest losses and energy poverty. In many off-grid areas, smallholder farmers lose a significant
              portion of their produce due to the lack of reliable cold storage, forcing them into distress sales and
              reducing their income. At the same time, limited access to affordable and dependable energy, especially
              lighting, restricts economic activity, compromises safety, and lowers quality of life.
            </p>
            <p>
              We saw an opportunity to solve these challenges together through a single, integrated solution. By
              combining solar-powered cold storage with productive energy services, Jua Coolight was created to not
              only preserve agricultural produce but also extend productive hours, improve safety, and support everyday
              rural needs. Our goal is to build infrastructure that directly improves livelihoods, strengthens rural
              economies, and enables communities to thrive sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl text-white font-bold mb-4">Want to Join Our Mission?</h2>
          <p className="text-white/50 font-body mb-8">
            We're always looking for partners, collaborators, and supporters who share our vision.
          </p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </div>
  )
}
