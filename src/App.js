import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path='/my-portfolio/portfolio'>
            <Project />
          </Route>
          <Route exact path='/my-portfolio/contact'>
            <Contact />
          </Route>
          <Route exact path='/my-portfolio/resume'>
            <Resume />
          </Route>
          <Route exact path='/my-portfolio'>
            <About />
          </Route>
          <Route exact path='/my-portfolio/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;