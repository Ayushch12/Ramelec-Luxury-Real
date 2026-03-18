import Link from 'next/link'
import Image from 'next/image'

// Move CSS to globals to avoid hydration mismatch from inline <style> tags
export default function Footer() {
  return (
    <footer style={{ background: '#F0EFE9', borderTop: '1px solid rgba(26,39,68,0.12)', padding: 'clamp(40px,5vw,56px) clamp(20px,4vw,52px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ paddingBottom: 32, borderBottom: '1px solid rgba(26,39,68,0.1)' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
              <div style={{ position: 'relative', width: 42, height: 42, flexShrink: 0 }}>
                <Image src="/logo.png" alt="RAMELEC" fill style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: "'Jost',sans-serif", color: '#1A2744', fontWeight: 700, letterSpacing: '0.2em', fontSize: 16 }}>RAMELEC</span>
                <span style={{ display: 'block', fontFamily: "'Cormorant Garamond',serif", color: '#2E7D32', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase' }}>Luxury</span>
              </div>
            </div>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, lineHeight: 1.8, color: '#1C1C1E', fontWeight: 300, maxWidth: 210 }}>
              Rénovation haut de gamme, tous corps d&apos;état.<br />Paris &amp; Île-de-France.
            </p>
            <div style={{ display: 'flex', gap: 13, marginTop: 16 }}>
              {[{ label: 'Instagram', href: '#' }, { label: 'Facebook', href: '#' }].map(s => (
                <a key={s.label} href={s.href} className="footer-social">{s.label}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1A2744', marginBottom: 16, fontWeight: 700 }}>Navigation</h4>
            {[
              { label: 'Accueil',                      href: '/' },
              { label: 'Réalisations — Professionnel', href: '/realisations/professionnel' },
              { label: 'Réalisations — Particulier',   href: '/realisations/particulier' },
              { label: 'Notre expertise',              href: '/expertise/appartement' },
              { label: 'Contact',                      href: '/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="footer-nav-link">{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1A2744', marginBottom: 16, fontWeight: 700 }}>Contact</h4>
            {[
              { icon: '📍', text: '3 Rue Lavoisier, 93500 Pantin' },
              { icon: '📞', text: '+33 7 60 49 39 67' },
              { icon: '✉️', text: 'ramelec.ang@gmail.com' },
            ].map(d => (
              <div key={d.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 14, flexShrink: 0, marginTop: 2 }}>{d.icon}</span>
                <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, color: '#1C1C1E', fontWeight: 400, lineHeight: 1.55 }}>{d.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: '#1C1C1E', letterSpacing: '0.03em' }}>
            © 2026 RAMELEC Luxury — Tous droits réservés
          </span>
          <Link href="/mentions-legales" className="footer-legal" style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: '#1C1C1E', textDecoration: 'none' }}>
            Mentions légales — Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}
