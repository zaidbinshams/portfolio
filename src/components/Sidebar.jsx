import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <a href="#top" className="sidebar-name">
          Zaid Bin Shams
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#activities">Activities</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </nav>
      </div>

      <div className="sidebar-socials">
        <a
          href="https://github.com/zaidbinshams"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/zaid-bin-shams/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>

        <a
          href="mailto:zaidbinshams@gmail.com"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a
          href="https://www.instagram.com/zaid.bin.shams/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;