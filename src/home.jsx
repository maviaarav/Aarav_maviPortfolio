import React, { useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() { 
    useEffect(() => {
        const links = document.querySelectorAll('.projects-list a');
        links.forEach(link => {
            if (!link.classList.contains('project')) {
                link.classList.add('project');
            }
        });
    }, []);

    return (
        <div className="background-interface">
            <div className="image-content">
               <h1>Hi, I'm Aarav Mavi, A young developer.</h1>
               <p>I’m a young beginner programmer and student exploring the world of coding. I enjoy experimenting with front-end design and building simple projects, while continually learning new skills to grow and shape my future in technology.</p>
            </div>
            <h2>Featured Projects</h2>
            <div className='projects-list'>
                <div className="Project-1">
                <Link to={"https://todo-list-alpha-one-81.vercel.app/"} id='project1'></Link>
                <h4>Todo list</h4>
                <h5>A simple and efficient Todo List app I built to manage daily tasks, featuring add, delete, and update options—designed to improve productivity with a clean UI.</h5>
                </div>
                
            </div>
        </div>
    );
}
export default Home;