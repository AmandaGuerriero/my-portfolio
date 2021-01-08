import React, { useState } from 'react';

function Project(props) {
    return (
        <section class="page-section" id="work">
            <div class="grid-container">

                <a href="http://bossy-bartender.herokuapp.com/" target="_blank" class="grid-item work-1">
                    <div>
                        <h3>Bossy Bartender</h3>
                        <span>Group Project 2</span>
                    </div>
                </a>
                <a href="https://rawagschal.github.io/spaced-out/" target="_blank" class="grid-item work-2">
                    <div>
                        <h3>Spaced Out</h3>
                        <span>Group Project 1</span>
                    </div>
                </a>
                <a href="https://amandaguerriero.github.io/weather-dashboard/" target="_blank" class="grid-item work-3">
                    <div>
                        <h3>Weather Dashboard</h3>
                        <span>APIs/Local Storage/JS</span>
                    </div>
                </a>    
                <a href="https://amandaguerriero.github.io/taskmaster-pro/" class="grid-item work-4">
                    <div>
                        <h3>Taskmaster Pro</h3>
                        <span>JS/Local Storage/Bootstrap</span>
                    </div>
                </a>  
                <a href="https://amandaguerriero.github.io/password-generator/" target="_blank" class="grid-item work-5">
                    <div>
                        <h3>Password Generator</h3>
                        <span>JS/Prompts</span>
                    </div>
                </a>  
            </div>
        </section>
    );
}

export default Project;