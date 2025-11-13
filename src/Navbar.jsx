import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles, Github, Youtube, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.7)]">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="font-semibold tracking-wide">MindForge Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Home</NavLink>
            <NavLink to="/projects" className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Projects</NavLink>
            <NavLink to="/playground" className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Test Zone</NavLink>
            <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-1">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc-300 hover:text-white" aria-label="Toggle Menu">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-2">
          <NavLink to="/" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Projects</NavLink>
          <NavLink to="/playground" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Test Zone</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={({isActive}) => `${linkBase} ${isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>Contact</NavLink>
        </div>
      )}
    </header>
  )
}
