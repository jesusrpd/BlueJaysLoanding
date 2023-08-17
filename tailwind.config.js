/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'url(/img/bg-main.webp)',
        'main-tablet': 'url(/img/bg-main-tablet.webp)',
        'main-desktop': 'url(/img/bg-main-desktop.webp)',
        'paper': 'url(/img/bg-paper.webp)',
        'text': 'url(/img/bg-text.webp)',
        'karaoke': 'url(/img/cards/karaoke.webp)',
        'restaurant': 'url(/img/cards/restaurant.webp)',
        'bar': 'url(/img/cards/bar.webp)',
        'horary': 'url(/img/bg-horary.webp)',
        'footer': 'url(/img/bg-footer.webp)',
        'footer-desktop': 'url(/img/bg-footer-desktop.webp)',
        'menu': 'url(/img/bg-menu.webp)'
      },
      colors:{
        'bluejays':'#0073B2',
        'yellowjays': '#E8A800',
        'grayjays': '#E1E3E8'
      },
      boxShadow: {
        'card': '4px 6px 10px 0px rgba(0, 0, 0, 0.55);'
      },
      width: {
        '100': '482px',
        '101': '282px',
        '102': '248px',
        '103': '135px',
        '104': '76px'
      },
      height: {
        '100': '514px',
        '101': '374px',
        '102': '283px',
        '103': '332px',
        '104': '101px'
      }
    }
  },
  plugins: [],
}
