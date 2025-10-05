import React from "react";
import "./footer.css";

export default function Footer() {

  const goToPage = ()=>{
    window.location.href = "https://github.com/Burakbulut34"
  };
  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-content">
        <div className="footer-left">
          <span className="name" onclick={goToPage}>
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
