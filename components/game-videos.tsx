interface VideoItem {
  id: string
  title: string
}

export function GameVideos() {
  const videos: VideoItem[] = [
    { id: 'nZ5AP6plb_Y', title: 'BloodMoney Gameplay 1' },
    { id: 'PErk24_rOMY', title: 'BloodMoney Gameplay 2' },
    { id: 'q6zHQc0nYJM', title: 'BloodMoney Gameplay 3' }
  ]

  return (
    <section id="videos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Watch Gameplay Videos</h2>
          <p className="mt-3 text-gray-600">Click any video to watch in place. Videos are embedded from YouTube.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-900">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


