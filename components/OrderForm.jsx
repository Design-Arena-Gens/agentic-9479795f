"use client";
import { useState } from 'react';

export default function OrderForm(){
  const [product, setProduct] = useState("");
  const [store, setStore] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Efectivo");
  const [urgency, setUrgency] = useState("Normal");
  const [note, setNote] = useState("");

  const sendToWhatsapp = (e) => {
    e.preventDefault();
    const parts = [
      `Nuevo pedido MAYIN EXPRESS`,
      `Producto/Lista: ${product || '-'} `,
      `Tienda/Origen: ${store || '-'} `,
      `Entrega en: ${address || '-'} `,
      `Pago: ${payment}`,
      `Urgencia: ${urgency}`,
      note ? `Notas: ${note}` : null
    ].filter(Boolean);
    const text = parts.join("\n");
    const phone = "522331252947"; // MX + Zaragoza
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pedido" className="container section">
      <h2 style={{margin:'0 0 10px'}}>Pide ahora por WhatsApp</h2>
      <p style={{color:'var(--muted)'}}>Cu?ntanos qu? necesitas. Armamos el pedido y te confirmamos tiempos y costo.</p>
      <form onSubmit={sendToWhatsapp} className="card" style={{display:'grid',gap:'12px'}}>
        <div className="form-row">
          <div>
            <label>?Qu? necesitas?</label>
            <input className="input" placeholder="Lista de productos o descripci?n" value={product} onChange={e=>setProduct(e.target.value)} required />
          </div>
          <div>
            <label>?De d?nde?</label>
            <input className="input" placeholder="Nombre del local/tienda o zona" value={store} onChange={e=>setStore(e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>?A d?nde entregamos?</label>
            <input className="input" placeholder="Direcci?n o punto de referencia" value={address} onChange={e=>setAddress(e.target.value)} required />
          </div>
          <div>
            <label>M?todo de pago</label>
            <select className="select" value={payment} onChange={e=>setPayment(e.target.value)}>
              <option>Efectivo</option>
              <option>Transferencia</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Urgencia</label>
            <select className="select" value={urgency} onChange={e=>setUrgency(e.target.value)}>
              <option>Normal</option>
              <option>R?pida</option>
              <option>Programada</option>
            </select>
          </div>
          <div>
            <label>Notas</label>
            <input className="input" placeholder="Detalles adicionales" value={note} onChange={e=>setNote(e.target.value)} />
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button className="whatsapp" type="submit">Enviar por WhatsApp</button>
        </div>
      </form>
    </section>
  )
}
