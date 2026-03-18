'use client'
import Link from 'next/link'
import { partProjects } from '@/lib/projects'

export default function RealisationsPart() {
  return (
    <>
      <div style={{ background: '#1A2744', padding: 'clamp(90px,12vw,110px) clamp(20px,4vw,52px) 36px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', marginBottom: 16 }}>← Accueil</Link>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(1.8rem,4vw,3.6rem)' }}>
            Nos projets — <span style={{ color: '#C9A96E' }}>Particulier</span>
          </h1>
        </div>
      </div>
      <section style={{ padding: 'clamp(32px,4vw,52px) clamp(20px,4vw,52px) 72px', background: '#F5F2EC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 0, marginBottom: 44, borderBottom: '2px solid rgba(26,39,68,0.12)', overflowX: 'auto' }}>
            <Link href="/realisations/professionnel" style={{ fontFamily: "'Jost',sans-serif", fontSize: 13.5, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 300, color: '#1C1C1E', padding: '12px 24px', borderBottom: '2px solid transparent', marginBottom: -2, textDecoration: 'none', whiteSpace: 'nowrap' }}>Professionnel</Link>
            <Link href="/realisations/particulier" style={{ fontFamily: "'Jost',sans-serif", fontSize: 13.5, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 400, color: '#1A2744', padding: '12px 24px', borderBottom: '2px solid #2E7D32', marginBottom: -2, textDecoration: 'none', whiteSpace: 'nowrap' }}>Particulier</Link>
          </div>
          <div className="real-grid-part" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(12px,1.5vw,18px)' }}>
            {partProjects.map(p => (
              <div key={p.id} style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 'clamp(220px,30vw,340px)', background: '#1a2744' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(26,39,68,0.85) 0%,rgba(26,39,68,0.2) 50%,transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 14px' }}>
                  <div style={{ fontFamily: "'Jost',sans-serif", color: '#fff', fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{p.title}</div>
                  <div style={{ fontFamily: "'Jost',sans-serif", color: 'rgba(255,255,255,0.9)', fontSize: 13.5, fontWeight: 300, marginBottom: 12 }}>{p.sub}</div>
                  <Link href={`/realisations/${p.id}`} style={{ display: 'inline-block', background: '#C9A96E', color: '#fff', fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 400, padding: '7px 14px', borderRadius: 20, textDecoration: 'none' }}>En savoir plus</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
