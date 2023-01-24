import React from "react";
import Projects from "./Projects";
import data from "./data";


export default function Work() {
//add screen shots for each project
const projects = data.map(project => {
  return <Projects 
            link={project.link}
            description={project.description}
            length={project.descriptionLength}
            image={project.image} />  
})

    return (
      <div className="project-frame">
        {projects}
      </div>
    );
  }
  
  
  