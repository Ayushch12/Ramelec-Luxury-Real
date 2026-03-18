'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const EXPERTISE_LINKS = [
  { label: 'Rénovation salle de bain', href: '/expertise/salle-de-bain' },
  { label: 'Rénovation cuisine',       href: '/expertise/cuisine' },
  { label: "Rénovation d'appartement", href: '/expertise/appartement' },
  { label: 'Rénovation de maison',     href: '/expertise/maison' },
  { label: 'Rénovation de bureau',     href: '/expertise/bureau' },
  { label: 'Rénovation de commerce',   href: '/expertise/commerce' },
  // { label: 'Extension de maison',      href: '/expertise/extension-maison' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [realOpen,    setRealOpen]    = useState(false)
  const [expOpen,     setExpOpen]     = useState(false)
  const [mRealOpen,   setMRealOpen]   = useState(false)
  const [mExpOpen,    setMExpOpen]    = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(26,39,68,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        transition: 'all 0.3s',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: 46, height: 46 }}>
              <Image src="/logo.png" alt="RAMELEC" fill style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }} priority />
            </div>
            <div>
              <span style={{ display: 'block', fontFamily: "'Jost',sans-serif", color: '#fff', fontWeight: 500, letterSpacing: '0.22em', fontSize: 14, lineHeight: 1.1 }}>RAMELEC</span>
              <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", color: '#B8D4DA', fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase' }}>Luxury</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Link href="/" className="nav-link" style={{ fontFamily: "'Jost',sans-serif", fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 300, color: 'rgba(255,255,255,0.82)', padding: '18px 11px', textDecoration: 'none', transition: 'color 0.2s' }}>
              Accueil
            </Link>

            {/* Réalisations dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setRealOpen(true)} onMouseLeave={() => setRealOpen(false)}>
              <button style={{ fontFamily: "'Jost',sans-serif", fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 300, color: 'rgba(255,255,255,0.82)', padding: '18px 11px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.2s' }}
                className="nav-link">
                Nos réalisations
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.25s', transform: realOpen ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {realOpen && (
                <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(20,30,55,0.98)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, minWidth: 190, padding: '7px 0', boxShadow: '0 12px 40px rgba(0,0,0,0.45)', zIndex: 200 }}>
                  <Link href="/realisations/professionnel" className="drop-item" style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 13.5, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.75)', padding: '11px 20px', textDecoration: 'none', transition: 'all 0.15s' }}>Professionnel</Link>
                  <Link href="/realisations/particulier" className="drop-item" style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 13.5, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.75)', padding: '11px 20px', textDecoration: 'none', transition: 'all 0.15s' }}>Particulier</Link>
                </div>
              )}
            </div>

            {/* Expertise dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setExpOpen(true)} onMouseLeave={() => setExpOpen(false)}>
              <button style={{ fontFamily: "'Jost',sans-serif", fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 300, color: 'rgba(255,255,255,0.82)', padding: '18px 11px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, transition: 'color 0.2s' }}
                className="nav-link">
                Notre expertise
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: 'transform 0.25s', transform: expOpen ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {expOpen && (
                <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(20,30,55,0.98)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, minWidth: 230, padding: '7px 0', boxShadow: '0 12px 40px rgba(0,0,0,0.45)', zIndex: 200 }}>
                  {EXPERTISE_LINKS.map(e => (
                    <Link key={e.href} href={e.href} className="drop-item" style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 13.5, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.75)', padding: '11px 20px', textDecoration: 'none', transition: 'all 0.15s', whiteSpace: 'nowrap' }}>{e.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="nav-link" style={{ fontFamily: "'Jost',sans-serif", fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 300, color: 'rgba(255,255,255,0.82)', padding: '18px 11px', textDecoration: 'none', transition: 'color 0.2s' }}>
              Contact
            </Link>
          </nav>

          {/* Hamburger button */}
          <button
            className={`hamburger-btn hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu" style={{
          display: mobileOpen ? 'block' : 'none',
          background: 'rgba(20,30,55,0.99)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 0 24px',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}>
          <Link href="/" style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)', padding: '16px 24px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            Accueil
          </Link>

          {/* Réalisations accordion */}
          <div>
            <button onClick={() => setMRealOpen(!mRealOpen)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: "'Jost',sans-serif", fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)', padding: '16px 24px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              Nos réalisations
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: mRealOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {mRealOpen && (
              <div style={{ background: 'rgba(255,255,255,0.04)' }}>
                <Link href="/realisations/professionnel" style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', padding: '13px 36px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>Professionnel</Link>
                <Link href="/realisations/particulier" style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', padding: '13px 36px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Particulier</Link>
              </div>
            )}
          </div>

          {/* Expertise accordion */}
          <div>
            <button onClick={() => setMExpOpen(!mExpOpen)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: "'Jost',sans-serif", fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)', padding: '16px 24px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              Notre expertise
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: mExpOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {mExpOpen && (
              <div style={{ background: 'rgba(255,255,255,0.04)' }}>
                {EXPERTISE_LINKS.map((e, i) => (
                  <Link key={e.href} href={e.href} style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 14, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)', padding: '13px 36px', textDecoration: 'none', borderBottom: i < EXPERTISE_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(255,255,255,0.06)' }}>
                    {e.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)', padding: '16px 24px', textDecoration: 'none' }}>
            Contact
          </Link>
        </div>
      </header>
    </>
  )
}
