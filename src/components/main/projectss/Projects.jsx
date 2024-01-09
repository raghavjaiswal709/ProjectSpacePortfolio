import React from "react";
import "../projectss/projects.css";
import Projectcard from "../projectCardcompo/Projectcard";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projectsheading">Projects</h1>
      <div className="justtoflexcards">
        <Projectcard />
      </div>
    </div>
  );
};

export default Projects;
