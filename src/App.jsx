import Hero3D from './sections/Hero3D'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App() {
  return (
    <main style={{ background: '#0a0a0c', minHeight: '100vh' }}>
      <Hero3D />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}