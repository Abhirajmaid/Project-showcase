import React from "react";
import logo from "../../assets/Images/logo310x310.png";

import "./style.css";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-section">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="abhiraj maid" />
            </a>
          </div>
          <div className="nav-mail">
            <a href="mailto:abhirajmaid050@gmail.com">
              abhirajmaid050@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
