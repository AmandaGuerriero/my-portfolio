import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/About" onClick={renderHome} activeStyle={{
              fontWeight: "bold",
              color: "#D7B9D5"
            }}>About</NavLink>
          </li>
          <li className="mx-2">
          <NavLink to="/portfolio" onClick={renderProject} activeStyle={{
              fontWeight: "bold",
              color: "#D7B9D5"
            }}
            >Portfolio</NavLink>
          </li>
          <li className="mx-2">
          <NavLink to="/contact" onClick={renderContact} activeStyle={{
              fontWeight: "bold",
              color: "#D7B9D5"
            }}>Contact</NavLink>
          </li>
          <li className="mx-2">
          <NavLink to="/resume" onClick={renderResume} activeStyle={{
              fontWeight: "bold",
              color: "#D7B9D5"
            }}>Resume</NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;