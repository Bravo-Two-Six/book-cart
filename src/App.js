import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  }
}

export default App;