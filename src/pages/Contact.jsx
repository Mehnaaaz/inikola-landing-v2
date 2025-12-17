import useReveal from "../components/useReveal.js";

export default function Contact() {
  useReveal();
  return (
    <div>
      <section className="hero hero--inner">
        <div className="hero__bgGlow" />
        <div className="container hero__grid">
          <div className="hero__left" data-reveal>
            <p className="eyebrow">INIKOLA • CONTACT</p>
            <h1 className="hero__title">Request a Demo</h1>
            <p className="hero__subtitle">
              Share your project details — we’ll respond with a demo plan and deployment approach.
            </p>
          </div>

          <div className="hero__right" data-reveal>
            <div className="formCard">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="formRow">
                  <label>Name</label>
                  <input placeholder="Your name" />
                </div>
                <div className="formRow">
                  <label>Email</label>
                  <input placeholder="you@company.com" />
                </div>
                <div className="formRow">
                  <label>Phone</label>
                  <input placeholder="+91 ..." />
                </div>
                <div className="formRow">
                  <label>Requirement</label>
                  <textarea placeholder="Tell us about your home/building, number of rooms, and goals..." rows={4} />
                </div>
                <button className="btn btn--primary btn--full" type="submit">
                  Submit (demo UI)
                </button>
                <p className="tiny muted" style={{ marginTop: 10 }}>
                  This is UI only. Next step: connect to backend/email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contactStrip" data-reveal>
            <div>
              <h3>Direct</h3>
              <p className="muted">Replace with your official details.</p>
            </div>
            <div className="contactStrip__right">
              <div className="contactItem">
                <span className="contactLabel">Email</span>
                <span className="contactValue">business@inikola.com</span>
              </div>
              <div className="contactItem">
                <span className="contactLabel">Phone</span>
                <span className="contactValue">+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
