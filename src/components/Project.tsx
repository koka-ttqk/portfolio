// Project.tsx
import React, { useState } from "react";
import "../assets/styles/Project.scss";

import proj1 from "../assets/images/proj_websec.png";
import proj2 from "../assets/images/proj_packet.png";
import proj3 from "../assets/images/proj_script.png";

type ProjectType = {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
  details: string;
};

export default function Project() {
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Web Vulnerability Practice Lab",
      thumbnail: proj1,
      summary: "OWASP Juice Shop 기반 웹 취약점 실습 및 분석 프로젝트",
      details: `
      ✔ XSS, CSRF, Broken Authentication 등 주요 취약점 재현
      ✔ Burp Suite를 활용한 Request/Response 분석
      ✔ 취약점 발생 원리 및 대응 방안 문서화
      ✔ OWASP Top 10 기반 실제 공격 흐름 이해 강화
      `,
    },
    {
      id: 2,
      title: "Network Packet Analysis",
      thumbnail: proj2,
      summary: "Wireshark 기반 네트워크 패킷 분석 프로젝트",
      details: `
      ✔ TCP/UDP 3-way handshake 분석
      ✔ ARP Spoofing 탐지 패턴 분석
      ✔ ICMP Flood 패킷 캡처 및 필터링
      ✔ 네트워크 공격 패턴 이해 및 로그 분석 경험
      `,
    },
    {
      id: 3,
      title: "Security Automation Scripting",
      thumbnail: proj3,
      summary: "Python 기반 보안 자동화 스크립트 제작",
      details: `
      ✔ 민감 정보 파일 탐지 스크립트
      ✔ 보안 Header 체크 자동화 도구 개발
      ✔ 간단한 포트 스캐너(Python socket)
      ✔ 보안 점검 업무 간소화 목적
      `,
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>Security Projects</h1>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project" key={p.id} onClick={() => setActiveProject(p)}>
            <img src={p.thumbnail} className="zoom" alt={p.title} width="100%" />
            <h2>{p.title}</h2>
            <p>{p.summary}</p>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p className="modal-detail">{activeProject.details}</p>
            <button className="close-btn" onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}