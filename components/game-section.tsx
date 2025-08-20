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

        {/* Core Gameplay Steps */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Explore Core Gameplay Steps</h2>
          <p className="text-gray-600 text-sm mt-2">
            Follow these basics to understand BLOODMONEY!'s main mechanics before diving in.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">💥</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Attack Harvey · Earn Money</h3>
            <p className="text-gray-600 text-sm">Keep attacking Harvey to make cash as the dark humor and on‑screen chaos escalate.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">💸</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Buy Upgrades · Multiply Profits</h3>
            <p className="text-gray-600 text-sm">Purchase increasingly brutal upgrades that intensify suffering while boosting profits.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Manage Strategy · Maximize Earnings</h3>
            <p className="text-gray-600 text-sm">Balance upgrades to optimize income and watch Harvey’s bizarre transformation compound.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">🔓</div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Unlock Endings · Shape Fate</h3>
            <p className="text-gray-600 text-sm">Your upgrade path unlocks unique endings—Good, Bad, or Normal—based on your choices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
