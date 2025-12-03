import React from "react";
import "../assets/styles/Skill.scss";

type CircleSkill = {
  title: string;
  percent: number;
  subLeft: string;
  subRight: string;
};

type BarSkill = {
  name: string;
  percent: number;
};

export default function Skill() {
  // 상단 원형 카드 (보안 중심)
  const circleSkills: CircleSkill[] = [
    { title: "Web Security",  percent: 78, subLeft: "24%",  subRight: "48%" },
    { title: "Network",       percent: 72, subLeft: "12%",     subRight: "34%" },
    { title: "Linux & Tools", percent: 68, subLeft: "16%",   subRight: "26%" },
  ];

  // 하단 바(보안 + 개발/언어)
  const barSkills: BarSkill[] = [
    { name: "Burp Suite",          percent: 55 },
    { name: "Wireshark",           percent: 30 },
    { name: "Threat Modeling",     percent: 25 },
    { name: "Python",   percent: 72 },
    { name: "C",   percent: 65 },
    { name: "Java", percent: 50 },
    { name: "Git / GitHub",        percent: 52 },
    { name: "SQL",            percent: 60 },
  ];

  return (
    <section id="skills">
      <div className="items-container">
        <h1 className="skills-title">Skills</h1>

        {/* Top: Circle cards */}
        <div className="skills-grid">
          {circleSkills.map((s, i) => (
            <div className="skill-card" key={i}>
              <div
                className="circle"
                aria-label={`${s.title} ${s.percent}%`}
                role="img"
                style={{ ["--p" as any]: s.percent }}
              >
                <span className="num">{s.percent}%</span>
              </div>

              <h3 className="card-title">{s.title}</h3>

              <div className="card-sub">
                <div>
                  <strong>{s.subLeft}</strong>
                  <span> Last week</span>
                </div>
                <div>
                  <strong>{s.subRight}</strong>
                  <span> Last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Linear bars */}
        <div className="bars">
          {barSkills.map((b, i) => (
            <div className="bar-row" key={i}>
              <div className="bar-label">
                <span>{b.name}</span>
                <span className="val">{b.percent}%</span>
              </div>
              <div className="bar-track" role="progressbar" aria-valuenow={b.percent} aria-valuemin={0} aria-valuemax={100}>
                <div className="bar-fill" style={{ width: `${b.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}