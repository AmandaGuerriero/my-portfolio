import React from 'react';

function About(props) {
    return (
        <section class="page-section" id="about">
            <h2>About Me</h2>
            <div class="about-details">
                <img src="https://github.com/AmandaGuerriero/my-portfolio/blob/master/src/images/Headshot.png?raw=true" alt="Amanda Guerriero's headshot."/>                
                <p>Amanda is originally from New York, but moved to California 13 years ago to persue a Masters Degree in Film Production with an editing emphasis.<br /> <br /> She currently works at the NFL as a Sr. Product Manager and is learning to code at the UCLA Extension Coding Bootcamp. Product Manager with experience executing time-sensitive and robust products. <br /> <br />  Manages relationships and priorities among several teams. Well versed in all phases of the development process from conception to requirements definition, prototyping, design, development through QA cycles to produce a quality end product. Motivated and organized, a professional who always embraces a new challenge in an ever-changing environment.</p>
            </div>  
        </section>
    );
}

export default About;