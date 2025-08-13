import { Header } from '@/components/header'
import { GameSection } from '@/components/game-section'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <GameSection />
      <FAQ />
      <Footer />
    </main>
  )
}
