import Hero from "../components/Hero";
import Features from "../components/Features";
import OrderForm from "../components/OrderForm";
import Contact from "../components/Contact";

export default function Page(){
  return (
    <>
      <Hero />
      <Features />
      <section className="container section">
        <div className="grid">
          <div className="card">
            <strong>?C?mo funciona?</strong>
            <ol style={{marginTop:8,paddingLeft:'1.1rem',color:'var(--muted)'}}>
              <li>Haz tu pedido por WhatsApp o con el formulario.</li>
              <li>Confirmamos tiempos y costo estimado.</li>
              <li>Recibe en tu puerta. Pagas en efectivo o por transferencia.</li>
            </ol>
          </div>
          <div className="card">
            <strong>Transparencia y confianza</strong>
            <p style={{color:'var(--muted)',marginTop:6}}>Somos de la regi?n. Cuidamos tu tiempo y tu pedido como si fuera nuestro.</p>
          </div>
          <div className="card">
            <strong>Disponibilidad 24/7</strong>
            <p style={{color:'var(--muted)',marginTop:6}}>Atenci?n a cualquier hora. Siempre hay alguien del equipo para ayudarte.</p>
          </div>
        </div>
      </section>
      <OrderForm />
      <Contact />
    </>
  )
}
