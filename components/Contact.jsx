export default function Contact(){
  return (
    <section className="container section">
      <div className="card" style={{display:'grid',gap:'6px'}}>
        <h3 style={{margin:'0 0 6px'}}>Cobertura y contacto</h3>
        <div style={{color:'var(--muted)'}}>Zaragoza, Puebla y municipios cercanos.</div>
        <div style={{display:'flex',gap:'8px',flexWrap:'wrap',alignItems:'center',marginTop:'8px'}}>
          <a className="whatsapp" href="https://wa.me/522331252947?text=Hola%20MAYIN%20EXPRESS" target="_blank" rel="noopener noreferrer">WhatsApp 2331252947</a>
          <span className="badge">Atenci?n personalizada</span>
          <span className="badge">24/7</span>
        </div>
      </div>
    </section>
  )
}
