import React, { useEffect } from 'react';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected
  } = props;
  return (
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
            {/* <Router>
                <Route path='/' component={Project} />
            </Router> */}
          </li>
          <li className="mx-2">Portfolio</li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">Resume</li>
        </ul>
      </nav>
  );
}

export default Nav;