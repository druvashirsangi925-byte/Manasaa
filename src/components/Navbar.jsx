import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled
            ? "bg-midnight/80 backdrop-blur-md border-white/5 py-4 shadow-lg"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <Plane className="w-5 h-5 text-softgold group-hover:rotate-12 transition-transform duration-500" />
            <span className="font-cinematic font-bold text-lg tracking-wider text-white">
              Für Manasaaa 🇩🇪
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wider font-luxury text-gray-300">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-softgold transition-colors cursor-pointer"
            >
              Message
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-softgold transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="hover:text-softgold transition-colors cursor-pointer"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("letter")}
              className="hover:text-softgold transition-colors cursor-pointer"
            >
              Letter
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Top scroll height indicator */}
      <div className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-softgold via-germany-red to-softgold z-50 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
    </>
  );
};

export default Navbar;
