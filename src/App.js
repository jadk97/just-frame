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

function App() {

  let routes = (
    <React.Fragment>
      <Switch>
        <Route path="/">
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
