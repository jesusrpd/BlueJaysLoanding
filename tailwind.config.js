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
        'main': 'url(/img/bg-main.png)',
        'paper': 'url(/img/bg-paper.png)',
        'text': 'url(/img/bg-text.png)',
        'karaoke': 'url(/img/cards/karaoke.png)'
      },
      colors:{
        'bluejays':'#0073B2',
        'yellowjays': '#E8A800'
      }
    },
  },
  plugins: [],
}
