import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Projects({description, length, link, image, demo}) {
        
    const[isExpanded, setIsExpanded] = useState(false); 
    
    function toggleParagraph() {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="image-container">
            <a className="git-link" href={link} target="blank">
            <img className="project-img"
                 src={image} alt="" />
                 <span className="description-onImage" >{description}</span>
            </a>
            <p className="project-dscrp">
                {isExpanded ? description : `${description.slice(0, length)}...`}
                <span>
                    <button className="display-text-btn" onClick={toggleParagraph}>
                        {isExpanded ? "Read Less": 'Read More'}       
                    </button>
                    <div className="demo-buttons-container">    
                        <a href={demo} target="_blank">
                            <button className="demo-buttons">
                                Live Demo
                            </button>
                        </a>
                        <a href={link} target="_blank">
                            <button className="demo-buttons">
                               <FontAwesomeIcon icon={faGithub} /> Source Code
                            </button>
                        </a>
                    </div>
                </span> 
            </p>
        </section>
    )
}