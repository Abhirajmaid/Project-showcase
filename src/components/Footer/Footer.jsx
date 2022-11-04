import React from "react";
import "./style.css";
import logo from "../../assets/Images/logo310x310.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <div className="logo footer-logo">
            <a href="/">
              <img src={logo} alt="abhiraj maid" />
            </a>
          </div>
          <div>
            <p>Copyright © 2022 abhirajmaid</p>
          </div>
        </div>
        <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.instagram.com/abhirajmaid/" target="_blank">
                <Icon
                  className="social-icon"
                  icon="akar-icons:instagram-fill"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/Abhirajmaid" target="_blank">
                <Icon className="social-icon" icon="akar-icons:github-fill" />
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/in/abhiraj-maid-42a381217?trk=public_profile_browsemap"
                target="_blank"
              >
                <Icon
                  className="social-icon"
                  icon="akar-icons:linkedin-box-fill"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/amaid050?lang=en" target="_blank">
                <Icon className="social-icon" icon="akar-icons:twitter-fill" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
