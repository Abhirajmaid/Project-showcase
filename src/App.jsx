import React from "react";
import { Nav, Hero, Showcase, Footer } from "./components";
import data from "./data/data.json";

// Style
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <div className="conatainer">
        <div className="sections">
          <div className="hero-section sec">
            <Hero />
          </div>
          <div className="showcase-section sec">
            <Showcase data={data.ProjectList} />
          </div>
          <div className="footer-section sec">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
