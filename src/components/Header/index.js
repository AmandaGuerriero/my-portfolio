import React from 'react';
import Nav from '../Nav';

function Header(props) {
    return (
        <header className="flex-row px-1">
            <h2>
            <a data-testid="link" href="/">
                Amanda Guerriero
            </a>
            </h2>
            <Nav />
        </header>
    );
}

export default Header;