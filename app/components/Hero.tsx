"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">Your Journey Starts Here</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Preserve Your
                <span className="block gradient-text">Travel Stories</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-400 max-w-lg leading-relaxed"
              >
                Create a beautiful digital collection of your adventures. Upload photos, 
                videos, and stories from your travels in one stunning, organized place.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('upload')}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Start Uploading</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('memories')}
                className="glass px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>View Memories</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Visual Container */}
              <motion.div
                animate={{ 
                  rotate: [0, 1, 0, -1, 0],
                  scale: [1, 1.02, 1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass rounded-3xl p-8 h-96 flex items-center justify-center"
              >
                <div className="space-y-6 text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl mx-auto flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-2 border-white border-t-transparent rounded-full"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                    <p className="text-gray-400">Upload your first memory</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl opacity-80"
              />

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0, 3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}