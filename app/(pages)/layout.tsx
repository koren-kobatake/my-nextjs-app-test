import '../styles/globals.css'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
        <body>
            <Header />
            <Navbar />
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
  )
}
