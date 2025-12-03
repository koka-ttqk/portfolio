import React from "react";
import "../assets/styles/Service.scss";

// MUI 아이콘
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  points: string[];
};

export default function Service() {
  const services: ServiceItem[] = [
    {
      icon: <SecurityOutlinedIcon />,
      title: "Web Security",
      points: [
        "기초 웹 취약점(XSS/CSRF) 흐름 이해",
        "Request/Response 기반 취약점 분석 실습 경험",
      ],
    },
    {
      icon: <LanOutlinedIcon />,
      title: "Network Security",
      points: [
        "TCP/UDP, 패킷 구조 및 트래픽 흐름 이해",
        "패킷 캡처(Wireshark) 기반 기초 분석 가능",
      ],
    },
    {
      icon: <TerminalOutlinedIcon />,
      title: "Linux & System",
      points: [
        "Kali Linux 실습 환경 구성 및 기본 명령어 활용",
        "로그 분석 및 서비스 기반 구조 이해",
      ],
    },
    {
      icon: <BugReportOutlinedIcon />,
      title: "Vulnerability Analysis",
      points: [
        "OWASP Top 10 학습 중",
        "간단한 취약점 재현 및 위험도 판단 가능",
      ],
    },
    {
      icon: <TimelineOutlinedIcon />,
      title: "Packet & Traffic Analysis",
      points: [
        "네트워크 공격 패턴 기초 이해",
        "패킷 기반 이상 분석 경험",
      ],
    },
    {
      icon: <BuildOutlinedIcon />,
      title: "Scripting & Tools",
      points: [
        "Python 기반 간단 자동화 스크립트 작성",
        "Burp Suite·Nmap 등 Tool 활용 경험",
      ],
    },
  ];

  return (
    <section id="services">
      <div className="items-container">
        <h1 className="services-title">Services</h1>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="svc-card" key={i}>
              <div className="svc-icon">{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <ul className="svc-points">
                {s.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}