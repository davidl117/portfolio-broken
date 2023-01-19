import React, { useState } from "react";

const form_endpoint = "";

export default function Contact() {

    const[submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h3>Thank You!</h3>
                <h3>I'll get back to you ASAP</h3>
            </>
        )
    }

    return (
        <div className="contact-container">
            <h1>Get in touch with me</h1>
            <form 
                  
                  action={form_endpoint}
                  onSubmit={handleSubmit}
                  method="POST"
                  target="_blank"
            >
                <input 
                    type="text"
                    placeholder="Full name here..."
                    name="name"
                    required
                />
                <input 
                    type="email"
                    placeholder="Email@example.com"
                    name="email"
                    required
                />
                <textarea 
                    placeholder="Type you message here..."
                    name="message"
                    required
                />
                <button type="submit">Submit Form</button>
            </form>
        </div>
    )
}