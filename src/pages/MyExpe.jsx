import { motion } from "framer-motion";
import "../styles/myExpe.css"
const experiences = [
  {
    date: "Eylül 2025 - Halen",
    title: "Öğrenci",
    company: "İstanbul Atlas Üniversite - Öğrenci",
    description:
      "İstanbul Atlas Üniversitesinde Bilişim Güvenliği Teknolojisi bölümü okuyorum.",
    icon: "🎓",
    href:"https://www.atlas.edu.tr/"
  },
  {
    date: "Eylül 2024 - Haziran 2025",
    title: "Stajyer",
    company: "Zeugma Yazılım - Stajyer",
    description:
      "Zeugma Yazılım firmasında stajyer olarak web geliştirme sürecinde yer aldım.",
    icon: "💻",
    href:"http://www.zeugma.com.tr/"
  },
  {
    date: "2019 - 2023",
    title: "Bilişim Teknolojileri",
    company: "Kemerburgaz Halis Kutmangil Mesleki ve Teknik Anadolu Lisesi",
    description:
      "HKMTAL Lisesinden Bilişim Teknolojileri bölümünden mezun oldum.",
    icon: "🎓",
    href:"https://haliskutmangilmtal.meb.k12.tr/"
  },
];

export default function ExperienceEducation() {
  return (
    <section className="timeline">
      <h2 className="timeline-title">
        Deneyimlerim & <span>Eğitimlerim</span>
      </h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-box"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon"><a href={exp.href}>{exp.icon}</a></div>
            <div className="timeline-content">
              <p className="timeline-date">{exp.date}</p>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
