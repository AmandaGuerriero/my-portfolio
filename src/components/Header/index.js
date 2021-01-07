import React, { useState } from 'react';
import Nav from '../Nav';

function Header(props) {
    const [contactSelected, setContactSelected] = useState(false);
    return (
        <header className="flex-row px-1">
            <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span>Amanda Guerriero
            </a>
            </h2>
            <Nav
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </header>
    );
}

export default Header;