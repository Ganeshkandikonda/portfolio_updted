import { motion } from 'framer-motion'

// Auto-calculate experience from joining date
function calculateExperience() {
  const joinDate = new Date('2024-05-15')
  const today = new Date()
  const diffTime = Math.abs(today - joinDate)
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30))
  const years = Math.floor(diffMonths / 12)
  const months = diffMonths % 12

  if (years >= 1) {
    return `${years}.${Math.floor(months / 1.2)}+`
  }
  return `${diffMonths}+ months`
}

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "Bash"]
  },
  {
    category: "AI/ML",
    items: ["PyTorch", "YOLOv8", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "LLaMA"]
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "Django", "REST APIs", "WebSockets"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "Database Optimization"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "Linux", "CI/CD", "AWS Basics"]
  },
  {
    category: "Hardware Integration",
    items: ["Serial Communication", "Pan-Tilt Control", "Actuators", "Sensors"]
  }
]

const highlights = [
  { metric: calculateExperience(), label: "Years Experience" },
  { metric: "30%", label: "Performance Gains" },
  { metric: "40%", label: "DB Automation" },
  { metric: "4", label: "Defense Projects" }
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" style={{ background: '#0a0a0c' }}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00f2ff' }}>{item.metric}</div>
              <div className="text-sm" style={{ color: '#64748b' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Professional <span style={{ background: 'linear-gradient(90deg, #00f2ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Summary</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              <p>
                <strong className="text-white">Software Developer at Neemus Software Solutions</strong> (since May 2024) with proven expertise in building AI-powered backend systems for mission-critical defense applications.
              </p>
              <p>
                Specialized in <strong className="text-white">computer vision</strong> (YOLOv8, OpenCV), <strong className="text-white">scalable API development</strong> (FastAPI, Flask), <strong className="text-white">hardware integration</strong> (pan-tilt systems, actuators), and <strong className="text-white">database optimization</strong> (PostgreSQL).
              </p>
              <p>
                Successfully delivered <strong className="text-white">3 production systems</strong> for India's Army and Navy. Currently developing an advanced <strong className="text-white">semi-automated weapon control system</strong> with AI-powered targeting for IAAIIC Bangalore.
              </p>
            </div>

            {/* What I Bring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(0,242,255,0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h4 className="text-white font-bold mb-4 text-lg">💼 What I Bring to Your Team</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#94a3b8' }}>
                <li className="flex items-start gap-2"><span style={{ color: '#00f2ff' }}>→</span> Production-ready AI/ML + Hardware integration experience</li>
                <li className="flex items-start gap-2"><span style={{ color: '#00f2ff' }}>→</span> Clean, maintainable Python code following best practices</li>
                <li className="flex items-start gap-2"><span style={{ color: '#00f2ff' }}>→</span> End-to-end project ownership from design to deployment</li>
                <li className="flex items-start gap-2"><span style={{ color: '#00f2ff' }}>→</span> Experience with high-stakes, deadline-driven defense projects</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h3 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: '#00f2ff' }}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', color: '#e2e8f0' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
