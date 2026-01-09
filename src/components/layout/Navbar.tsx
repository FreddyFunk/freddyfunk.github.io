import { motion } from 'framer-motion'
import { navLinks } from '../../data/social'

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-zinc-800/80 flex items-center justify-center text-blue-400 font-mono text-xs group-hover:bg-zinc-700 transition-colors">
              {'</>'}
            </div>
            <span className="text-base font-medium">
              <span className="text-white">fredfunk</span>
              <span className="text-blue-400">.tech</span>
            </span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label={link.name}
              >
                <link.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
