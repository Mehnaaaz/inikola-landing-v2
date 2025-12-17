import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="brand brand--footer">
            <img className="brand__logo" src="/inikola-logo.png" alt="Inikola logo" />
            <span className="brand__name">INIKOLA</span>
          </div>
          <p className="muted">
            INIKOLA is a technology company building intelligent living spaces —
            AI-powered home automation & smart infrastructure.
          </p>
        </div>

        <div className="footer__right">
          <Link to="/home-automation">Home Automation</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/ventures">Ventures</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="muted">© {new Date().getFullYear()} INIKOLA</span>
        <span className="muted">Built with React</span>
      </div>
    </footer>
  );
}
