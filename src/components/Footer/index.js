import React from 'react';

function Footer(props) {
    return (
        <footer>
            <div class="contact-info">
                <ul>
                    <li>
                        <a href="https://github.com/AmandaGuerriero" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/AmandaGuerriero/my-portfolio/master/src/images/github-icon.png"alt="Github icon"></img></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/amanda-guerriero-29377447/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/AmandaGuerriero/my-portfolio/master/src/images/linkedin-icon.png" alt="Linked In icon"></img></a>
                    </li>
                </ul>
                <p>	&copy; Amanda Guerriero 2020  </p>
            </div>
        </footer>
    );
}

export default Footer;