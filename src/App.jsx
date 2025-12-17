import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import Ventures from "./pages/Ventures.jsx";
import HomeAutomation from "./pages/HomeAutomation.jsx";
import Technology from "./pages/Technology.jsx";
import Industries from "./pages/Industries.jsx";
import Company from "./pages/Company.jsx";
import Resources from "./pages/Resources.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import RobotCanvas from "./pages/RobotCanvas";

export default function App() {
  return (
    <BrowserRouter>
    <RobotCanvas />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home-automation" element={<HomeAutomation />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
