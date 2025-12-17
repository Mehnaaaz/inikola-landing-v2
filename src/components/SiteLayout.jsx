import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="page">
      <Navbar />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
