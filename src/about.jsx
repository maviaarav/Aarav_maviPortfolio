import React from 'react';
import './about.css';

function About() {
    return (
        <>
        <div className="about-page">
            <div className='about-image'>
                <div className="image"></div>
                <h1>Aarav Mavi</h1>
                <h2 className='header-2'>Software Developer</h2>
            </div>
            <div className='about-text'>
            <h1>About Me</h1>
            <p className='p'>
            I'm a passionate designer with a focus on creating intuitive and engaging user experiences. With a background in visual communication and a keen eye for detail, I strive to bring creativity and functionality together in every project.
            </p>
            <h3 className='h3'>I'm a young student currently in 9th grade, balancing schoolwork with my passion for coding. Over the past three years, I've explored various areas of development, including front-end, backend, and UI design. I work with HTML, CSS, JavaScript, Python, and React, continually learning to sharpen my skills. I'm dedicated to growing in this field, taking on new challenges, and building creative, functional digital experiences.</h3>
            <h2 className='h2'>Skills</h2>
            <div className='titles'>
                <h3 >Front-end</h3>
                <h3 >70%</h3>
            </div>
            
            <div class="progress-bar">
            <div class="progress-fill"></div>
            </div>
            <div className='titles'>
                <h3>Back-end</h3>
                <h3>60%</h3>
            </div>
            
            <div class="progress-bar">
            <div class="progress-fill-2"></div>
            </div>
            <div className='titles'>
                <h3>UI Design</h3>
                <h3>70%</h3>
            </div>
            <div class="progress-bar">
            <div class="progress-fill-3"></div>
            </div>
            </div>
            
            
        </div>
        </>
    );
}
export default About;