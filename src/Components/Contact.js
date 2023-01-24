import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const form_endpoint = "https://public.herotofu.com/v1/EXAMPLE_FORM_ID";

export default function Contact() {

    const[submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };


    return (
        <div className="contact-container">
            <h1>Get in touch with me</h1>
            <form 
                  className="form-container"
                  action={form_endpoint} //TODO
                  onSubmit={handleSubmit}
                  method="POST" //TODO
                  target="_blank"
            >
                <input 
                    type="text"
                    placeholder="Full name here..."
                    name="name"
                    // required
                />
                <input 
                    type="email"
                    placeholder="Email@example.com"
                    name="email"
                    // required
                />
                <textarea 
                    placeholder="Type you message here..."
                    name="message"
                    rows={7}
                    // required
                />
                <button className="submit" type="submit">Submit Form</button>
            </form>
        </div>
    )
}