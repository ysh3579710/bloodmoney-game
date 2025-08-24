export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BLOODMONEY</h3>
                <p className="text-sm text-gray-400">ONLINE</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Experience high‑stakes action with BloodMoney Online. Play now and dominate the competition.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BloodMoney Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
