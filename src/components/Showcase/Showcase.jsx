import React from "react";

const Showcase = ({ data }) => {
  const projectList = data;
  const ProjectCard = projectList.map((project, key) => {
    return (
      <div key={key} className="project-card">
        <h4>{project.title}</h4>
      </div>
    );
  });
  return (
    <>
      <div>{ProjectCard}</div>
    </>
  );
};

export default Showcase;
