'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Is BloodMoney Online free to play?',
      answer: 'Yes. BloodMoney Online is completely free. Jump in and start competing—no payment required.'
    },
    {
      question: 'Do I need to download anything?',
      answer: 'No. BloodMoney Online runs directly in your browser, so you can start instantly on any device.'
    },
    {
      question: 'Can I play on mobile devices?',
      answer: 'Absolutely. The game is fully optimized for mobile, tablet, and desktop for a seamless experience anywhere.'
    },
    {
      question: 'How can I improve my ranking?',
      answer: 'Success requires strategy, quick decisions, and consistent play. Master the mechanics and compete regularly to climb the leaderboard.'
    },
    {
      question: 'Is there multiplayer?',
      answer: 'Yes. Battle players worldwide in real time. Form alliances, join tournaments, and dominate the global rankings.'
    },
    {
      question: 'Which languages are supported?',
      answer: 'Currently English, Russian, and Indonesian. More languages are planned.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about BloodMoney Online
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to start playing?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of players for the ultimate competitive experience.
            </p>
            <a href="#game" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
              🚀 Play Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
