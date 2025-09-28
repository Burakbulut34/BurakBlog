import React, { useState } from "react";
import "../styles/abpu.css"
//İcon İmages
import İcon1 from "../assets/computer_4248245.png";
import İcon2 from "../assets/c-sharp_6132221.png";
import İcon3 from "../assets/science_13065592.png"
import İcon4 from "../assets/html-5_5968267.png";
import İcon5 from "../assets/css-3_5968242.png";
import İcon6 from "../assets/bootstrap_5968672.png"
import İcon7 from "../assets/js_5968292.png";
import İcon8 from "../assets/visual-basic_5968389.png";
import İcon9 from "../assets/visual-studio-code-svgrepo-com.svg"
import İcon10 from "../assets/firebase-logo.png";
import İcon11 from "../assets/google-analytics.svg";
import İcon12 from "../assets/database_4248340.png";
import İcon13 from "../assets/networking_6038004.png";
import İcon14 from "../assets/github_733553.png";
import İcon15 from "../assets/icons8-.net-framework-48.png";
import İcon16 from "../assets/logo.png";

import { RiNextjsLine } from "react-icons/ri";

const AbPu = () => {
  const [activeTab, setActiveTab] = useState("yetenekler");
  // Örnek data
  const data = {
   yetenekler: [
      ".NET Core", "C#", "Rest API", "EF Core", "Clean Architecture",
      "SOLID", "Multi-Project Solution", "CI/CD", "CQRS and Mediator pattern", "ERP Software",
      "Dependency Injection", "SignalR", "OOP", "Data Structures", "React.js",
      "Next.js", "CSS", "Tailwind CSS", "Bootstrap", "TypeScript",
      "JavaScript", "Mobx", "AutoMapper", "XML", "JSON",
      "Visual Studio", "Android Studio", "Java", "Firebase", "SDK",
      "IIS Server", "SQL", "LINQ", "AWS S3", "Git"
    ],
    yayinlar: [
      { id: 1, title: "EduSkill", desc: "Bu proje, insanlar test çözmesi için React kullanılarak geliştirilen modern ve kullanıcı dostu bir web sitesi olup, responsive özelliği taşımaktadır.", href:"https://edu-skill.vercel.app/home"},
      { id: 2, title: "BurakOfis", desc: "Sanal Ofis, Hazır Ofis, Toplantı Odası ve Ortak Ofis kiralama hizmetleri sunan modern bir platformdur.(Gerçek ofis kiralama hizmeti yoktur.)", href:"https://burak-ofis-resonsive-site.vercel.app/"},
    ],
  };
  return (
    <div className="container">
      {/* Sekmeler */}
      <div className="tabs">
         <button
          className={activeTab === "yetenekler" ? "active" : ""}
          onClick={() => setActiveTab("yetenekler")}
        >
          Yetenekler
        </button>
        <button
          className={activeTab === "yayinlar" ? "active" : ""}
          onClick={() => setActiveTab("yayinlar")}
        >
          Yayınlar
        </button>
      </div>

       <div className="content">
        {activeTab === "yetenekler" ? (
        <div class="box-container">
            <div class="box"><img src={İcon2} alt="icon2-logo" width={30} height={30} />     C#</div>
            <div className="box" ><img src={İcon15} alt="icon15-logo" /> EF Core</div>
            <div className="box"><img src={İcon16} alt="icon16-logo" width={30} height={30}/> AutoMapper</div>
            <div class="box"><img src={İcon1} alt="icon1-logo"  width={30} height={30} /> OOP</div>
            <div class="box"> <img src={İcon3} alt="icon3-logo" width={30} height={30}/> React.js</div>
            <div class="box"><RiNextjsLine width={30} height={30}/>Next.js</div>
            <div class="box"><img src={İcon4} alt="icon4-logo"  width={30} height={30}/>Html</div>
            <div class="box"><img src={İcon5} alt="icon5-logo" width={30} height={30}/>CSS</div>
            <div class="box"><img src={İcon6} alt="icon6-logo" width={30} height={30}/>Bootstrap</div>
            <div class="box"><img src={İcon7} alt="icon7-logo" width={30} height={30}/>JavaScript</div>
            <div class="box"><img src={İcon8} alt="icon8-logo" width={30} height={30}/>Visual Studio</div>
            <div class="box"><img src={İcon9} alt="icon9-logo" width={30} height={30}/>Visual Code</div>
            <div class="box"><img src={İcon10} alt="icon10-logo"  width={30} height={30}/>Firebase</div>
            <div class="box"><img src={İcon11} alt="icon11-logo" width={30} height={30}/>Analytics</div>
            <div class="box"><img src={İcon12} alt="icon12-logo" width={30} height={30}/>SQL</div>
            <div class="box"><img src={İcon13} alt="icon13-logo" width={30} height={30}/>Git</div>
            <div class="box"><img src={İcon14} alt="icon14-logo" width={30} height={30}/>Github</div>
        </div>

        ) : (
          data.yayinlar.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href={item.href} className="btn1" target="_blank">Yayını Göster</a>
          </div>
        ))

        )}
      </div>
    </div>
  );
};

export default AbPu;
