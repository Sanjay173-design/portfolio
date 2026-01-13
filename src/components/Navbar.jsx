import { useState } from "react";
import { Link } from "react-scroll";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa"; // Added FaTimes

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <h2 className="accent">SANJAY</h2>

        {/* This container holds the links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "education", "contact"].map(
            (id) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                {id.toUpperCase()}
              </Link>
            )
          )}
          <a href="/Sanjay_Resume.pdf" download className="nav-resume-btn">
            Download Resume
          </a>
        </div>

        {/* The Hamburger Button MUST be inside nav-inner */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
