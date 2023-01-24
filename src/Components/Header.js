import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
    return (
        <>
        <div className='header-container'>
            <h1>Hey, I'm <span className="bold-name">David Lasky</span>.</h1>
            <h3>I am a self-taught <span className="bold-name">Front-End Web Developer</span>.
                I am always striving to learn new code and techniques to further my skills
                as a developer.  I shall remain a student for life.
            </h3>
            {/* make new para */}
            <h4>My hobbies: Guitar, hiking, trying new code.</h4>
            <hr></hr>
            <br></br>
            <a href="David resume.pdf" download="David resume.pdf" ><p>Download Resume <FontAwesomeIcon icon={faDownload} /></p></a>
            <footer className="media-links">
                <a href="https://github.com/davidl117" target={"_blank"}><FontAwesomeIcon icon={faGithub} /></a>  
                <a href="" target={""}><FontAwesomeIcon icon={faLinkedin} /></a>  
            </footer>
        </div> 
        </>
    )
}
