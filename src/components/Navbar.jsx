import { useState } from "react";
import "./Navbar.css";
import logo from "../assests/images/logo.jpg";

function Navbar({ toggleTheme, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-left">
          <img src={logo} alt="logo" className="logo-img" />
          <h2 className="brand-name">Tanishka</h2>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme">
            <span className="theme-icon">{darkMode ? "☀️" : "🌙"}</span>
            <span className="theme-text">{darkMode ? "Light" : "Dark"}</span>
          </button>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;