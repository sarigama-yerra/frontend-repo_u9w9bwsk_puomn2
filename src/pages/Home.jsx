import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05060a] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.2),transparent_40%)]" />

      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-blue-300/80 mb-4">MindForge Studio</p>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight mb-6 drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              Experiment. Automate. Innovate.
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl mb-8">
              MindForge Studio is my personal AI lab built with n8n, where I create intelligent workflows, chatbots, and automations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-white font-semibold shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:opacity-95 transition">
                View Projects
              </Link>
              <Link to="/playground" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white font-semibold backdrop-blur border border-white/10 hover:bg-white/20 transition">
                Test My AI
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
