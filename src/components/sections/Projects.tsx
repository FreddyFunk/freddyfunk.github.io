import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Star } from 'lucide-react'
import { projects, Project } from '../../data/projects'
import { useProjectStats } from '../../hooks/useProjectStats'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { stars, downloads, loading } = useProjectStats(project.githubUrl, project.flathubId)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-zinc-700/50 transition-colors duration-500"
    >
      {/* Image */}
      {project.imageUrl && (
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
          <img
            alt={project.title}
            src={project.imageUrl}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </h3>
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Visit Website"
              >
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 mb-8 leading-relaxed font-light">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-sm font-mono text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              {loading ? '...' : (stars ?? '-')}
            </span>
            {(downloads || project.flathubId) && (
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
                <Download size={12} className="text-blue-400" />
                {loading ? '...' : (downloads?.toLocaleString() ?? '-')}
              </span>
            )}
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {project.language}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Open Source Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
