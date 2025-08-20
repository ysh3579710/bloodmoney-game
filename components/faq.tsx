'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is BloodMoney? What\'s the main goal?',
      answer: 'BloodMoney is a dark clicker game. You need to raise $25,000 for life‑saving surgery by clicking Harvey Harvington to earn money, buying upgrades, and choosing a path that leads to one of multiple endings.'
    },
    {
      question: 'How do I earn money?',
      answer: 'Click Harvey. Each click earns you $1 by default. As you purchase upgrades, your dollars per click increase, accelerating your run.'
    },
    {
      question: 'Where do I buy upgrades? What do they do?',
      answer: 'Visit the “Mystery Shop” to purchase items (e.g., Feather, Needle, Hammer). Upgrades increase dollars per click and change the tone of your run—some are harsher and may influence the ending you get.'
    },
    {
      question: 'How many endings are there and how are they decided?',
      answer: 'There are three core endings—Merciful, Neutral, and Dark. Your upgrade choices and overall treatment of Harvey determine which ending you reach.'
    },
    {
      question: 'How long does a single playthrough take?',
      answer: 'About 30 minutes on average. The pace is tight, and multiple runs are encouraged to see all outcomes.'
    },
    {
      question: 'Is the game free to play? Do I need to download anything?',
      answer: 'Yes, it\'s free and runs in the browser—no download required. Just press play.'
    },
    {
      question: 'Can I play on mobile or tablet?',
      answer: 'Yes. The interface is optimized for phones, tablets, and desktops. A single‑input design makes it easy to play anywhere.'
    },
    {
      question: 'Does my progress save?',
      answer: 'Progress is stored locally in your browser where possible. Clearing site data or switching devices/browsers may reset your progress.'
    },
    {
      question: 'Is there multiplayer?',
      answer: 'No. BloodMoney is a single‑player narrative clicker focused on strategy and moral choices.'
    },
    {
      question: 'Is there gore or disturbing content? What\'s the tone?',
      answer: 'Visuals use soft, pastel pixel art, but the themes include dark humor and unsettling elements. Viewer discretion is advised.'
    },
    {
      question: 'Is the game accessible?',
      answer: 'Yes. It features one‑input controls and fully captioned dialogue to make the experience readable without audio.'
    },
    {
      question: 'Any tips for efficient runs?',
      answer: 'Prioritize upgrades that increase dollars per click, listen to dialogue cues that hint at your trajectory, and replay to discover alternative scenes and endings.'
    },
    {
      question: 'Who is Harvey Harvington?',
      answer: 'Harvey is the enigmatic man who offers $1 for every click. Your relationship with him—and how you treat him—shapes both the story and your ending.'
    },
    {
      question: 'Which languages are supported?',
      answer: 'English is supported with fully captioned text. Additional languages may be added over time.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Answers about playing, upgrades, endings, and more</p>
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
