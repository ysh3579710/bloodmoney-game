import { Header } from '@/components/header'
import { GameSection } from '@/components/game-section'
import { GameOverview } from '@/components/game-overview'
import { GameVideos } from '@/components/game-videos'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <GameSection />
      <GameOverview />
      <GameVideos />
      <FAQ />
      <Footer />
    </main>
  )
}
