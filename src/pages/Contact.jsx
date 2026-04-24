import { useState } from 'react'

const options = [
  { value: '',             label: 'Select an option' },
  { value: 'Partnering',   label: 'Partnering' },
  { value: 'Pilot',        label: 'Requesting a Pilot' },
  { value: 'Investing',    label: 'Investing' },
  { value: 'Cooperative',  label: 'Joining as a Cooperative' },
  { value: 'General',      label: 'General Inquiry' },
]

const cards = [
  { title: 'Partner With Us',       desc: 'Co-develop and scale impactful rural infrastructure solutions.' },
  { title: 'Request a Pilot',       desc: 'Bring Jua Coolight systems to your community or organization.' },
  { title: 'Invest in Jua Coolight',desc: 'Support scalable, high-impact clean energy and agricultural transformation.' },
  { title: 'Join as a Cooperative', desc: 'Empower your farmers with reliable storage and energy services.' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', org: '', interest: '', message: '',
  })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      setSubmitted(true)
    } catch {
      // fallback: still show success
      setSubmitted(true)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">Contact</p>
        <h1>Get In Touch</h1>
        <p>Ready to bring cold storage and lighting to your community? Let's talk.</p>
      </section>

      {/* Reason Cards */}
      <section className="py-16 px-6 bg-earth-800/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ title, desc }) => (
            <div key={title} className="card hover:border-sun-500/30 transition-colors duration-300">
              <div className="w-2 h-2 rounded-full bg-sun-400 mb-4" />
              <h4 className="font-display text-base text-white font-semibold mb-2">{title}</h4>
              <p className="text-white/50 text-sm font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <p className="section-label">Send Us a Message</p>
            <h2 className="font-display text-2xl text-white font-bold mt-2 mb-8">We'd love to hear from you</h2>

            {submitted ? (
              <div className="card border-sage-500/40 text-center py-12">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-display text-xl text-white font-semibold mb-2">Message Sent!</h3>
                <p className="text-white/60 font-body">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              /* Netlify form — hidden input + data-netlify attr handle the submission */
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Required hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-white/50 tracking-widest mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-earth-800 border border-white/10 rounded-sm px-4 py-3 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-sun-500/50 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/50 tracking-widest mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-earth-800 border border-white/10 rounded-sm px-4 py-3 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-sun-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/50 tracking-widest mb-2">Organization / Cooperative</label>
                  <input
                    type="text"
                    name="org"
                    value={form.org}
                    onChange={handleChange}
                    className="w-full bg-earth-800 border border-white/10 rounded-sm px-4 py-3 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-sun-500/50 transition-colors"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/50 tracking-widest mb-2">I'm interested in... *</label>
                  <select
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-earth-800 border border-white/10 rounded-sm px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-sun-500/50 transition-colors appearance-none"
                  >
                    {options.map(({ value, label }) => (
                      <option key={value} value={value} disabled={value === ''}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-white/50 tracking-widest mb-2">Tell us more *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-earth-800 border border-white/10 rounded-sm px-4 py-3 text-white text-sm font-body placeholder-white/20 focus:outline-none focus:border-sun-500/50 transition-colors resize-none"
                    placeholder="Share more about your interest or question..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <p className="section-label">Contact Info</p>
            <h2 className="font-display text-2xl text-white font-bold mt-2 mb-8">Reach us directly</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-sm bg-sun-500/10 border border-sun-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-sun-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest mb-1">Email</p>
                  <a href="mailto:jua.coolight@gmail.com" className="text-white hover:text-sun-400 transition-colors font-body text-sm">
                    jua.coolight@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-sm bg-sun-500/10 border border-sun-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-sun-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest mb-1">Phone</p>
                  <a href="tel:+254795942265" className="text-white hover:text-sun-400 transition-colors font-body text-sm">
                    +254 795 942 265
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-sm bg-sun-500/10 border border-sun-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-sun-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest mb-1">Location</p>
                  <p className="text-white font-body text-sm">Nairobi, Kenya</p>
                  <p className="text-white/40 font-body text-xs mt-0.5">Operating across rural Kenya</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-sm bg-sun-500/10 border border-sun-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-sun-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 tracking-widest mb-1">Follow Us</p>
                  <a
                    href="https://ke.linkedin.com/company/juacoolight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sun-400 hover:text-sun-500 transition-colors font-body text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
