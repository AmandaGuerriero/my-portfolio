import React, { useState } from 'react';

function Footer(props) {
    return (
        <footer>
            <div class="contact-info">
                <ul>
                    <li>
                        <a href="mailto:amanda.guerriero@yahoo.com">Email</a>
                    </li>
                    <li>
                        <a href="https://github.com/AmandaGuerriero" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>
            <p>	&copy; Amanda Guerriero 2020  </p>
        </footer>
    );
}

export default Footer;