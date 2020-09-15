import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './shared/UIElements/Navbar/Navbar';
import CharacterData from './CharacterData/CharacterData';

function App() {

  let routes = (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/character/:character">
          <CharacterData />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  )
  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>
  );
}

export default App;
