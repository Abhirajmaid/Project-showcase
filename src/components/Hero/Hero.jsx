import React from "react";
import ScrollDown from "./ScrollDown";
import "./style.css";
import "../../../dist/style.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
          <span>
            Welcome to my <br /> Ultimate Project Showcase!!
          </span>
        </div>
      </div>
      <div className="scroll-container">
        <ScrollDown />
      </div>
    </>
  );
};

export default Hero;
