import { GameEmbed } from '@/components/game-embed'

export function GameSection() {
  const gameUrl = process.env.NEXT_PUBLIC_GAME_IFRAME_URL || 'https://yoplay.io/bloodmoney.embed'

  return (
    <section id="game" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Game Introduction */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blood Money Game · Play Free Online
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No download required. Play BloodMoney in your browser.
          </p>
        </div>

        {/* Game iframe */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <GameEmbed src={gameUrl} />
          </div>
        </div>

        {/* Key Traits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">⚖️</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Moral Choices · Multiple Endings</h3>
            <p className="text-gray-600 text-sm">Every click has a price. Face the question: how far will you go to survive?</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">👆</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">One‑Input · Fully Captioned</h3>
            <p className="text-gray-600 text-sm">Extremely simple input with complete captions—easy to play without losing emotional depth.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Soft Pixel Art · Stark Contrast</h3>
            <p className="text-gray-600 text-sm">Pastel visuals contrast with a dark theme, amplifying moral tension.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">🎵</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Emotional Score · Compact Impact</h3>
            <p className="text-gray-600 text-sm">Original tracks (e.g., “Make It Worth It”). About 30 minutes—short yet unforgettable.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
