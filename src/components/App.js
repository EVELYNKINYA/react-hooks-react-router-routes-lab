import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <NavLink />
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
      </div>
    </Router>
  );
}

export default App;
