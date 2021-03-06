import React, { Component } from 'react';

import logo from './logo.svg';
import Map from '../src/components/Map';
import DemoSimple from '../src/components/DemoSimple';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Testing
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <DemoSimple />
        <Map />
      </div>
    );
  }
}

export default App;
