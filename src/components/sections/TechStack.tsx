import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'languages',
    skills: ['Rust', 'C++', 'Java', 'Bash'],
  },
  {
    name: 'devops',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'CI/CD', 'GitOps'],
  },
  {
    name: 'infrastructure',
    skills: ['AWS', 'Azure', 'On-Prem'],
  },
  {
    name: 'shaders',
    skills: ['GLSL', 'WGSL'],
  },
  {
    name: 'protocols',
    skills: ['REST API', 'D-Bus', 'PipeWire', 'Wayland'],
  },
  {
    name: 'databases',
    skills: ['PostgreSQL'],
  },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h4 className="text-xs font-mono font-semibold uppercase text-blue-400 tracking-widest pl-1">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm text-zinc-300 text-sm rounded-lg border border-white/5 hover:border-blue-500/50 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
