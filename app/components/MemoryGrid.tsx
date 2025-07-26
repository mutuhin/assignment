"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Play, MapPin, Calendar, Eye } from 'lucide-react'

interface Memory {
  id: string
  type: 'photo' | 'video' | 'story'
  title: string
  location: string
  date: string
  content: string
  thumbnail?: string
  likes: number
  comments: number
  views: number
}

// Sample data for demonstration
const sampleMemories: Memory[] = [
  {
    id: '1',
    type: 'photo',
    title: 'Sunset at Bali Beach',
    location: 'Bali, Indonesia',
    date: '2024-01-15',
    content: 'An incredible sunset view from the beaches of Bali.',
    thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
    likes: 42,
    comments: 8,
    views: 156
  },
  {
    id: '2',
    type: 'story',
    title: 'My Adventure in the Alps',
    location: 'Swiss Alps, Switzerland',
    date: '2024-01-10',
    content: 'The journey through the Swiss Alps was absolutely breathtaking. Waking up to snow-capped mountains every morning felt like living in a fairy tale...',
    likes: 28,
    comments: 12,
    views: 89
  },
  {
    id: '3',
    type: 'video',
    title: 'Skiing Down the Mountain',
    location: 'Chamonix, France',
    date: '2024-01-08',
    content: 'First time skiing and it was amazing!',
    thumbnail: 'https://images.unsplash.com/photo-1551524164-6cf2ac011fef?w=400&h=300&fit=crop',
    likes: 67,
    comments: 15,
    views: 234
  },
  {
    id: '4',
    type: 'photo',
    title: 'Tokyo Street Food',
    location: 'Tokyo, Japan',
    date: '2024-01-03',
    content: 'Exploring the incredible street food scene in Tokyo.',
    thumbnail: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=400&h=300&fit=crop',
    likes: 91,
    comments: 23,
    views: 312
  },
  {
    id: '5',
    type: 'story',
    title: 'Lost in Translation',
    location: 'Kyoto, Japan',
    date: '2024-01-01',
    content: 'Getting lost in the bamboo forests of Kyoto led to the most magical discovery - a hidden temple where monks were practicing meditation...',
    likes: 56,
    comments: 18,
    views: 178
  }
]

export default function MemoryGrid() {
  const [memories] = useState<Memory[]>(sampleMemories)
  const [filter, setFilter] = useState<'all' | 'photo' | 'video' | 'story'>('all')
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)

  const filteredMemories = memories.filter(memory => 
    filter === 'all' || memory.type === filter
  )

  const filters = [
    { id: 'all', label: 'All', color: 'from-blue-400 to-purple-500' },
    { id: 'photo', label: 'Photos', color: 'from-green-400 to-blue-500' },
    { id: 'video', label: 'Videos', color: 'from-purple-400 to-pink-500' },
    { id: 'story', label: 'Stories', color: 'from-orange-400 to-red-500' }
  ]

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Your Travel Memories</h1>
          <p className="text-xl text-gray-400">Relive your adventures through photos, videos, and stories</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-2xl p-2 flex flex-wrap gap-2">
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption.id as any)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  filter === filterOption.id
                    ? `bg-gradient-to-r ${filterOption.color} text-white`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filterOption.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Memory Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredMemories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedMemory(memory)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group hover:bg-white/5 transition-all duration-300"
            >
              {/* Memory Header */}
              {memory.thumbnail && (
                <div className="relative overflow-hidden">
                  <img
                    src={memory.thumbnail}
                    alt={memory.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {memory.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      memory.type === 'photo' ? 'bg-green-500/80' :
                      memory.type === 'video' ? 'bg-purple-500/80' :
                      'bg-orange-500/80'
                    } text-white backdrop-blur-sm`}>
                      {memory.type}
                    </span>
                  </div>
                </div>
              )}

              {/* Memory Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {memory.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{memory.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(memory.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {memory.content}
                </p>

                {/* Memory Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 hover:text-red-400 transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      <span>{memory.likes}</span>
                    </motion.button>
                    <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{memory.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                      <Eye className="w-4 h-4" />
                      <span>{memory.views}</span>
                    </button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-primary-400 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredMemories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Eye className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No memories found</h3>
            <p className="text-gray-400">Try adjusting your filter or upload some new memories!</p>
          </motion.div>
        )}
      </div>

      {/* Memory Detail Modal */}
      {selectedMemory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMemory(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMemory.thumbnail && (
              <img
                src={selectedMemory.thumbnail}
                alt={selectedMemory.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
            )}
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedMemory.title}</h2>
              <div className="flex items-center space-x-4 text-gray-400 mb-6">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedMemory.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedMemory.date).toLocaleDateString()}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedMemory.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 hover:text-red-400 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{selectedMemory.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{selectedMemory.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                    <Eye className="w-5 h-5" />
                    <span>{selectedMemory.views}</span>
                  </button>
                </div>
                <button className="bg-primary-500 text-white px-6 py-2 rounded-xl hover:bg-primary-600 transition-colors">
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}