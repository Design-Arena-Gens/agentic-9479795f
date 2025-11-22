import './globals.css'

export const metadata = {
  title: 'MAYIN EXPRESS ? Entregas 24/7 en Zaragoza, Puebla',
  description: 'El servicio de entregas a domicilio de GRUPO MAYIN. Lo que necesites, cuando lo necesites. WhatsApp 2331252947.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'MAYIN EXPRESS ? Entregas 24/7',
    description: 'Tu aliado local para compras y env?os 24/7 en Zaragoza, Puebla.',
    url: 'https://agentic-9479795f.vercel.app',
    siteName: 'MAYIN EXPRESS',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAYIN EXPRESS ? Entregas 24/7',
    description: 'Compra y entrega de lo que necesites, 24/7.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="container nav">
            <div className="brand">
              <span style={{fontSize:'1.25rem'}}>?? MAYIN EXPRESS</span>
              <span className="badge">GRUPO MAYIN</span>
            </div>
            <a className="whatsapp" href="https://wa.me/522331252947?text=Hola%20MAYIN%20EXPRESS%2C%20quisiera%20hacer%20un%20pedido" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
              <span>WhatsApp</span>
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
            <span>? {new Date().getFullYear()} GRUPO MAYIN ? Zaragoza, Puebla</span>
            <span>Atenci?n 24/7: WhatsApp 2331252947</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
