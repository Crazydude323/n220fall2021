import logo from './logo.svg';
import './App.css';
import './components/character.js'
import './components/textBox.js'
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Character name="Phoenix"/>
        <TextBox text="Hello there." name="Phoenix"/>
      </header>
    </div>
  );
}

export default App;
