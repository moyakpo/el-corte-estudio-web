const services = [
  {
    title: "Grabacion Vocal",
    detail:
      "Cabina tratada, cadena analogica y direccion artistica para capturar tu identidad.",
  },
  {
    title: "Mezcla",
    detail:
      "Balance, textura y pegada para que cada tema traduzca en cualquier sistema.",
  },
  {
    title: "Mastering",
    detail:
      "Nivel comercial con dinamica cuidada, listo para plataformas y shows.",
  },
];

const rates = [
  {
    plan: "Session",
    price: "Desde 45 EUR",
    info: "1 hora de grabacion + rough mix",
  },
  {
    plan: "Track Pro",
    price: "Desde 140 EUR",
    info: "Grabacion + mezcla completa",
  },
  {
    plan: "Release Pack",
    price: "Desde 240 EUR",
    info: "Mezcla + mastering final",
  },
];

const App = () => {
  return (
    <div className="site">
      <header className="hero" id="inicio">
        <nav className="topbar">
          <p className="brand">EL CORTE ESTUDIO</p>
          <a
            href="https://www.instagram.com/estudio.elcorte/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Buenos Aires</p>
          <h1>Tu sonido merece un corte fino.</h1>
          <p>
            Produccion, grabacion y postproduccion para artistas que quieren
            sonar grandes desde el primer play.
          </p>
          <div className="actions">
            <a href="#contacto" className="btn btn-solid">
              Reservar sesion
            </a>
            <a href="#servicios" className="btn btn-ghost">
              Ver servicios
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="services" id="servicios">
          <h2>Servicios</h2>
          <div className="grid">
            {services.map((service) => (
              <article key={service.title} className="card reveal">
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase" aria-label="frase destacada">
          <p>
            "Cada track tiene su corte exacto: energia cruda, espacio y nitidez
            para destacar."
          </p>
        </section>

        <section className="pricing" id="precios">
          <h2>Tarifas Base</h2>
          <div className="grid">
            {rates.map((rate) => (
              <article key={rate.plan} className="card reveal">
                <h3>{rate.plan}</h3>
                <strong>{rate.price}</strong>
                <p>{rate.info}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contacto">
          <h2>Reserva y Contacto</h2>
          <p>
            Escribinos por Instagram con referencia de estilo, BPM y fecha
            objetivo de entrega.
          </p>
          <a
            className="btn btn-solid"
            href="https://www.instagram.com/estudio.elcorte/"
            target="_blank"
            rel="noreferrer"
          >
            Ir a Instagram
          </a>
        </section>
      </main>
    </div>
  );
};

export default App;
