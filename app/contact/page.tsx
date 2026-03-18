'use client'
import Link from 'next/link'
import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', tel: '', type: '', description: ''
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ prenom: '', nom: '', email: '', tel: '', type: '', description: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || "Erreur lors de l'envoi.")
      }
    } catch {
      setStatus('error')
      setErrorMsg('Erreur de connexion. Veuillez réessayer.')
    }
  }

  const inputStyle = {
    width: '100%', fontFamily: "'Jost',sans-serif", fontSize: 15,
    color: '#1C1C1E', background: '#fff',
    border: '1px solid rgba(26,39,68,0.18)', borderRadius: 6,
    padding: '12px 14px', fontWeight: 300 as const, outline: 'none',
    transition: 'border-color 0.2s',
  }
  const labelStyle = {
    fontFamily: "'Jost',sans-serif", fontSize: 12,
    letterSpacing: '0.15em', textTransform: 'uppercase' as const,
    color: '#1A2744', display: 'block' as const, marginBottom: 6, fontWeight: 500 as const,
  }

  return (
    <>
      <div style={{ background: '#1A2744', padding: 'clamp(90px,12vw,110px) clamp(20px,4vw,52px) 36px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: 16 }}>← Accueil</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 22, height: 1, background: '#2E7D32' }} />
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#B8D4DA', fontWeight: 300 }}>Nous contacter</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(1.8rem,4vw,3.6rem)' }}>
            Parlons de <span style={{ color: '#C9A96E' }}>votre projet</span>
          </h1>
        </div>
      </div>

      <section style={{ padding: 'clamp(32px,4vw,52px) clamp(20px,4vw,52px) 72px', background: '#F5F2EC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(32px,4vw,52px)', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.6rem,3vw,2.6rem)', fontWeight: 300, color: '#1A2744', marginBottom: 8, lineHeight: 1.1 }}>Votre projet mérite le meilleur</h2>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16, color: '#1C1C1E', fontWeight: 300, marginBottom: 30, lineHeight: 1.7 }}>
                Décrivez-nous votre projet et recevez un devis détaillé sous 48h.
              </p>
              {[
                { icon: '📍', label: 'Adresse',   value: '3 Rue Lavoisier, 93500 Pantin' },
                { icon: '📞', label: 'Téléphone', value: '+33 7 60 49 39 67' },
                { icon: '✉️', label: 'Email',      value: 'ramelec.ang@gmail.com' },
              ].map(d => (
                <div key={d.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, background: 'rgba(46,125,50,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 17 }}>{d.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2E7D32', fontWeight: 500, marginBottom: 4 }}>{d.label}</div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 15.5, color: '#1C1C1E', fontWeight: 400 }}>{d.value}</div>
                  </div>
                </div>
              ))}
              <div style={{ borderRadius: 14, overflow: 'hidden', marginTop: 26, border: '2px solid rgba(46,125,50,0.2)' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.1!2d2.3994!3d48.8981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66cfc7db26af5%3A0x3a9b0e5c2e3d0000!2s3%20Rue%20Lavoisier%2C%2093500%20Pantin!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr" width="100%" height="240" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 16, padding: 'clamp(24px,3vw,36px)', border: '1px solid rgba(26,39,68,0.08)', boxShadow: '0 2px 12px rgba(26,39,68,0.06)' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.9rem', fontWeight: 300, color: '#1A2744', marginBottom: 5 }}>Demandez un devis</h3>
              <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, color: '#1C1C1E', fontWeight: 300, marginBottom: 28 }}>Gratuit, sans engagement — réponse sous 48h</p>

              {status === 'success' && (
                <div style={{ background: 'rgba(46,125,50,0.08)', border: '1px solid rgba(46,125,50,0.3)', borderRadius: 10, padding: '18px 20px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22 }}>✅</span>
                  <div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 500, color: '#1B5E20', marginBottom: 4 }}>Message envoyé avec succès !</div>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 14, color: '#2E7D32', fontWeight: 300 }}>Nous vous répondrons dans les 48 heures.</div>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 10, padding: '14px 18px', marginBottom: 22, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 18 }}>⚠️</span>
                  <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 14, color: '#dc2626', fontWeight: 300 }}>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13, marginBottom: 13 }}>
                  <div>
                    <label style={labelStyle}>Prénom *</label>
                    <input value={form.prenom} onChange={e => set('prenom', e.target.value)} type="text" placeholder="Jean" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input value={form.nom} onChange={e => set('nom', e.target.value)} type="text" placeholder="Dupont" required style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: 13 }}>
                  <label style={labelStyle}>Email *</label>
                  <input value={form.email} onChange={e => set('email', e.target.value)} type="email" placeholder="jean@email.com" required style={inputStyle} />
                </div>
                <div style={{ marginBottom: 13 }}>
                  <label style={labelStyle}>Téléphone</label>
                  <input value={form.tel} onChange={e => set('tel', e.target.value)} type="tel" placeholder="+33 6 00 00 00 00" style={inputStyle} />
                </div>
                <div style={{ marginBottom: 13 }}>
                  <label style={labelStyle}>Type de projet *</label>
                  <select value={form.type} onChange={e => set('type', e.target.value)} required style={{ ...inputStyle, WebkitAppearance: 'none' }}>
                    <option value="">Sélectionnez votre projet...</option>
                    <option>Rénovation d&apos;appartement</option>
                    <option>Rénovation de maison</option>
                    <option>Rénovation de bureau</option>
                    <option>Rénovation de commerce</option>
                    <option>Rénovation salle de bain</option>
                    <option>Rénovation cuisine</option>
                    <option>Extension de maison</option>
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Description du projet *</label>
                  <textarea value={form.description} onChange={e => set('description', e.target.value)} placeholder="Décrivez votre projet : surface, travaux souhaités, délais, budget estimé..." required style={{ ...inputStyle, resize: 'vertical', minHeight: 120, lineHeight: 1.65 }} />
                </div>
                <button type="submit" disabled={status === 'sending'} style={{ width: '100%', background: status === 'sending' ? '#5a9e5e' : '#2E7D32', color: '#fff', fontFamily: "'Jost',sans-serif", fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, border: 'none', padding: '15px', cursor: status === 'sending' ? 'not-allowed' : 'pointer', borderRadius: 6, transition: 'background 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  {status === 'sending' ? (
                    <><span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />Envoi en cours...</>
                  ) : 'Envoyer ma demande →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } input:focus, textarea:focus, select:focus { border-color: #2E7D32 !important; box-shadow: 0 0 0 3px rgba(46,125,50,0.1); }`}</style>
    </>
  )
}
