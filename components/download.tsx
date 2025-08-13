import { Button } from './ui/button'
import { Download, Monitor, Smartphone, Globe, Check, Star } from 'lucide-react'

export function DownloadSection() {
  const systemRequirements = {
    windows: {
      os: 'Windows 10/11',
      processor: 'Intel Core i3 or equivalent',
      memory: '4 GB RAM',
      graphics: 'Integrated or discrete GPU',
      storage: '500 MB available space',
      additional: 'DirectX 11 or later'
    },
    mac: {
      os: 'macOS 10.15 or later',
      processor: 'Intel Core i3 or Apple Silicon',
      memory: '4 GB RAM',
      graphics: 'Integrated GPU',
      storage: '500 MB available space',
      additional: 'Metal support'
    },
    linux: {
      os: 'Ubuntu 18.04 or later',
      processor: 'Intel Core i3 or equivalent',
      memory: '4 GB RAM',
      graphics: 'OpenGL 3.3 support',
      storage: '500 MB available space',
      additional: 'SDL2 library'
    }
  }

  const features = [
    'Completely free, no IAP',
    'Multi‑platform support',
    'Regular content updates',
    'Community support',
    'Achievement system',
    'Cloud save sync'
  ]

  return (
    <section id="download" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Download Blood Money
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join tens of thousands of players and experience this unforgettable indie title.
            Free download—start your moral journey now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Download Options */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6">Choose your platform</h3>
              
              {/* Windows Download */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-8 h-8 text-primary-200" />
                    <div>
                      <h4 className="text-xl font-semibold">Windows</h4>
                      <p className="text-primary-200 text-sm">Recommended</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">500 MB</div>
                    <div className="text-primary-200 text-sm">Latest build</div>
                  </div>
                </div>
                <Button className="w-full bg-white text-primary-700 hover:bg-primary-50">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Windows
                </Button>
              </div>

              {/* Mac Download */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-8 h-8 text-primary-200" />
                    <div>
                      <h4 className="text-xl font-semibold">macOS</h4>
                      <p className="text-primary-200 text-sm">Optimized for Apple Silicon</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">480 MB</div>
                    <div className="text-primary-200 text-sm">Latest build</div>
                  </div>
                </div>
                <Button className="w-full bg-white text-primary-700 hover:bg-primary-50">
                  <Download className="w-5 h-5 mr-2" />
                  Download for macOS
                </Button>
              </div>

              {/* Web Version */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8 text-primary-200" />
                    <div>
                      <h4 className="text-xl font-semibold">Web</h4>
                      <p className="text-primary-200 text-sm">Play instantly—no download</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">Online</div>
                    <div className="text-primary-200 text-sm">Browser support</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  <Globe className="w-5 h-5 mr-2" />
                  Play in Browser
                </Button>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6">System Requirements</h3>
              
              {/* Windows Requirements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Monitor className="w-5 h-5 mr-2" />
                  Windows
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary-200">OS:</span>
                    <span>{systemRequirements.windows.os}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-200">CPU:</span>
                    <span>{systemRequirements.windows.processor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-200">Memory:</span>
                    <span>{systemRequirements.windows.memory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-200">Graphics:</span>
                    <span>{systemRequirements.windows.graphics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-200">Storage:</span>
                    <span>{systemRequirements.windows.storage}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Game Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary-200 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need help?</h3>
            <p className="text-primary-100 mb-6">
              If you encounter any issues during download or installation, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                FAQ
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
