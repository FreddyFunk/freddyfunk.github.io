import { motion } from 'framer-motion'
import { MapPin, Building2, Sparkles } from 'lucide-react'

const infoBadges = [
  { icon: MapPin, label: 'Germany' },
  { icon: Building2, label: 'DevOps & SRE' },
  { icon: Sparkles, label: 'Open Source' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 flex flex-col gap-6"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
            >
              <span className="text-white">Frederic</span>
              <br />
              <span className="text-zinc-600">Laing</span>
            </motion.h1>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-lg leading-relaxed font-light mb-6"
            >
              Deep passion for hardware accelerated applications. Tinkerer at heart working on open-source projects and my home lab in my spare time.
            </motion.p>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg italic text-blue-400/80 mb-10"
            >
              "Who dares, wins."
            </motion.p>

            {/* Info Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-sm font-mono text-zinc-500"
            >
              {infoBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <badge.icon size={14} className="text-blue-400" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-blue-500/25 rounded-3xl blur-2xl animate-pulse-slow group-hover:bg-blue-500/50 group-hover:scale-105 transition-all duration-700 ease-in-out" />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-zinc-900">
                <img
                  src="https://avatars.githubusercontent.com/u/27208977?v=4"
                  alt="Frederic Laing"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                {/* Inner Ring Overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
