import { Shield, Heart, Brain, Zap, Clock, Users } from 'lucide-react'

export function GameIntro() {
  const features = [
    {
      icon: Shield,
      title: 'Moral Choices',
      description: 'Every decision shapes the outcome—face real moral dilemmas',
      color: 'text-blue-500'
    },
    {
      icon: Heart,
      title: 'Emotional Impact',
      description: 'A story that hits hard—every choice carries weight',
      color: 'text-red-500'
    },
    {
      icon: Brain,
      title: 'Strategic Thinking',
      description: 'Balance survival and ethics with careful planning',
      color: 'text-purple-500'
    },
    {
      icon: Zap,
      title: 'Immediate Feedback',
      description: 'Every action triggers instant visual and emotional feedback',
      color: 'text-yellow-500'
    },
    {
      icon: Clock,
      title: 'Compact Experience',
      description: 'A ~30‑minute experience distilled to its essence',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Community Discussion',
      description: 'Join the community—share your choices and outcomes',
      color: 'text-indigo-500'
    }
  ]

  return (
    <section id="game" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Game Overview
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Blood Money blends survival with moral choices in a uniquely crafted experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Game Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Explore the line between survival and morality
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              You are trapped in a mysterious facility. To survive, you must make impossible choices:
              harm an innocent life for resources, or hold to your morals and face the consequences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Soft pixel art stands in stark contrast to a dark theme. Every click carries weight, and every
              choice shifts your ending.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Playtime: ~30 minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Users className="w-4 h-4" />
                <span>Single‑player</span>
              </div>
            </div>
          </div>

          {/* Game Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-primary-700 dark:text-primary-300 font-medium">
                    Screenshot showcase area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`w-12 h-12 ${feature.color} mb-4`}>
                <feature.icon className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
