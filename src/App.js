import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      {/* <main>
        <div>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main> */}
    </div>
  );
}

export default App;