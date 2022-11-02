import React from "react";
import { Icon } from "@iconify/react";
import "./style.css";

const Showcase = ({ data }) => {
  const projectList = data;
  const ProjectCard = projectList.map((project, key) => {
    // console.log(project.tech_stack.client);
    return (
      <div key={key} className="project-card">
        <div
          className="card-img"
          style={{
            backgroundImage: `linear-gradient(to top, rgb(20, 20, 20), rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.1)), url(${project.main_image})`,
          }}
        ></div>
        <div className="card-desc">
          <h3>{project.title}</h3>
          <div>
            <div className="tech" style={{ marginBottom: "10px" }}>
              {"Client :"}
              {project.tech_stack.client.map((item, key) => {
                return (
                  <span key={key} className="tech-item">
                    {"#"}
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="tech">
              {"Server :"}
              {project.tech_stack.server.map((item, key) => {
                return (
                  <span key={key} className="tech-item">
                    {"#"}
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <p>{project.description}</p>
          <div className="btn-container">
            <button className="visit-btn">
              <a href={project.live_link}>Visit</a>
            </button>
            <button className="github-btn">
              <a href={project.github_link}>
                <Icon className="git-icon" icon="akar-icons:github-fill" />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="card-section">{ProjectCard}</div>
    </>
  );
};

export default Showcase;
