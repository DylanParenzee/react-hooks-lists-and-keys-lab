import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const project = projects.map((pro) => {
    return (
      <ProjectItem
        key={pro.id}
        name={pro.name}
        about={pro.about}
        technologies={pro.technologies}
        id={pro.id}
      />
    );
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;
