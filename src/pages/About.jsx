export default function About() {
  return (
    <div className="min-h-screen bg-[#080910] text-white pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-semibold">About</h2>
        <p className="text-zinc-300 mt-4 leading-relaxed">
          I’m experimenting with automation, AI agents, and n8n workflows to make smarter, more personal AI tools.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/10" />
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-300">Hi, I’m Tirth Shah. I build custom automations and AI workflows using n8n and API integrations. This space is my sandbox to test ideas, build things I want to use, and share them.</p>
            <div className="mt-4 text-sm text-zinc-400">Find me on GitHub, YouTube, and LinkedIn.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
