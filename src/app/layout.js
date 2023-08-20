import './globals.css'

export const metadata = {
  title: 'Blue Jay\'s',
  description: 'Bring your family or friends to enjoy our burgers, tacos, octopus cocktails, drinks prepared by professional bartenders.',
  keywords: "mexican food, bar, restaurant, family, hamburger, tacos, cocktails, cakes, beverages, blue jays, bluejays, bluejay's, bluejay's restaurant",
  ogTitle: "BlueJay's Bar and Restaurant Family",
  ogDescription: 'Bring your family or friends to enjoy our burgers, tacos, octopus cocktails, drinks prepared by professional bartenders.',
  ogImage: '../../public/img/logotipo.webp',
  canonical: "https://www.bluejayshillsboro.com.com/",
  robots: "index, follow"
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
