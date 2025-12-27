import { motion } from 'framer-motion'

const projects = [
  {
    title: "Sensor to Shoot - Automated Weapon Control",
    client: "Indian Army (IAAIIC Bangalore)",
    description: "Developing a semi-automated weapon control system with AI-powered targeting. Integrates computer vision with hardware control (pan-tilt mechanism, actuators) for precise target acquisition and engagement.",
    impact: [
      "3 Operation Modes: Manual UI, Semi-Auto (detection + auto-aim), Full-Auto",
      "Real-time person detection with auto pan-tilt to center target in frame",
      "Hardware integration with actuators for automated firing sequence"
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Flask", "Serial Communication", "Pan-Tilt Control", "Actuators"],
    status: "In Development",
    color: "#ef4444",
    current: true
  },
  {
    title: "Real-Time Object Detection System",
    client: "Indian Army",
    description: "Engineered a military-grade object detection pipeline processing live video feeds. Trained YOLOv8 models on 50,000+ annotated images across 10 critical object classes. Integrated with Flask backend and PostgreSQL for mission-critical logging.",
    impact: [
      "Achieved 30% faster inference through model optimization",
      "Deployed for active defense surveillance operations",
      "Processing 30+ FPS on edge hardware"
    ],
    tech: ["Python", "PyTorch", "YOLOv8", "Flask", "PostgreSQL", "OpenCV"],
    status: "✅ Completed",
    color: "#00f2ff"
  },
  {
    title: "ADRD Depth & Height Estimation",
    client: "Defense Research",
    description: "Built an advanced depth estimation system for real-time target identification and height calculation from camera feeds. Contributed to both deep learning model training and React-based visualization dashboard.",
    impact: [
      "Live target identification with sub-second latency",
      "Accurate height estimation from monocular video",
      "Integrated with existing surveillance infrastructure"
    ],
    tech: ["Python", "YOLO", "OpenCV", "Flask", "React", "Depth Estimation"],
    status: "✅ Completed",
    color: "#3b82f6"
  },
  {
    title: "Maritime Threat Prediction Platform",
    client: "Indian Navy",
    description: "Built a geo-spatial analytics platform to predict maritime threats including piracy hotspots. Implemented XGBoost models with interpretable AI (LLaMA integration) and GeoServer for map visualization.",
    impact: [
      "Predictive analytics for threat assessment",
      "LLaMA-powered natural language explanations",
      "Interactive map-based threat visualization"
    ],
    tech: ["FastAPI", "XGBoost", "React", "LLaMA", "GeoServer", "PostgreSQL"],
    status: "✅ Completed",
    color: "#8b5cf6"
  }
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative p-8 rounded-2xl transition-all duration-500 overflow-hidden ${project.current ? 'lg:col-span-2 xl:col-span-3' : ''}`}
      style={{
        background: project.current ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.03)',
        border: project.current ? '2px solid rgba(239,68,68,0.3)' : '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Hover Glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"
        style={{ backgroundColor: project.color }}
      />

      {/* Current Project Badge */}
      {project.current && (
        <div className="absolute top-4 right-4">
          <span className="animate-pulse inline-block w-3 h-3 rounded-full mr-2" style={{ background: '#ef4444' }}></span>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#ef4444' }}>Currently Working</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
        <span
          className="text-xs font-bold tracking-widest uppercase py-1.5 px-4 rounded-full"
          style={{ color: project.color, border: `1px solid ${project.color}33`, background: `${project.color}10` }}
        >
          {project.status}
        </span>
        <span className="text-xs font-semibold" style={{ color: '#64748b' }}>
          Client: {project.client}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-sm" style={{ color: '#94a3b8' }}>
        {project.description}
      </p>

      {/* Key Features/Impact */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#64748b' }}>
          {project.current ? 'Key Features' : 'Key Impact'}
        </h4>
        <ul className="space-y-2">
          {project.impact.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#cbd5e1' }}>
              <span style={{ color: project.color }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', color: '#cbd5e1' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4" style={{ background: '#0a0a0c' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Defense <span style={{ background: 'linear-gradient(90deg, #00f2ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
          </h2>
          <p style={{ color: '#64748b' }} className="max-w-2xl text-lg">
            Production systems built for India's defense sector. 3 projects completed, 1 currently in development at IAAIIC Bangalore.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}