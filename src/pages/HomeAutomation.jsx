import { Link } from "react-router-dom";
import useReveal from "../components/useReveal.js";

export default function HomeAutomation() {
  useReveal();

  return (
    <div>
      <section className="hero hero--inner">
        <div className="hero__bgGlow" />
        <div className="container hero__grid">
          <div className="hero__left" data-reveal>
            <p className="eyebrow">INIKOLA • HOME AUTOMATION</p>
            <h1 className="hero__title">Home Automation</h1>
            <p className="hero__subtitle">
              A modular hardware + software architecture: room smart boards, sensors, voice control,
              and a centralized orchestration layer.
            </p>
            <div className="hero__ctaRow">
              <Link className="btn btn--primary" to="/contact">Request Demo</Link>
              <Link className="btn btn--ghost" to="/technology">Explore Technology</Link>
            </div>
          </div>

          <div className="hero__right" data-reveal>
            <div className="deviceCard">
              <div className="deviceCard__body">
                <div className="deviceCard__text">
                  <h3>Mock Product Line (Home Automation)</h3>
                  <p className="muted" style={{ margin: 0 }}>
                    Replace with real SKUs later. These are placeholders for your team demo.
                  </p>
                </div>
              </div>
              <div className="deviceCard__footer">
                <span>Core Hub</span>
                <span>Room Board</span>
                <span>Sensors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <h2>Mock Hardware Products</h2>
            <p>These are sample automation products for the INIKOLA site structure.</p>
          </div>

          <div className="productGrid">
            <ProductCard title="Inikola Core Hub" tag="Gateway" text="Central controller for orchestration, updates, and secure remote access." />
            <ProductCard title="Inikola Room Smart Board" tag="Room Module" text="Relay + sensor fusion board installed per room for low-latency control." />
            <ProductCard title="Inikola Sensor Suite" tag="Sensors" text="mmWave, PIR, LDR, thermal, ultrasonic & door sensors for presence detection." />
            <ProductCard title="Inikola Voice & Scene Panel" tag="Control Surface" text="Multi-language voice + touch scenes that trigger room-aware routines." />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ title, tag, text }) {
  return (
    <div className="productCard" data-reveal>
      <div className="productCard__tag">{tag}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="miniTag">INIKOLA Automation</span>
    </div>
  );
}
