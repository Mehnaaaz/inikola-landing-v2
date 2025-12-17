import { Link } from "react-router-dom";
import useReveal from "../components/useReveal.js";
import Marquee from "../components/Marquee.jsx";
import StatsRow from "../components/StatsRow.jsx";
import FAQ from "../components/FAQ.jsx";
import Interactive3DRobot from "../components/Interactive3DRobot.jsx";

export default function Home() {
  useReveal();

  // Spline 3D Robot Scene URL
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div>
<<<<<<< HEAD
      {/* HERO with 3D Robot */}
      <section className="hero hero--home">
=======
      {/* HERO */}
      <section id="hero" className="hero hero--home">
>>>>>>> cae720e0d89a9f21b98b4f2a876eda172b331141
        <div className="hero__bgGlow" />
        <div className="container hero__grid">
          <div className="hero__left" data-reveal>
            <p className="eyebrow">INIKOLA • HOME AUTOMATION & SMART INFRA</p>
            <h1 className="hero__title">
              INIKOLA — Intelligent
              <br />
              Home Automation Systems
            </h1>
            <p className="hero__subtitle">
              AI-powered automation solutions designed for modern homes, enterprises,
              and smart living spaces with intelligent robotics integration.
            </p>

            <div className="hero__ctaRow">
              <Link className="btn btn--primary" to="/contact">
                Request Demo
              </Link>
              <Link className="btn btn--ghost" to="/home-automation">
                Explore Home Automation
              </Link>
            </div>

            <div className="hero__meta">
              <span className="chip">AI + IoT</span>
              <span className="chip">Edge Control</span>
              <span className="chip">Security-first</span>
              <span className="chip chip--muted">Built for India & Global</span>
            </div>
          </div>

          <div className="hero__right" data-reveal>
            {/* 3D Interactive Robot */}
            <Interactive3DRobot scene={ROBOT_SCENE_URL} />
          </div>
        </div>
      </section>

      {/* Josh-like: moving credibility marquee */}
      <div className="container" data-reveal>
        <Marquee items={[
          "Trusted by innovators",
          "Standards-ready (ISO / future)",
          "Smart Infra Partners",
          "EvalSea (Venture)",
          "Posting Expert (Venture)",
          "Enterprise-grade security",
          "Edge-first reliability"
        ]} />
      </div>

      {/* Stats strip */}
      <section id="stats" className="section section--tight">
        <div className="container">
          <div className="glassStrip" data-reveal>
            <div>
              <h3 className="stripTitle">Built for real deployments</h3>
              <p className="muted stripSub">
                Premium UI + dependable infrastructure for homes, builders, and enterprises.
              </p>
            </div>
            <StatsRow stats={[
              { k: "Low-latency", v: "Edge control" },
              { k: "Modular", v: "Room-by-room" },
              { k: "Secure", v: "Privacy-first" },
              { k: "Scalable", v: "Enterprise ready" },
            ]} />
          </div>
        </div>
      </section>

      {/* WHAT INIKOLA DOES */}
      <section id="capabilities" className="section">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <h2>What INIKOLA Does</h2>
            <p>
              End-to-end automation and smart infrastructure — designed to work across
              homes, apartments, and enterprise spaces.
            </p>
          </div>

          <div className="grid3">
            <CapabilityCard
              title="Smart Lighting Automation"
              text="Scene-based lighting with room-level control, schedules, and adaptive behavior."
            />
            <CapabilityCard
              title="Climate & Energy Control"
              text="Comfort + efficiency using automation logic and real-time occupancy signals."
            />
            <CapabilityCard
              title="Home & Property Security"
              text="Presence-aware security flows, alerts, and automated safety routines."
            />
            <CapabilityCard
              title="Centralized Control Systems"
              text="One unified layer to manage devices, scenes, and permissions across spaces."
            />
            <CapabilityCard
              title="AI-driven Automation Logic"
              text="Rules + intelligence that learns patterns and reduces manual effort."
            />
            <CapabilityCard
              title="Smart Infrastructure Ready"
              text="Architecture designed to scale from a single room to multi-floor deployments."
            />
          </div>
        </div>
      </section>

      {/* Josh-like: sticky scrollytelling */}
      <section id="scrolly" className="section section--alt">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <h2>Experience-led automation</h2>
            <p>
              A Josh-style scroll story: the visuals stay pinned while the narrative explains the value.
            </p>
          </div>

          <div className="scrolly">
            <div className="scrolly__sticky" data-reveal>
              <div className="scrollyMock">
                <div className="scrollyMock__shine" />
                <div className="scrollyMock__grid" />
                <div className="scrollyMock__chip">Live Presence</div>
                <div className="scrollyMock__chip scrollyMock__chip--2">Scene: Movie</div>
                <div className="scrollyMock__chip scrollyMock__chip--3">Energy: Optimized</div>
              </div>
            </div>

            <div className="scrolly__steps">
              <Step title="Room-aware control" text="Commands resolve to the correct room — no accidental cross-room triggers." />
              <Step title="Edge-first reliability" text="Core actions run locally for fast, stable control even on unstable networks." />
              <Step title="Security-by-design" text="Permissioned automation with privacy-first architecture and secure handling." />
              <Step title="Built to scale" text="From one room to a full building with consistent deployment patterns." />
            </div>
          </div>
        </div>
      </section>

      {/* VENTURES ENTRY POINT */}
      <section className="section section--cta">
        <div className="container ctaCard" data-reveal>
          <div>
            <h2>Innovation Beyond Automation</h2>
            <p>
              INIKOLA also incubates next-generation technology ventures that operate as independent products.
            </p>
            <div className="pillRow" style={{ marginTop: 12 }}>
              <span className="pill">Independent branding</span>
              <span className="pill">Separate websites</span>
              <span className="pill">No automation overlap</span>
            </div>
          </div>
          <div className="ctaCard__actions">
            <Link className="btn btn--primary" to="/ventures">Explore INIKOLA Ventures</Link>
            <Link className="btn btn--ghost" to="/contact">Contact Sales</Link>
            <p className="tiny muted">
              Ventures are showcased only on the Ventures page — INIKOLA homepage stays automation-first.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <h2>FAQs</h2>
            <p>Fast answers your prospects usually ask.</p>
          </div>

          <div data-reveal>
            <FAQ items={[
              { q: "Is INIKOLA only for home automation?", a: "Yes — INIKOLA is the home automation brand. Ventures are independent and shown only on the Ventures page." },
              { q: "Does it work without internet?", a: "Core actions can run locally (edge-first). Cloud is optional for remote access, analytics, and updates." },
              { q: "Can builders deploy this at scale?", a: "Yes. The architecture supports room-by-room modular deployment for apartments, hotels, and commercial spaces." },
              { q: "How do we request a demo?", a: "Use the Request Demo CTA. We'll replace the contact form wiring with your preferred backend/email flow." }
            ]} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="section">
        <div className="container">
          <div className="contactStrip" data-reveal>
            <div>
              <h3>Let's Automate Smarter Spaces</h3>
              <p className="muted">
                Talk to INIKOLA for demos, partnerships, and enterprise deployments.
              </p>
            </div>
            <div className="contactStrip__right">
              <Link className="btn btn--primary" to="/contact">Contact Sales</Link>
              <Link className="btn btn--ghost" to="/contact">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CapabilityCard({ title, text }) {
  return (
    <div className="card" data-reveal>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({ title, text }) {
  return (
    <div className="stepCard" data-reveal>
      <h3>{title}</h3>
      <p className="muted">{text}</p>
      <span className="miniTag">INIKOLA Experience</span>
    </div>
  );
}