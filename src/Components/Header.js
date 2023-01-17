import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <>
        <div className='header-container'>
            <h1>Hey, I'm <span className="bold-name">David Lasky</span>.</h1>
            <h3>I am a self-taught <span className="bold-name">Front-End Web Developer</span>.
                I am always striving to learn new code and techniques to further my skills
                as a developer.  I shall remain a student for life.
            </h3>
            <h4>My hobbies: Guitar, hiking, trying new code.</h4>
            <hr></hr>
            <br></br>
            <p>Download Resume <a href="David resume.pdf" download="David resume.pdf" ><FontAwesomeIcon icon={faDownload} /></a></p>
        </div> 
        </>
    )
}
