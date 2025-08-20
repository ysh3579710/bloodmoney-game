export function GameOverview() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About BloodMoney Game</h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            The premise is simple: you suffer from a fatal illness and need to raise $25,000 to pay for surgery. 
            You meet Harvey Harvington at a booth claiming, “Every click on me = $1.” You decide to take advantage of him to make money…
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: narrative + sections */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Story & setup</h3>
              <p className="text-gray-700">
                BloodMoney is a dark clicker game where you urgently need $25,000 for surgery. You meet a man named Harvey Harvington, who pays $1 for every click on him. What starts as easy money soon takes a disturbing turn.
              </p>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The BloodMoney Game's Endings</h3>
              <p className="text-gray-700 mb-4">Three endings exist depending on how you treat Harvey and the tools you use.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Merciful Ending</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>You reach the $25,000 goal using minimal harm.</li>
                    <li>Harvey survives in relatively good condition.</li>
                    <li>Bittersweet rather than tragic.</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Neutral Ending</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>A mix of harmless and harmful upgrades.</li>
                    <li>Harvey suffers noticeable damage.</li>
                    <li>Moral ambiguity remains.</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Dark Ending</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>All the most harmful upgrades purchased.</li>
                    <li>Harvey deteriorates drastically.</li>
                    <li>Grim, horror‑leaning conclusion.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to play BloodMoney Game</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Meet Harvey – A cheerful stranger offers you $1 for every click on him.</li>
                <li>Start Clicking – Tap to earn your first few dollars. It’s easy… at first.</li>
                <li>Upgrade Your Tools – Visit the shop to buy new items that increase your earnings per click.</li>
                <li>Chase Your Goal – Gather $25,000 to pay for your life‑saving surgery.</li>
                <li>Face the Consequences – Your choices and tools shape Harvey’s fate… and your own.</li>
              </ol>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upgrade Items & Prices</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  ['Feather', '$100'],
                  ['Needle', '$500'],
                  ['Hammer', '$1,500'],
                  ['Scissors', '$3,000'],
                  ['Match', '$6,000'],
                  ['Knife', '$10,000'],
                ].map(([name, price]) => (
                  <div key={name} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800">
                    <span>{name}</span>
                    <span className="font-semibold text-gray-900">{price}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why this bloodMoney game stands out</h3>
              <p className="text-gray-700">
                BloodMoney blends idle mechanics with psychological storytelling, forcing you to ask what a dollar—and a decision—are really worth. 
                If you want a short, unsettling, thought‑provoking experience, BloodMoney delivers.
              </p>
            </section>
          </div>

          {/* Right: Quick facts */}
          <aside className="lg:col-span-1">
            <div className="space-y-6">
              <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick facts</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <span className="font-medium text-gray-900">Click to Earn Money:</span> Repeatedly click Harvey — each click earns you $1.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Upgrade System:</span> Spend money at the Mystery Shop to buy items that increase dollars per click.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Game Experience:</span> Cute pastel visuals contrast with disturbing horror elements.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">All Endings:</span> Three endings based on how you treat Harvey and whether you achieve your goal.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Playtime:</span> ~30 minutes per run with high replayability.
                  </li>
                </ul>
              </section>

              <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tips for efficient runs</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  <li>Prioritize upgrades to accelerate milestones and endings.</li>
                  <li>Listen to dialogue cues to gauge which ending you’re heading toward.</li>
                  <li>Replay to discover new lines, scenes, and outcomes.</li>
                  <li>Use headphones to heighten tension and immersion.</li>
                </ul>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}


