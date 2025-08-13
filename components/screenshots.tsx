'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const screenshots = [
    {
      id: 1,
      title: 'Main Menu',
      description: 'Clean and impactful main interface design',
      image: '/screenshot1.jpg'
    },
    {
      id: 2,
      title: 'Moral Choice Moment',
      description: 'Key scenes where tough decisions must be made',
      image: '/screenshot2.jpg'
    },
    {
      id: 3,
      title: 'In‑Game',
      description: 'Tense and immersive gameplay',
      image: '/screenshot3.jpg'
    },
    {
      id: 4,
      title: 'Ending Selection',
      description: 'Multiple endings waiting to be discovered',
      image: '/screenshot4.jpg'
    },
    {
      id: 5,
      title: 'Settings',
      description: 'Player‑friendly game settings',
      image: '/screenshot5.jpg'
    },
    {
      id: 6,
      title: 'Achievements',
      description: 'Rich achievement system to unlock',
      image: '/screenshot6.jpg'
    }
  ]

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % screenshots.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? screenshots.length - 1 : selectedImage - 1)
  }

  return (
    <section id="screenshots" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Screenshots
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the visual world of Blood Money—unique pixel art and striking atmosphere.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-primary-700 dark:text-primary-300 font-medium text-sm">
                      Click to view
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4 bg-white dark:bg-dark-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Display */}
              <div className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-primary-700 dark:text-primary-300 font-medium">
                      Screenshot {selectedImage + 1}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {screenshots[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {screenshots[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
