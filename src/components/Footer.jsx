import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <a
        className="portfolio-source-link"
        href="https://github.com/zaidbinshams/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <span>See how I built this portfolio</span>
        <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </footer>
  );
}