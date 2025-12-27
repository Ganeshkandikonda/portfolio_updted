import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4" style={{ background: '#0a0a0c' }}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-12 md:p-16 text-center rounded-3xl overflow-hidden"
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(20px)'
                    }}
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,242,255,0.05) 0%, transparent 50%)' }} />

                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full" style={{ color: '#00f2ff', border: '1px solid rgba(0,242,255,0.3)', background: 'rgba(0,242,255,0.05)' }}>
                            Open to Opportunities
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Let's <span style={{ background: 'linear-gradient(90deg, #00f2ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>
                        </h2>

                        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
                            Looking for <strong className="text-white">Python Developer</strong>, <strong className="text-white">AI/ML Engineer</strong>, or <strong className="text-white">Backend Developer</strong> roles. Available for full-time positions and exciting project collaborations.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                            <a
                                href="mailto:ganeshkandikonda125@gmail.com"
                                className="group flex items-center gap-3 px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105"
                                style={{ background: '#00f2ff', color: '#0a0a0c', boxShadow: '0 0 30px rgba(0,242,255,0.3)' }}
                            >
                                📧 ganeshkandikonda125@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <span>📱</span>
                                <span className="text-white">+91 9515067125</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <span>�</span>
                                <span className="text-white">Hyderabad, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4 mb-12">
                            <a
                                href="https://linkedin.com/in/ganesh-kandikonda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/ganeshkandikonda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                            >
                                GitHub
                            </a>
                            <a
                                href="/Ganesh_Kandikondaup.pdf"
                                target="_blank"
                                className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                            >
                                Resume PDF
                            </a>
                        </div>

                        {/* Footer */}
                        <div className="pt-8 text-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: '#64748b' }}>
                            <p>© 2025 Ganesh Kandikonda • Built with React, Three.js & ❤️</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
