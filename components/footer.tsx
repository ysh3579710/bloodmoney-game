export function Footer() {
  const footerLinks = {
    game: [
      { name: 'Play Game', href: '#game' },
      { name: 'How to Play', href: '#how-to-play' },
      { name: 'Leaderboard', href: '#leaderboard' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BLOODMONEY</h3>
                <p className="text-sm text-gray-400">ONLINE</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience high‑stakes action with BloodMoney Online. Play now and dominate the competition.
            </p>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">🎮 Game</h4>
            <ul className="space-y-2">
              {footerLinks.game.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📋 Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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
