import React from "react";
import { Nav, Hero, Showcase, Footer } from "./components";
import data from "./data/data.json";

// Style
import "./App.css";

const App = () => {
  return (
    <>
      <div className="conatainer">
        <Nav />
        <div className="sections">
          <div className="hero-section sec">
            <Hero />
          </div>
          <div className="showcase-section sec">
            <Showcase data={data.ProjectList} />
            {console.log(data.ProjectList)}
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
