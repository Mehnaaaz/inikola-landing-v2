import useReveal from "../components/useReveal.js";

export default function Ventures() {
  useReveal();

  return (
    <div className="ventures">
      <section className="hero hero--ventures">
        <div className="hero__bgGlow hero__bgGlow--ventures" />
        <div className="container hero__grid">
          <div className="hero__left" data-reveal>
            <p className="eyebrow">INIKOLA • VENTURES</p>
            <h1 className="hero__title">
              Independent Products.
              <br />
              One Innovation Philosophy.
            </h1>
            <p className="hero__subtitle">
              These products are developed as independent entities under the INIKOLA innovation ecosystem.
              Different branding. Separate websites. No home automation overlap.
            </p>
            <div className="hero__meta">
              <span className="chip">Independent brands</span>
              <span className="chip">Dedicated sites</span>
              <span className="chip chip--muted">Built under INIKOLA ecosystem</span>
            </div>
          </div>

          <div className="hero__right" data-reveal>
            <div className="deviceCard deviceCard--ventures">
              <div className="deviceCard__body">
                <div className="venturesBadge">
                  <span className="venturesBadge__dot" />
                  <span>Ventures</span>
                </div>
                <div className="deviceCard__text">
                  <h3>Two products • Two identities</h3>
                  <p>
                    Each venture is a standalone product with its own roadmap, UI, and business model.
                  </p>
                </div>
              </div>
              <div className="deviceCard__footer">
                <span>EvalSea</span>
                <span>Posting Expert</span>
                <span>Independent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <h2>Products</h2>
            <p>
              Clearly marked as independent products by INIKOLA. Separate branding and websites.
            </p>
          </div>

          <div className="productGrid venturesGrid">
            <VentureCard
              name="EvalSea"
              tagline="Evaluation & Verification Platform"
              problem="Automates evaluation workflows and generates structured reports."
              features={[
                "Auto-evaluation & verification loops",
                "Report generation (PDF/Doc)",
                "Pluggable scoring criteria",
                "Dashboards & analytics"
              ]}
              status="Live / Beta"
              site="https://evalsea.example.com"
            />

            <VentureCard
              name="Posting Expert"
              tagline="AI Marketing & Social Posting System"
              problem="Automates content creation, image generation, feedback, and publishing."
              features={[
                "Multi-platform posting (IG/LinkedIn/Facebook)",
                "Scheduler + trend-based prompts",
                "Feedback scoring model",
                "Multi-tenant scaling"
              ]}
              status="Live / Beta"
              site="https://postingexpert.example.com"
            />
          </div>

          <div className="note" data-reveal>
            <strong>Note:</strong> Update the “Visit Product Website” links with your real domains when ready.
          </div>
        </div>
      </section>
    </div>
  );
}

function VentureCard({ name, tagline, problem, features, status, site }) {
  return (
    <div className="ventureCard" data-reveal>
      <div className="ventureCard__top">
        <div className="ventureLogo">{name.slice(0, 1)}</div>
        <div>
          <h3 className="ventureTitle">{name}</h3>
          <p className="muted" style={{ margin: 0 }}>{tagline}</p>
        </div>
      </div>

      <div className="ventureCard__body">
        <p><strong>Problem it solves:</strong> {problem}</p>

        <p style={{ marginBottom: 8 }}><strong>Key features:</strong></p>
        <ul className="ventureList">
          {features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>

      <div className="ventureCard__footer">
        <span className="miniTag">Status: {status}</span>
        <a className="btn btn--primary" href={site} target="_blank" rel="noreferrer">
          Visit Product Website →
        </a>
      </div>

      <div className="ventureMark">An independent product by INIKOLA</div>
    </div>
  );
}
