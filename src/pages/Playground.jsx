import { useEffect, useRef, useState } from 'react'

const BOTS = ['MailMate', 'DataBrain', 'AutoPitch']

export default function Playground() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! Choose a bot and say hello.' }])
  const [input, setInput] = useState('')
  const [bot, setBot] = useState(BOTS[0])
  const [loading, setLoading] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bot, prompt: userMsg.content })
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', content: data.response }])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Error contacting backend.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#06070d] text-white pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Test Zone</h2>
          <select value={bot} onChange={(e) => setBot(e.target.value)} className="bg-white/10 border border-white/10 rounded-lg px-3 py-2">
            {BOTS.map(b => <option key={b}>{b}</option>)}
          </select>
        </div>

        <div ref={listRef} className="h-[60vh] overflow-y-auto rounded-2xl p-4 bg-white/5 border border-white/10">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[80%] mb-3 p-3 rounded-xl ${m.role === 'user' ? 'ml-auto bg-blue-500/20' : 'bg-white/10'}`}>
              <p className="text-sm text-zinc-200 whitespace-pre-wrap">{m.content}</p>
            </div>
          ))}
          {loading && (
            <div className="max-w-[80%] mb-3 p-3 rounded-xl bg-white/10">
              <p className="text-sm text-zinc-200">Thinking<span className="inline-block animate-pulse">...</span></p>
            </div>
          )}
        </div>

        <form onSubmit={sendMessage} className="mt-4 flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-blue-500/50" />
          <button disabled={loading} className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 font-semibold disabled:opacity-60">Send</button>
        </form>
      </div>
    </div>
  )
}
