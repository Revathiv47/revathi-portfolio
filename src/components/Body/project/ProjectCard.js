import React from "react";
import "./ProjectCard.css";


function ProjectCard({project}) {
   

  return (
    <div className="project-card">
      <div className="project-info">
        <label  className="project-title">{project.title} </label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank">
              <div className="link-button">
              <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
              <a className="project-link" href={project.github} target="_blank">
              <div className="link-button">
              <i class="devicon-github-original"></i>Github
              </div>
            </a>
          )}
     </div>   
     <div className="project-about">
     <p >{project.about}</p>
     </div>
    
   
           <span class="iconify" data-icon="logos:netlify"></span>
      </div>
      <img src={project.image} className="project-photo" />  
      </div >
    
  );
}

export default ProjectCard;
