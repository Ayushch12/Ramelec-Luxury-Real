import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prenom, nom, email, tel, type, description } = body

    if (!prenom || !nom || !email || !description) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'RAMELEC Contact <onboarding@resend.dev>',
        to: ['ramelec.ang@gmail.com'],
        reply_to: email,
        subject: `Nouvelle demande de devis — ${type || 'Non précisé'} — ${prenom} ${nom}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f8f5;border-radius:8px"><div style="background:#1A2744;padding:20px 24px;border-radius:8px 8px 0 0"><h1 style="color:#fff;font-size:20px;margin:0;font-weight:400;letter-spacing:2px">RAMELEC</h1><p style="color:#B8D4DA;font-size:12px;margin:4px 0 0;letter-spacing:1px;text-transform:uppercase">Nouvelle demande de devis</p></div><div style="background:#fff;padding:28px;border:1px solid #e8e6e0;border-top:none;border-radius:0 0 8px 8px"><table style="width:100%;border-collapse:collapse;margin-bottom:20px"><tr style="border-bottom:1px solid #f0ede8"><td style="padding:10px 0;color:#2E7D32;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;width:140px">Prénom</td><td style="padding:10px 0;color:#1C1C1E;font-size:15px">${prenom}</td></tr><tr style="border-bottom:1px solid #f0ede8"><td style="padding:10px 0;color:#2E7D32;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600">Nom</td><td style="padding:10px 0;color:#1C1C1E;font-size:15px">${nom}</td></tr><tr style="border-bottom:1px solid #f0ede8"><td style="padding:10px 0;color:#2E7D32;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600">Email</td><td style="padding:10px 0;font-size:15px"><a href="mailto:${email}" style="color:#1A2744">${email}</a></td></tr><tr style="border-bottom:1px solid #f0ede8"><td style="padding:10px 0;color:#2E7D32;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600">Téléphone</td><td style="padding:10px 0;color:#1C1C1E;font-size:15px">${tel || 'Non renseigné'}</td></tr><tr><td style="padding:10px 0;color:#2E7D32;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600">Type de projet</td><td style="padding:10px 0;color:#1C1C1E;font-size:15px">${type || 'Non précisé'}</td></tr></table><div style="background:#f9f8f5;border-left:3px solid #2E7D32;padding:16px 18px;border-radius:0 6px 6px 0"><p style="color:#2E7D32;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;margin:0 0 8px">Description du projet</p><p style="color:#1C1C1E;font-size:15px;line-height:1.7;margin:0;white-space:pre-line">${description}</p></div><div style="margin-top:24px;padding-top:16px;border-top:1px solid #f0ede8;text-align:center"><a href="mailto:${email}" style="display:inline-block;background:#2E7D32;color:#fff;padding:12px 28px;text-decoration:none;font-size:13px;letter-spacing:1px;text-transform:uppercase;border-radius:4px">Répondre à ${prenom}</a></div></div><p style="color:#999;font-size:11px;text-align:center;margin-top:16px">Message envoyé depuis le formulaire de contact de ramelec.fr</p></div>`,
      }),
    })

    if (!res.ok) {
      const error = await res.json()
      console.error('Resend error:', error)
      return NextResponse.json({ error: "Erreur lors de l'envoi. Veuillez réessayer." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Erreur serveur. Veuillez réessayer.' }, { status: 500 })
  }
}
