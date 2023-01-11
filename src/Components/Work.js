import React from "react";
import Projects from "./Projects";

export default function Work() {
    const data = {
        description: `This is a To-Do List made with JavaScript and has basic functionality. Click here for the source code` ,
        descriptionLength: 80,
        link: "https://github.com/davidl117/todo-list",
    }

    return (
      <div className="project-frame">
        <Projects 
            link={data.link}
            description={data.description}
            length={data.descriptionLength}
        />
       
      </div>
    );
  }
  
  
  