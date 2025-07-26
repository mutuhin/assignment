"use client"

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { Camera, Video, FileText, Upload, X, MapPin, Calendar, Tag } from 'lucide-react'

interface UploadedFile {
  id: string
  file: File
  type: 'photo' | 'video' | 'story'
  preview?: string
}

export default function UploadSection() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [activeTab, setActiveTab] = useState<'photo' | 'video' | 'story'>('photo')
  const [storyContent, setStoryContent] = useState('')
  const [metadata, setMetadata] = useState({
    location: '',
    date: '',
    tags: ''
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      type: activeTab,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
    }))
    
    setUploadedFiles(prev => [...prev, ...newFiles])
  }, [activeTab])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': activeTab === 'photo' ? ['.jpeg', '.jpg', '.png', '.gif'] : [],
      'video/*': activeTab === 'video' ? ['.mp4', '.mov', '.avi', '.mkv'] : [],
      'text/*': activeTab === 'story' ? ['.txt', '.md'] : []
    },
    disabled: activeTab === 'story'
  })

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
  }

  const handleStorySubmit = () => {
    if (storyContent.trim()) {
      const storyFile = new File([storyContent], 'story.txt', { type: 'text/plain' })
      const newStory: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        file: storyFile,
        type: 'story'
      }
      setUploadedFiles(prev => [...prev, newStory])
      setStoryContent('')
    }
  }

  const tabs = [
    { id: 'photo', label: 'Photos', icon: Camera, color: 'from-green-400 to-blue-500' },
    { id: 'video', label: 'Videos', icon: Video, color: 'from-purple-400 to-pink-500' },
    { id: 'story', label: 'Stories', icon: FileText, color: 'from-orange-400 to-red-500' }
  ]

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Upload Your Memories</h1>
          <p className="text-xl text-gray-400">Share your travel photos, videos, and stories</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="glass rounded-2xl p-2 flex space-x-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {activeTab !== 'story' ? (
            <div
              {...getRootProps()}
              className={`glass rounded-2xl p-12 border-2 border-dashed transition-all duration-300 cursor-pointer ${
                isDragActive 
                  ? 'border-primary-400 bg-primary-400/10' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <input {...getInputProps()} />
              <div className="text-center space-y-4">
                <motion.div
                  animate={{ 
                    scale: isDragActive ? [1, 1.1, 1] : 1,
                    rotate: isDragActive ? [0, 5, -5, 0] : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${
                    tabs.find(t => t.id === activeTab)?.color
                  } flex items-center justify-center`}
                >
                  <Upload className="w-10 h-10 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {isDragActive ? `Drop your ${activeTab}s here` : `Upload ${activeTab}s`}
                  </h3>
                  <p className="text-gray-400">
                    Drag and drop your files or click to browse
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Write Your Story</h3>
              <textarea
                value={storyContent}
                onChange={(e) => setStoryContent(e.target.value)}
                placeholder="Tell us about your adventure..."
                className="w-full h-40 bg-dark-800 rounded-xl p-4 text-white placeholder-gray-400 border border-gray-600 focus:border-primary-400 focus:outline-none resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStorySubmit}
                disabled={!storyContent.trim()}
                className="mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Story
              </motion.button>
            </div>
          )}

          {/* Metadata Section */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Add Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </label>
                <input
                  type="text"
                  value={metadata.location}
                  onChange={(e) => setMetadata(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Where was this taken?"
                  className="w-full bg-dark-800 rounded-xl p-3 text-white placeholder-gray-400 border border-gray-600 focus:border-primary-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={metadata.date}
                  onChange={(e) => setMetadata(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-dark-800 rounded-xl p-3 text-white border border-gray-600 focus:border-primary-400 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <Tag className="w-4 h-4" />
                  <span>Tags</span>
                </label>
                <input
                  type="text"
                  value={metadata.tags}
                  onChange={(e) => setMetadata(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="beach, sunset, adventure"
                  className="w-full bg-dark-800 rounded-xl p-3 text-white placeholder-gray-400 border border-gray-600 focus:border-primary-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Uploaded Files</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uploadedFiles.map((uploadedFile) => (
                <motion.div
                  key={uploadedFile.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-xl p-4 relative group"
                >
                  <button
                    onClick={() => removeFile(uploadedFile.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                  
                  {uploadedFile.preview ? (
                    <img
                      src={uploadedFile.preview}
                      alt="Preview"
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                  ) : (
                    <div className="w-full h-24 bg-dark-700 rounded-lg mb-2 flex items-center justify-center">
                      {uploadedFile.type === 'video' ? (
                        <Video className="w-8 h-8 text-gray-400" />
                      ) : (
                        <FileText className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-300 truncate">{uploadedFile.file.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{uploadedFile.type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}