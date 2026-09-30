import { useState } from "react";
import { Menu, X } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/zaidbinshams",
    icon: faGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaid-bin-shams/",
    icon: faLinkedinIn,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:zaidbinshams@gmail.com",
    icon: faEnvelope,
    external: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zaid.bin.shams/",
    icon: faInstagram,
    external: true,
  },
];

function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.external ? "_blank" : undefined}
          rel={social.external ? "noreferrer" : undefined}
          aria-label={social.label}
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
}

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <aside className={`sidebar ${menuOpen ? "menu-open" : ""}`}>
        <div className="sidebar-header">
          <a href="#top" className="sidebar-name" onClick={closeMenu}>
            Zaid Bin Shams
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav" aria-label="Main navigation">
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <SocialLinks className="sidebar-socials" />
        </div>
      </aside>

      <SocialLinks className={`mobile-socials ${menuOpen ? "hidden" : ""}`} />
    </>
  );
}

export default Sidebar;