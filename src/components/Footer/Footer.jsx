import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-content">
        <div className="footer-left">
          <span className="name">
            Burak <span className="highlight">Bulut</span>
          </span>
        </div>
        <div className="footer-right">
          <p>© 2025 Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
