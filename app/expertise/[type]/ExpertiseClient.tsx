'use client'
import Link from 'next/link'
import { EXPERTISE_TABS, type ExpertiseData } from '@/lib/expertise'

interface Props {
  data: ExpertiseData
  currentType: string
}

export default function ExpertiseClient({ data, currentType }: Props) {
  return (
    <>
      <div style={{ background: '#1A2744', padding: '110px 24px 36px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 16 }}>← Accueil</Link>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(2rem,4vw,3.6rem)' }}>
            Nos domaines <span style={{ color: '#C9A96E' }}>d&apos;intervention</span>
          </h1>
        </div>
      </div>

      <section style={{ padding: '52px 24px 72px', background: '#F5F2EC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 44 }}>
            {EXPERTISE_TABS.map(tab => (
              <Link key={tab.key} href={`/expertise/${tab.key}`} style={{
                fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
                fontWeight: tab.key === currentType ? 400 : 300,
                color: tab.key === currentType ? '#fff' : 'rgba(28,28,30,0.55)',
                padding: '9px 18px',
                border: `1px solid ${tab.key === currentType ? '#1A2744' : 'rgba(26,39,68,0.2)'}`,
                borderRadius: 4,
                background: tab.key === currentType ? '#1A2744' : 'none',
                textDecoration: 'none',
              }}>
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Hero */}
          <div style={{ borderRadius: 18, overflow: 'hidden', height: 'clamp(240px, 40vw, 340px)', position: 'relative', marginBottom: 44 }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${data.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(26,39,68,0.82),rgba(26,39,68,0.18))' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(24px,5vw,48px)' }}>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B8D4DA', marginBottom: 12 }}>{data.tag}</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(1.6rem,4vw,3rem)', marginBottom: 12, lineHeight: 1.1, whiteSpace: 'pre-line' }}>{data.title}</h2>
              <p style={{ fontFamily: "'Jost',sans-serif", color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(15px,1.6vw,16px)', fontWeight: 300, maxWidth: 460, lineHeight: 1.75 }}>{data.sub}</p>
            </div>
          </div>

          {/* Body */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 44, alignItems: 'start' }}>
            {/* <div>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16.5, lineHeight: 1.85, color: '#1C1C1E', fontWeight: 300, marginBottom: 16 }}>{data.p1}</p>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16.5, lineHeight: 1.85, color: '#1C1C1E', fontWeight: 300 }}>{data.p2}</p>
            </div> */}
            <div>
  <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16.5, lineHeight: 1.85, color: '#1C1C1E', fontWeight: 300, marginBottom: 16 }}>{data.p1}</p>
  <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16.5, lineHeight: 1.85, color: '#1C1C1E', fontWeight: 300, marginBottom: 36 }}>{data.p2}</p>

  {/* ── Contactez-nous button ── */}
  <Link
    href="/contact"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(26,39,68,0.12)',
      color: '#1A2744',
      fontFamily: "'Jost',sans-serif",
      fontSize: 13,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      fontWeight: 500,
      padding: '14px 28px',
      borderRadius: 40,
      textDecoration: 'none',
      border: '1.5px solid rgba(26,39,68,0.25)',
      transition: 'all 0.3s',
    }}
    className="expertise-contact-btn"
  >
    Contactez-nous
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </Link>
</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <style>{`
  .expertise-contact-btn:hover {
    background: #1A2744 !important;
    color: #fff !important;
    border-color: #1A2744 !important;
  }
`}</style>
              {data.steps.map(s => (
                <div key={s.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#fff', borderRadius: 10, padding: '16px 18px', borderLeft: '3px solid #2E7D32' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.7rem', fontWeight: 300, color: '#2E7D32', lineHeight: 1, flexShrink: 0, width: 30 }}>{s.n}</div>
                  <div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 13.5, fontWeight: 500, color: '#1A2744', marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.t}</div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 14.5, color: '#1C1C1E', fontWeight: 300, lineHeight: 1.7 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
