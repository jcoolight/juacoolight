import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import LOGO from '../assets/logo/JC_Logo.png'

const navLinks = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About' },
  { to: '/solution',    label: 'Solution' },
  { to: '/how-it-works',label: 'How It Works' },
  { to: '/impact',      label: 'Impact' },
  { to: '/updates',     label: 'Updates' },
  { to: '/team',        label: 'Team' },
  { to: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-earth-900/95 backdrop-blur-md border-b border-white/10 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" onClick={handleNavClick}>
          <img src={LOGO} alt="Jua Coolight" className="h-8 w-auto" />
          <span className="font-display font-semibold text-white text-base hidden sm:block">
            Jua Coolight
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `font-body text-sm transition-colors duration-150 ${
                  isActive
                    ? 'text-sun-400 font-medium'
                    : 'text-white/70 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="hidden sm:inline-flex btn-primary text-xs px-4 py-2"
          >
            Partner With Us
          </Link>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-earth-900/98 backdrop-blur-md border-t border-white/10 px-6 py-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block py-3 font-body text-sm border-b border-white/5 transition-colors duration-150 ${
                  isActive ? 'text-sun-400 font-medium' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="btn-primary mt-4 w-full justify-center text-sm"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  )
}
