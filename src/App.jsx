import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactMe from "./pages/contactMe";

function ScrollToHash() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;

    const timeout = setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      const currentHash = window.location.hash;

      if (!currentHash) return;

      const aboutSection = document.getElementById("pin_project");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();

      if (rect.top > 250) {
        navigate("/", { replace: true });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}