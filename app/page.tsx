'use client'
import HeroSlider from '@/components/HeroSlider'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Company Description */}
      <section style={{ padding: 'clamp(40px,6vw,72px) clamp(20px,4vw,52px)', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="cdesc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
            <div>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 'clamp(16px,1.8vw,17px)', lineHeight: 1.85, color: '#1C1C1E', fontWeight: 300, marginBottom: 16 }}>
                RAMELEC est une entreprise de rénovation tous corps d&apos;état qui réinvente vos espaces en alliant esthétique, ergonomie et performance énergétique. Grâce à notre expertise en gestion de projet et optimisation des agencements, nous transformons votre bien pour qu&apos;il réponde aux modes de vie contemporains tout en valorisant son patrimoine sur le long terme.
              </p>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 'clamp(16px,1.8vw,17px)', lineHeight: 1.85, color: '#1C1C1E', fontWeight: 300 }}>
                Avec plus d'années d&apos;expérience, nous concevons des rénovations adaptées aux exigences du marché immobilier, garantissant un équilibre parfait entre confort, design et rentabilité.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 'clamp(16px,1.8vw,17px)', lineHeight: 1.85, color: '#1C1C1E', fontWeight: 300, marginBottom: 16 }}>
                Que vous soyez propriétaire, investisseur ou bailleur, RAMELEC vous accompagne avec une approche sur mesure et une expertise reconnue. Bénéficiez d&apos;une rénovation clé en main, premium et réactive.
              </p>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 'clamp(16px,1.8vw,17px)', lineHeight: 1.85, color: '#1C1C1E', fontWeight: 500 }}>
                Faites confiance à RAMELEC pour une rénovation innovante, adaptée aux défis d&apos;aujourd&apos;hui et aux exigences de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <div style={{ background: '#1A2744', padding: 'clamp(32px,5vw,64px) clamp(20px,4vw,52px)', borderRadius: 'clamp(12px,2vw,24px)', margin: '0 clamp(12px,2vw,24px) clamp(24px,4vw,52px)' }}>
        <div className="strengths-inner" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1, background: '#2E7D32' }} />
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8D4DA', fontWeight: 400 }}>NOS POINTS FORTS</span>
            <div style={{ width: 32, height: 1, background: '#2E7D32' }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(1.7rem,2.5vw,2.6rem)', textAlign: 'center', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.2 }}>
            Nous abordons chaque projet avec une attention particulière sur ces enjeux majeurs.
          </h2>
          <div className="str-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { n: '01', t: 'Qualité & Excellence',       d:"Une équipe expérimentée, de la conception à la livraison. Un seul interlocuteur, une exigence d'excellence constante sur chaque détail de votre projet." },
              { n: '02', t: 'Respect des délais',         d: "Planning détaillé, suivi quotidien, transparence totale. Votre chantier avance comme prévu, sans mauvaises surprises." },
              { n: '03', t: 'Valorisation du patrimoine', d: "DPE optimisé, matériaux nobles, agencements intelligents — pour votre confort et votre investissement." },
              { n: '04', t: 'Gestion transparente',       d: "Devis détaillé, suivi en temps réel, compte-rendu hebdomadaire. Vous savez exactement où en est votre chantier." },
            ].map(s => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.04)', padding: 'clamp(20px,3vw,32px) clamp(16px,2.5vw,28px)' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 300, color: '#2E7D32', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontSize: 'clamp(1.2rem,2vw,1.45rem)', fontWeight: 400, marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, color: '#D4EAEE', lineHeight: 1.75, fontWeight: 300 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section style={{ padding: 'clamp(40px,5vw,64px) clamp(20px,4vw,52px)', background: '#1A2744' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 1, background: '#2E7D32' }} />
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2E7D32', fontWeight: 400 }}>Tous corps d&apos;état</span>
            <div style={{ width: 32, height: 1, background: '#2E7D32' }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(1.8rem,2.5vw,2.8rem)', textAlign: 'center', marginBottom: 36 }}>
            Un seul interlocuteur, toutes les expertises
          </h2>
          <div className="svcs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.07)' }}>
            {[
              { icon: '⚡', t: 'Électricité',             d: 'Mise aux normes, domotique, éclairage architectural', href: '/expertise/appartement' },
              { icon: '🔧', t: 'Plomberie',               d: 'Salles de bain, cuisines, réseaux complets',          href: '/expertise/maison' },
              { icon: '🏗️', t: 'Maçonnerie',             d: 'Ouvertures, murs porteurs, chapes, carrelage',         href: '/expertise/appartement' },
              { icon: '🪵', t: 'Menuiserie',              d: 'Parquet, portes, dressings, mobilier sur mesure',     href: '/expertise/maison' },
              { icon: '🚿', t: 'Salle de bain',           d: 'Douche italienne, baignoire, double vasque, carrelage', href: '/expertise/salle-de-bain' },
              { icon: '🍳', t: 'Cuisine',                  d: 'Cuisine sur mesure, îlot central, crédence, plan travail', href: '/expertise/cuisine' },
            ].map(s => (
              <Link key={s.t} href={s.href} className="svc-card" style={{ background: '#1A2744', padding: 'clamp(18px,2.5vw,28px) clamp(16px,2vw,24px)', textDecoration: 'none', display: 'block', transition: 'background 0.35s' }}>
                <div style={{ fontSize: 22, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontSize: '1.25rem', fontWeight: 400, marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 14, color: '#C8E2E8', lineHeight: 1.7, fontWeight: 300 }}>{s.d}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
