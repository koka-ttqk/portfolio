import React from "react"; 
import aboutImg from "../assets/images/about.jpg"; // 원하는 이미지로 교체
import "../assets/styles/About.scss";

export default function About() {
  return (
    <section id="about">
      <div className="items-container">
        
        {/* Title */}
        <h1 className="about-title">About Me</h1>

        {/* Layout: Left Image / Right Text */}
        <div className="about-layout">
          
          {/* Left: Photo */}
          <div className="about-photo">
            <img src={aboutImg} alt="Profile" />
          </div>

          {/* Right: Text */}
          <div className="about-text">

            <p>
              안녕하세요. 👋 
              <br/> 화이트해커로 성장하기 위한 기반을 차근차근 다지고 있는 조재성입니다.
              <br/> 웹 취약점 구조와 네트워크 흐름을 이해해 “공격을 예방하는 보안 전문가”가 되고 싶어요.
            </p>

            <h3>🔧 지금까지의 학습</h3>
            <ul>
              <li>네트워크 기본(TCP/UDP, 패킷 흐름)</li>
              <li>Kali Linux 환경 실습 및 간단한 로그 분석</li>
            </ul>

            <h3>💡 관심 분야</h3>
            <ul>
              <li>웹 취약점 분석 및 보안 강화</li>
              <li>리눅스 기반 시스템 보안</li>
            </ul>

            <h3>🎯 현재 목표</h3>
            <ul>
              <li>OWASP Top 10 학습</li>
              <li>취약점 예방 중심의 화이트해커로 성장하기</li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}