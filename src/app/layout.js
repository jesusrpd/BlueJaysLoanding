import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
