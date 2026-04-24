import { Link } from 'react-router-dom'

const LOGO = 'https://juacoolight.lovable.app/assets/logo-BLL4pjuj.png'

export default function Footer() {
  return (
    <footer className="bg-earth-900 border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={LOGO} alt="Jua Coolight" className="h-8 w-auto" />
              <span className="font-display font-semibold text-white">Jua Coolight</span>
            </Link>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-4">
              Saving your harvest, lighting your community. Solar-powered cold storage and productive lighting for off-grid rural Kenya.
            </p>
            <a
              href="https://ke.linkedin.com/company/juacoolight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sun-400 hover:text-sun-500 text-sm font-body transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow us on LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-sun-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About' },
                { to: '/solution', label: 'Our Solution' },
                { to: '/how-it-works', label: 'How It Works' },
                { to: '/impact', label: 'Impact' },
                { to: '/team', label: 'Meet the Team' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/50 hover:text-white text-sm font-body transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-sun-500 mb-4">Solutions</h4>
            <ul className="space-y-2 text-white/50 text-sm font-body">
              <li>Solar Cold Storage</li>
              <li>Project BaridiHub</li>
              <li>Productive Lighting</li>
              <li>Lamp Leasing & Charging</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-sun-500 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href="mailto:jua.coolight@gmail.com" className="text-white/50 hover:text-white transition-colors">
                  jua.coolight@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254795942265" className="text-white/50 hover:text-white transition-colors">
                  +254 795 942 265
                </a>
              </li>
              <li className="text-white/50">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs font-mono">
            © 2026 Jua Coolight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
