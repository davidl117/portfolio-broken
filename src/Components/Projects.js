import React, { useState } from "react";

export default function Projects({description, length, link,image}) {
        
    const[isExpanded, setIsExpanded] = useState(false); 
    
    function toggleParagraph() {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="image-container">
            <a href={link} target="blank"><img className="project-img" src={image} alt=""/></a>
            <p className="project-dscrp">
                {isExpanded ? description : `${description.slice(0, length)}...`}
                <span>
                    <button className="display-text-btn" onClick={toggleParagraph}>
                        {isExpanded ? "Read Less": 'Read More'}       
                    </button>
                </span> 
            </p>
        </section>
    )
}