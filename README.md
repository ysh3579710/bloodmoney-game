# Blood Money Game Website

A professional website for the Blood Money game. It uses a modern design and provides a clear game overview, screenshots and a download section.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styles**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom components

## Features

- 🎮 Responsive design for all devices
- 🎨 Modern UI with dark mode ready
- 📱 Mobile optimization
- 🖼️ Screenshot lightbox
- 📥 Multi‑platform downloads
- 🔍 SEO optimization
- ⚡ Fast loading

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
npm start
```

## Project Structure

```
bloodmoney-game/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # Base UI components
│   ├── header.tsx         # Header
│   ├── hero.tsx           # Hero section
│   ├── game-intro.tsx     # Game intro
│   ├── screenshots.tsx    # Screenshots
│   ├── download.tsx       # Download section
│   └── footer.tsx         # Footer
├── lib/                   # Utilities
└── public/                # Static assets
```

## Customization

### Theme Colors

Edit the color palette in `tailwind.config.js`.

### Fonts

Import or change fonts in `app/globals.css`.

## Deployment

### Vercel (recommended)

1. Push code to GitHub
2. Import the project in Vercel
3. Deploy automatically

### Other platforms

```bash
npm run build
# deploy the .next folder to your server
```

## Contributing

Issues and Pull Requests are welcome.

## License

MIT

## Contact

- Email: contact@bloodmoney-game.com
- Website: https://bloodmoney-game.com
