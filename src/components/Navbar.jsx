import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("Navbar rendered. isOpen:", isOpen); // Debugging

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Portfolio</div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("Hamburger clicked. isOpen:", !isOpen); // Debugging
        }}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;