import { Link } from "react-router-dom";
import useReveal from "../components/useReveal.js";

export default function Page() {
  useReveal();
  return (
    <div>
      <section className="hero hero--inner">
        <div className="hero__bgGlow" />
        <div className="container hero__grid">
          <div className="hero__left" data-reveal>
            <p className="eyebrow">INIKOLA</p>
            <h1 className="hero__title">Company</h1>
            <p className="hero__subtitle">About INIKOLA, mission & vision, leadership, partners, and growth story.</p>
            <div className="hero__ctaRow">
              <Link className="btn btn--primary" to="/contact">Request Demo</Link>
              <Link className="btn btn--ghost" to="/">Back to Home</Link>
            </div>
          </div>

          <div className="hero__right" data-reveal>
            <div className="deviceCard">
              <div className="deviceCard__body">
                <div className="deviceCard__text">
                  <h3>Company — Coming Next</h3>
                  <p className="muted" style={{ margin: 0 }}>

                    This page is a placeholder. We'll build it next step-by-step.
                  </p>
                </div>
              </div>
              <div className="deviceCard__footer">
                <span>Premium UI</span>
                <span>Scroll Story</span>
                <span>Fast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <h2>Next Build Steps</h2>
            <p>We will add real content, diagrams, and Josh-style motion.</p>
          </div>

          <div className="grid3">
            <div className="card" data-reveal><h3>1) Content</h3><p>Add real copy and visuals.</p></div>
            <div className="card" data-reveal><h3>2) Motion</h3><p>Scroll-triggered reveals + micro-interactions.</p></div>
            <div className="card" data-reveal><h3>3) SEO</h3><p>Metadata, structured content and performance.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
