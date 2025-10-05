import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Github, CheckCircle } from "lucide-react";
import "../styles/contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formcarry.com/s/vSxkDqPgX_T", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });

        // 4 saniye sonra otomatik kaybolsun
        setTimeout(() => setIsSent(false), 4000);
      } else {
        alert("Mesaj gönderilirken hata oluştu.");
      }
    } catch (error) {
      alert("Bir hata oluştu: " + error.message);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        İletişime <span>Geç</span>
      </h2>
     <div className="hr"></div>

      <div className="contact-container">
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Gönder</button>
        </form>

        {/* İletişim Bilgileri */}
        <div className="contact-info">
          <h3>Bana Ulaş</h3>
          <p><Mail size={18}/> example@mail.com</p>
          <p><Phone size={18}/> +90 555 555 55 55</p>
          <p><MapPin size={18}/> İstanbul, Türkiye</p>

          <div className="social-links">
            <a href="https://facebook.com"><Facebook /></a>
            <a href="https://linkedin.com"><Linkedin /></a>
            <a href="https://github.com"><Github /></a>
          </div>
        </div>
      </div>

      {/* Sağdan kayan başarı mesajı */}
      <AnimatePresence>
        {isSent && (
          <motion.div
            className="success-box"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle size={22} color="green" /> 
            <span>Mesajınız başarıyla gönderildi!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
