import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Previewer from './Previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Markdown Previewer built with React</h1>
        </header>
        <Previewer />
      </div>
    );
  }
}

export default App;
