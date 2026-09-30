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

const navLinks = [
  { label: "About", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/zaidbinshams",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaidbinshams/",
    icon: faLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:zaidbinshams@gmail.com",
    icon: faEnvelope,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zaidbinshams/",
    icon: faInstagram,
  },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={social.label}
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
}

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <aside className={`sidebar ${menuOpen ? "menu-open" : ""}`}>
        <div className="sidebar-header">
          <a href="#top" className="sidebar-name" onClick={closeMenu}>
            Zaid Bin Shams
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <SocialLinks className="desktop-socials" />
        </div>

        <SocialLinks className="mobile-socials" />
      </aside>
    </>
  );
}