import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Project} />
        <Route path="/resume" component={Resume} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
