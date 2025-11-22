const Item = ({title,desc,emoji}) => (
  <div className="card">
    <div style={{fontSize:'1.4rem'}}>{emoji}</div>
    <div style={{marginTop:8,fontWeight:700}}>{title}</div>
    <div style={{color:'var(--muted)',marginTop:6}}>{desc}</div>
  </div>
)

export default function Features(){
  return (
    <section className="container section">
      <h2 style={{margin:'0 0 10px'}}>?C?mo te ayudamos?</h2>
      <p style={{color:'var(--muted)'}}>Servicios pensados para resolverte el d?a a d?a.</p>
      <div className="grid" style={{marginTop:'18px'}}>
        <Item emoji="??" title="Comida y fondas" desc="Recogemos tus platillos y los llevamos calientitos." />
        <Item emoji="??" title="Tiendas y mercados" desc="Despensa, abarrotes, frutas y verduras al momento." />
        <Item emoji="??" title="Farmacias" desc="Medicinas y productos de salud con entrega r?pida." />
        <Item emoji="??" title="Ferreter?as" desc="Herramientas y materiales cuando los necesitas." />
        <Item emoji="??" title="Pagos flexibles" desc="Aceptamos efectivo y transferencias." />
        <Item emoji="??" title="Atenci?n por WhatsApp" desc="Asesor?a humana y cercana al 2331252947." />
      </div>
    </section>
  )
}
