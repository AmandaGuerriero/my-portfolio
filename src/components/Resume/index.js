import React, { useState } from 'react';
import Project from '../Project';

function Resume(props) {
    return (
        <section class="page-section">
            <h2>Resume</h2>
            <div class="resume">
                <a href="https://github.com/amandaguerriero/my-portfolio/raw/master/src/images/Resume.pdf"><img src="https://github.com/amandaguerriero/my-portfolio/raw/master/src/images/Resume.png"></img></a>
                <h3><br />Click image above to download resume</h3>
            </div>
        </section>
    );
}

export default Resume;