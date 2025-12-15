import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <NavLink to="/" className="brand" onClick={close}>
          <img className="brand__logo" src="/inikola-logo.png" alt="Inikola logo" />
          <span className="brand__name">INIKOLA</span>
        </NavLink>

        <nav className={`navLinks ${open ? "navLinks--open" : ""}`}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/home-automation" onClick={close}>Home Automation</NavLink>
          <NavLink to="/technology" onClick={close}>Technology</NavLink>
          <NavLink to="/industries" onClick={close}>Industries</NavLink>
          <NavLink to="/ventures" onClick={close}>Ventures</NavLink>
          <NavLink to="/company" onClick={close}>Company</NavLink>
          <NavLink to="/resources" onClick={close}>Resources</NavLink>
          <NavLink to="/careers" onClick={close}>Careers</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>

          <NavLink to="/contact" className="btn btn--small btn--primary" onClick={close}>
            Request Demo
          </NavLink>
        </nav>

        <button className="burger" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
