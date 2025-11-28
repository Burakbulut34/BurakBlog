import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/blog.css";
import Logo from "https://res.cloudinary.com/dazvkvpch/image/upload/v1764330939/hero-img.png"
//../assets/hero-image.png
const BlogSection = () => {
  const tags = ["Burak Bulut", "Web Developer", "Front - end Developer", "Back - end Developer"];
  const [text, setText] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // En uzun kelimenin uzunluğu (boşluk kaymasını önlemek için)
  const maxLength = Math.max(...tags.map((t) => t.length));

  useEffect(() => {
    const currentTag = tags[tagIndex];

    if (!isDeleting && charIndex < currentTag.length) {
      const typing = setTimeout(() => {
        setText((prev) => prev + currentTag[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(typing);
    }

    if (!isDeleting && charIndex === currentTag.length) {
      const hold = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(hold);
    }

    if (isDeleting && charIndex > 0) {
      const deleting = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 80);
      return () => clearTimeout(deleting);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTagIndex((prev) => (prev + 1) % tags.length);
    }
  }, [charIndex, isDeleting, tagIndex]);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        {/* Sol taraf */}
        <motion.div
          className="blog-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="center-wrapper">
          <h1 className="highlight">
  <span className="first">Merhaba,</span> <span className="second">Ben</span>
</h1>

          <h1
            className="animated-text"
            style={{ minWidth: `${maxLength}ch` }}
          >
            {text}
          </h1>
          <p className="description">
            2 yıllık tecrübeye sahip bir Web Developer Geliştiriciyim. Backend
            tarafında .NET, frontend tarafında ise React ve Next
            kullanarak web uygulamalar geliştiriyorum. Kullanıcı dostu
            ve sürdürülebilir çözümler üretmeye odaklanıyor, temiz kod
            prensipleriyle geliştirme yapıyorum.
          </p>
        </div>

          <div className="buttons">
            <motion.a
              href="#contact"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              İletişim
            </motion.a>
            <motion.a
              href="#cv"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CV İndir
            </motion.a>
          </div>
        </motion.div>

        {/* Sağ taraf */}
        <motion.div
          className="blog-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Logo}
            alt="Developer Avatar"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
