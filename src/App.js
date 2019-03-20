import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
        <div>
          <h1 className={"Nocturne"}>Nocturne</h1>
        </div>
        <div>
          <h3 className={"firstParagraph"}>delivering at the weirdest hours</h3>
        </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p className={"comingSoonFont"}>
            Coming Soon
          </p>
        </div>
      </div>
    );
  }
}

export default App;
