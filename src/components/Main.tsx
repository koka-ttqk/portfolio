import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import aboutImage from "../assets/images/profile.jpg";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={aboutImage} alt="About Image" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/koka-ttqk" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Jo Jae Seong</h1>
          <p>White Hacker</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/koka-ttqk" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;