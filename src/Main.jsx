import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';


const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Project} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
