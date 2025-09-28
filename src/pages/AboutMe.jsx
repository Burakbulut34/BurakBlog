import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/aboutme.css";
import AboutLogo from "../assets/about-image.webp";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // ekranda göründüğünü algılar

  return (
    <div className="about-container" ref={ref} id="aboutme">
      <div className="about-header">
        <h2 className="about-title">Hakkımda</h2>
        <div className="about-underline"></div>
      </div>

      <div className="about-grid">
        {/* Sol Resim */}
        <motion.img
          src={AboutLogo}
          alt="Hakkımda"
          className="about-image"
          initial={{ x: -200, opacity: 0 }}
          animate={
            isInView
              ? { x: 0, opacity: 1 } // görünüyorsa ortaya gelsin
              : { x: -200, opacity: 0 } // çıkınca sola kaybolsun
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Sağ Yazı */}
        <motion.div
          className="about-text"
          initial={{ x: 200, opacity: 0 }}
          animate={
            isInView
              ? { x: 0, opacity: 1 } // görünüyorsa ortaya gelsin
              : { x: 200, opacity: 0 } // çıkınca sağa kaybolsun
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p>
            Merhaba! Ben Burak Bulut HKMTAL Bilişim Teknolojileri lise mezunuyum. Alanımda kendimi geliştirmeye açık bir insanım. 
            Lise eğitimim boyunca web programlama, nesneye yönelik programlama ve veri tabanı projeleri
            yaptım. Backend tarafında .NET, EF, EF Core ve SQL geliştiriyor. Frontend tarafında React ve NextJs ile kullanıcı odaklı, modern ve hızlı arayüzler geliştiriyorum 
          </p>
          <p>
            Deneyimlerim arasında küçük ölçekli web siteleri, veritabanı tabanlı
            uygulamalar ve kullanıcı dostu arayüzler tasarlamak yer alıyor.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
