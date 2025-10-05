import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Hakkımızda", href: "#aboutme" },
    { name: "Projeler", href: "#projects" },
    { name: "Deneyim", href: "#experience" },
    { name: "İletişim", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  // Ekran boyutu büyüyünce mobil menü otomatik kapansın
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY;
    // Framer Motion veya window.scrollTo ile animasyonlu scroll
    window.scrollTo({
      top: top - 70, // navbar varsa offset
      behavior: "smooth",
    });
  }
};

  return (
    <header className="header">
      <div className="navbar">
        {/* Logo */}
        <motion.a
          href="/"
          className="logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Burak B.
        </motion.a>

        {/* Masaüstü Menü */}
       <nav className="nav-links">
      {navLinks.map((link, idx) => (
        <motion.a
          key={idx}
          className="nav-item"
           onClick={() => scrollToSection(link.href.replace("#", ""))}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          {link.name}
        </motion.a>
      ))}
    </nav>



        {/* Hamburger Buton */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü Aç/Kapat"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
  {isOpen && (
    <motion.nav
      className="mobile-menu"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul>
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <ScrollLink
              to={link.href}
              smooth={true}
              duration={500}
              offset={-70}
              className="mobile-item"
              onClick={() => setIsOpen(false)} // menüyü kapat
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;
