"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Video, FileText, Upload, Globe, MapPin, Calendar, Star } from 'lucide-react'
import Navigation from './components/Navigation'
import UploadSection from './components/UploadSection'
import MemoryGrid from './components/MemoryGrid'
import Hero from './components/Hero'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          
          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 gradient-text">
                  Capture Every Adventure
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Your journey deserves to be remembered. Upload photos, videos, and stories 
                  to create a beautiful digital diary of your travels.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Camera,
                    title: "Photo Memories",
                    description: "Upload and organize your travel photos with automatic tagging and location detection"
                  },
                  {
                    icon: Video,
                    title: "Video Stories",
                    description: "Share your adventure videos and create cinematic travel stories that come to life"
                  },
                  {
                    icon: FileText,
                    title: "Travel Journal",
                    description: "Write detailed stories about your experiences and keep a digital travel journal"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <feature.icon className="w-12 h-12 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      
      {activeSection === 'upload' && <UploadSection />}
      {activeSection === 'memories' && <MemoryGrid />}
    </main>
  )
}