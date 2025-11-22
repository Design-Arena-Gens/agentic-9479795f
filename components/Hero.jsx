export default function Hero(){
  return (
    <section className="container hero">
      <div>
        <span className="badge">Zaragoza, Puebla y municipios cercanos</span>
        <h1 style={{marginTop:'12px'}}>?? MAYIN EXPRESS ? entregas 24/7 de GRUPO MAYIN</h1>
        <p style={{margin:'14px 0 24px'}}>Tu aliado local para llevarte lo que necesites, de cualquier tienda o negocio, a la puerta de tu casa. R?pido, confiable y pensado para la vida diaria de la regi?n.</p>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
          <a className="whatsapp" href="https://wa.me/522331252947?text=Hola%20MAYIN%20EXPRESS%2C%20quiero%20hacer%20un%20pedido" target="_blank" rel="noopener noreferrer">Hacer pedido</a>
          <a className="whatsapp" style={{background:'var(--accent)'}} href="#pedido">Solicitud personalizada</a>
        </div>
        <div style={{display:'flex',gap:'18px',marginTop:'22px',color:'var(--muted)',flexWrap:'wrap'}}>
          <span>24/7</span>
          <span>Entrega local y regional</span>
          <span>Efectivo y transferencia</span>
        </div>
      </div>
      <div className="card">
        <div className="grid" style={{gridTemplateColumns:'1fr'}}>
          <div>
            <strong>?Qu? es GRUPO MAYIN?</strong>
            <p style={{color:'var(--muted)',marginTop:6}}>El paraguas corporativo que re?ne varios negocios y servicios de la familia MAYIN. Su prop?sito es ser el mejor aliado de la gente en Zaragoza y alrededores.</p>
          </div>
          <div>
            <strong>?Qu? hace MAYIN EXPRESS?</strong>
            <p style={{color:'var(--muted)',marginTop:6}}>Compra y entrega productos de fondas, tiendas, farmacias, ferreter?as, mercados y m?s ? cuando lo necesites.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
