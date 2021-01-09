import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';

function Nav(props) {
  
const renderHome = (routerProps) => {
  return <About />
}

const renderProject = (routerProps) => {
  return <Project />
}

const renderContact = (routerProps) => {
  return <Contact />
}

const renderResume = (routerProps) => {
  return <Resume />
}

  return (
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <Link to="/" onClick={renderHome}>About</Link>
          </li>
          <li className="mx-2">
          <Link to="/portfolio" onClick={renderProject}>Portfolio</Link>
          </li>
          <li className="mx-2">
          <Link to="/contact" onClick={renderContact}>Contact</Link>
          </li>
          <li className="mx-2">
          <Link to="/resume" onClick={renderResume}>Resume</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;