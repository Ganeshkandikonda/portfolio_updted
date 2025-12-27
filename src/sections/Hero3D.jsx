import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'

// Auto-calculate experience from joining date
function calculateExperience() {
  const joinDate = new Date('2024-05-15')
  const today = new Date()
  const diffTime = Math.abs(today - joinDate)
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30))
  const years = Math.floor(diffMonths / 12)
  const months = diffMonths % 12

  if (years >= 1) {
    return `${years}+ Years`
  }
  return `${diffMonths}+ Months`
}

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.15
    meshRef.current.rotation.y = time * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color="#00f2ff"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0}
          emissive="#00f2ff"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  )
}

export default function Hero3D() {
  const experience = calculateExperience()

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0c 0%, #0f0f12 100%)' }}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,242,255,0.15) 0%, transparent 70%)' }} />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} color="#ffffff" />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block px-5 py-2 mb-6 text-sm font-semibold tracking-widest uppercase rounded-full" style={{ color: '#00f2ff', border: '1px solid rgba(0,242,255,0.3)', background: 'rgba(0,242,255,0.05)' }}>
            Python Developer • AI/ML Engineer • Defense Tech
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white">
            <span style={{ background: 'linear-gradient(90deg, #00f2ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ganesh Kandikonda</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
            <strong className="text-white">{experience}</strong> building production-grade AI systems for <strong className="text-white">Indian Army & Navy</strong>. Specialized in real-time object detection, hardware integration, and automated weapon control systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 font-bold rounded-xl transition-all duration-300 w-full sm:w-auto"
              style={{ background: '#00f2ff', color: '#0a0a0c', boxShadow: '0 0 30px rgba(0,242,255,0.3)' }}
            >
              View My Work
            </a>
            <a
              href="/Ganesh_Kandikondaup.pdf"
              target="_blank"
              className="px-8 py-4 font-bold rounded-xl transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            >
              📄 Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full flex justify-center p-2" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00f2ff' }} />
        </div>
      </motion.div>
    </section>
  )
}