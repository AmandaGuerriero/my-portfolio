import React, { useEffect } from 'react';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected
  } = props;
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span>Amanda Guerriero
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* <li className="mx-2">
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;