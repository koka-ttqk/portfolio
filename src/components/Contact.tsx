import React from "react";
import "../assets/styles/Contact.scss";

import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  const items = [
    {
      icon: <RoomOutlinedIcon />,
      title: "Address",
      desc: "경기도 양주시",
    },
    {
      icon: <PhoneOutlinedIcon />,
      title: "Contact Number",
      desc: "+ 010 5777 1234",
    },
    {
      icon: <MailOutlineIcon />,
      title: "Email Address",
      desc: <a href="mailto:jsjo1211@gmail.com">jsjo1211@gmail.com</a>,
    },
    {
      icon: <GitHubIcon />, // MUI 아이콘
      title: "GitHub",
      desc: (
        <a href="https://github.com/koka-ttqk" target="_blank" rel="noreferrer">
          koka-ttqk
        </a>
      ),
    },
  ];

  return (
    <section id="contact">
      <div className="items-container">

        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">
        회사와 함께 성장하며 안전한 환경을 만드는 보안 전문가로 나아가겠습니다. 연락주세요.
        </p>

        <div className="contact-grid">
          {items.map((it, idx) => (
            <div className="contact-card" key={idx}>
              <div className="contact-icon">{it.icon}</div>
              <h3 className="contact-name">{it.title}</h3>
              <p className="contact-desc">{it.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}