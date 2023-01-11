import React from "react";
import Projects from "./Projects";

export default function Work() {
    const textStuff = {
        description: "This is the description of the above image and it will have an option to be less or more. i shoul dprobably use an api for all this info and that;s what ill work on next",
        descriptionLength: 80,
    }

    return (
      <div className="project-frame">
        <Projects 
            description={textStuff.description}
            length={textStuff.descriptionLength}
        />
    
      </div>
    );
  }
  
  
  