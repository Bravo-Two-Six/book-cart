import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter , Route , Switch } from "react-router-dom";
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
          <Switch >
              <Route path="/" exact>
                  <Home />
              </Route>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;