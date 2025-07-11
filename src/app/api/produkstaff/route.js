// src/app/api/produkstaff/route.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// GET: ambil semua data produk
export async function GET() {
  const { data, error } = await supabase.from('produk').select('*')

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}

// PUT: update status verifikasi
export async function PUT(request) {
  try {
    const body = await request.json()
    const { id, verifikasi } = body

    const { error } = await supabase
      .from('produk')
      .update({ verifikasi })
      .eq('id', id)

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }

    return new Response(JSON.stringify({ message: 'Update berhasil' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Request tidak valid' }), { status: 400 })
  }
}
