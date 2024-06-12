import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
        <body>
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
  )
}