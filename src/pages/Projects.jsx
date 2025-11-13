import { motion } from 'framer-motion'

const projects = [
  {
    title: 'MailMate',
    desc: 'AI email responder built with n8n',
    cta: 'Try Demo',
  },
  {
    title: 'DataBrain',
    desc: 'RAG-powered knowledge agent',
    cta: 'Try Demo',
  },
  {
    title: 'AutoPitch',
    desc: 'AI startup idea generator',
    cta: 'Try Demo',
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#07080f] text-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-semibold">Projects</h2>
          <p className="text-zinc-400 mt-3">A curated set of experiments and agents.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition group">
              <div className="h-28 rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/10 mb-4 group-hover:from-blue-500/40 group-hover:to-violet-500/40 transition" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-zinc-400 mt-1">{p.desc}</p>
              <div className="mt-4 flex gap-2">
                <a href="/playground" className="inline-flex rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold">{p.cta}</a>
                <a href="#" className="inline-flex rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold border border-white/10">See Workflow</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
