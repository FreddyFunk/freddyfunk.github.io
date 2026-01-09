import { motion } from 'framer-motion'
import { socialLinks } from '../../data/social'

export function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-surface border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors duration-300"
            >
              <link.icon size={28} className="text-blue-500" />
              <span className="text-white font-medium">{link.name}</span>
              <span className="text-zinc-500 text-sm">{link.description}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
