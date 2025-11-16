import React from 'react';
import { useState } from 'react';
import './contact.css';
import image from './images/email.png';
import githubIcon from './images/social.png';
import { Link } from 'react-router-dom';
function Contact() { 
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "017e8f07-e78f-416d-861d-0f0c8f5d0d36");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Form submitted successfully!" : "There was an error submitting the form.");
    if (data.success == true) {
        const successfulMsg = document.getElementsByClassName('successful-msg')[0];
        const contactpage = document.getElementsByClassName('contact-page')[0];
        console.log("Message sent successfully");
        successfulMsg.style.display = "flex";
        contactpage.style.display = "none";
        
        setTimeout(() => {
            successfulMsg.style.display = "none";
            contactpage.style.display = "flex";
        }, 3000);
        event.target.reset();

    } else {
        console.log("There was an error sending the message");
        successfulMsg.style.display = "none";
    }
  };
    return(
        <>
        <div className="successful-msg">
            <div className="checkmark-circle"></div>
            <h1 id='result'>{result}</h1>
            <p id='msg'>Thank you! The form has been submitted successfully. <br />We will get back to you soon.</p>

        </div>
        <div className="contact-page">
            <div className="email-form">
                <h1>Get in touch</h1>
                 <form onSubmit={onSubmit}>
             <input type="text" name="name" placeholder='Your Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <input type="text" name="subject" placeholder='Subject' required/>
            <textarea name="message" placeholder='Your Message' required></textarea>
            <button type="submit" id='send-btn'>Send Message</button>
    </form>
            </div>
            <div className="details">
                <h1>Contact Information</h1>
                <div className="email">
                    <img src={image} alt="Email Icon" /> 
                    <Link className='mail' to="mailto:maviaarav@example.com">maviaarav@example.com</Link>
                </div>
                <div className="github">
                    <img src={githubIcon} alt="GitHub Icon" />
                    <Link className='github-link' to="https://github.com/maviaarav/">Github <br />https://github.com/maviaarav/</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;