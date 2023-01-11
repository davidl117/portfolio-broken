import React, { useState } from "react";

export default function Projects({description, length}) {
        
    const[isExpanded, setIsExpanded] = useState(false); 
    
    function toggleParagraph() {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="image-container">
            <img className="project-img" src="https://i.etsystatic.com/20149620/r/il/1ad7b1/1873153944/il_1588xN.1873153944_oj8k.jpg" alt="To do list" />
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