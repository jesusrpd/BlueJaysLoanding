import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blue Jay\'s',
  description: 'Bring your family or friends to enjoy our burgers, tacos, octopus cocktails, drinks prepared by professional bartenders.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta property='og:title' content="BlueJay's Bar and Restaurant Family"/>
        <meta property='og:description' content='Bring your family or friends to enjoy our burgers, tacos, octopus cocktails, drinks prepared by professional bartenders.'/>
        <meta property='og:image' content='../../public/img/logotipo.png'/>
        <meta name='description' content='Bring your family or friends to enjoy our burgers, tacos, octopus cocktails, drinks prepared by professional bartenders.'/>
        <meta name='keywords' content='food, bar, restaurant, family, hamburger, tacos, cocktails, cakes, beverages'/>
        <meta name='robots' content='index,follow'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
