import React from 'react';
import './about.css';

function About() {
    return (
        <>
        <div className="about-page">
            <div className='about-text'>
            <h1>About Me</h1>
            <p>
            I'm a passionate designer with a focus on creating intuitive and engaging user experiences. With a background in visual communication and a keen eye for detail, I strive to bring creativity and functionality together in every project.
            </p>
            <h3>I'm a young student currently in 9th grade, balancing schoolwork with my passion for coding. Over the past three years, I've explored various areas of development, including front-end, backend, and UI design. I work with HTML, CSS, JavaScript, Python, and React, continually learning to sharpen my skills. I'm dedicated to growing in this field, taking on new challenges, and building creative, functional digital experiences.</h3>
            <h2>Skills</h2>
            <h3>Front-end 80%</h3>
            <div class="progress-bar">
            <div class="progress-fill"></div>
            </div>
            <h3>Back-end 80%</h3>
            <div class="progress-bar">
            <div class="progress-fill"></div>
            </div>
            <h3>UI Design 80%</h3>
            <div class="progress-bar">
            <div class="progress-fill"></div>
            </div>
            </div>
            
            <div className='about-image'>
                <h5>Aarav Mavi</h5>
            </div>
        </div>
        </>
    );
}
export default About;