'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  { tag: "Appartements & Maisons",   title: "L'Excellence\nà chaque détail",   sub: "Rénovation haut de gamme, Paris",          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format&fit=crop' },
  { tag: "Cuisines Sur Mesure",       title: "Transformer\nvos espaces",         sub: "Tous corps d'état — clé en main",          img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop' },
  { tag: "Salles de Bain",            title: "Raffinement\net précision",         sub: "Matériaux nobles, finitions impeccables",  img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80&auto=format&fit=crop' },
  { tag: "Séjours & Espaces de Vie",  title: "Votre vision,\nnotre métier",       sub: "Du concept à la réalisation",              img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80&auto=format&fit=crop' },
  { tag: "Bureaux & Commerces",       title: "Bâtir\nl'exceptionnel",             sub: "Rénovation prestige Île-de-France",        img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80&auto=format&fit=crop' },
  { tag: "Salles de bain & Cuisines",  title: "Chaque espace,\nrepensé",            sub: "SDB & Cuisine haut de gamme sur mesure",   img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80&auto=format&fit=crop' },
]

export default function HeroSlider() {
  const [cur, setCur] = useState(0)
  const [prog, setProg] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((i: number) => {
    setCur(i)
    setAnimKey(k => k + 1)
    setProg(0)
  }, [])

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo])

  useEffect(() => {
    setProg(0)
    const start = performance.now()
    const dur = 6000
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur * 100, 100)
      setProg(p)
      if (p < 100) raf = requestAnimationFrame(tick)
      else next()
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [cur, next])

  const sl = slides[cur]

  return (
    <section style={{ position: 'relative', height: '60vh', minHeight: 560, overflow: 'hidden', background: '#1A2744', marginTop: 66 }}>
      {/* BG */}
      <div key={animKey} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${sl.img})`, backgroundSize: 'cover', backgroundPosition: 'center', animation: 'kb 8s ease-in-out forwards' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(26,39,68,0.82) 0%,rgba(26,39,68,0.32) 55%,transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(28,28,30,0.5),transparent 50%)', zIndex: 1 }} />
      </div>

      {/* Content */}
      <div key={`c${animKey}`} style={{ position: 'absolute', bottom: 80, left: 0, padding: '0 52px', zIndex: 10, maxWidth: 640 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14, opacity: 0, animation: 'fup 0.7s ease 0.1s forwards' }}>
          <div style={{ width: 24, height: 1, background: '#2E7D32' }} />
          <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 12.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B8D4DA', fontWeight: 300 }}>{sl.tag}</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, lineHeight: 1.05, marginBottom: 11, whiteSpace: 'pre-line', opacity: 0, animation: 'fup 0.8s ease 0.2s forwards', fontSize: 'clamp(3rem,6.5vw,5.5rem)' }}>{sl.title}</h1>
        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(184,212,218,0.85)', fontWeight: 300, marginBottom: 26, opacity: 0, animation: 'fup 0.8s ease 0.32s forwards' }}>{sl.sub}</p>
        <div style={{ display: 'flex', gap: 11, opacity: 0, animation: 'fup 0.8s ease 0.44s forwards' }}>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2E7D32', color: '#fff', padding: '13px 26px', fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 400, textDecoration: 'none', transition: 'background 0.3s' }}>
            Demander un devis →
          </Link>
          <Link href="/realisations/particulier" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.35)', color: '#fff', padding: '13px 26px', fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 300, background: 'none', textDecoration: 'none' }}>
            Nos réalisations
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 28, left: 52, display: 'flex', gap: 6, zIndex: 10, alignItems: 'center' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{ width: i === cur ? 24 : 6, height: i === cur ? 5 : 6, borderRadius: i === cur ? 3 : '50%', background: i === cur ? '#2E7D32' : 'rgba(255,255,255,0.28)', border: 'none', cursor: 'pointer', transition: 'all 0.4s', padding: 0 }} />
        ))}
      </div>

      {/* Next arrow */}
      <button onClick={next} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 42, height: 42, border: '1px solid rgba(255,255,255,0.2)', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Progress */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.08)', zIndex: 10 }}>
        <div style={{ height: '100%', background: '#2E7D32', width: `${prog}%`, transition: 'width 0.1s linear' }} />
      </div>

      <style>{`
        @keyframes kb { from { transform: scale(1); } to { transform: scale(1.07); } }
        @keyframes fup { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  )
}
