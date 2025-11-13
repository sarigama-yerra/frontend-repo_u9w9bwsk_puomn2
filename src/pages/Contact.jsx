import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (res.ok) setStatus({ ok: true, msg: 'Thanks! I will get back soon.' })
      else setStatus({ ok: false, msg: json.detail || 'Something went wrong.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, msg: 'Network error. Try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#080910] text-white pt-20 pb-24">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-semibold">Contact</h2>
        <p className="text-zinc-400 mt-2">Interested in collaborations or AI workflow setups? Let’s connect.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input name="name" placeholder="Name" required className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none" />
          <input name="email" placeholder="Email" type="email" required className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none" />
          <textarea name="message" placeholder="Message" rows="5" required className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none" />
          <button disabled={loading} className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold disabled:opacity-60">{loading ? 'Sending...' : 'Send'}</button>
          {status && <p className={`text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</p>}
        </form>
      </div>
    </div>
  )
}
