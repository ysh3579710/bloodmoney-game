import { Button } from './ui/button'
import { Download, Play, Star, Users, Award } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          BloodMoney Game
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          High‑stakes competitive experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Play Now
          </button>
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Learn More
          </button>
        </div>
        
        {/* Live Stats */}
        <div className="mt-12 flex justify-center">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            🔴 15,847 players online
          </div>
        </div>
      </div>
    </section>
  )
}
