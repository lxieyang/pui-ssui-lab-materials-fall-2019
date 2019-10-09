import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, this is my first React App.</h1>
        <Person name="Jason" location="Pittsburgh" />
        <Person name="Michael" location="Pittsburgh" />
        <Person name="Elon" location="LA" />
        <Person name="Barack" location="DC">
          He was the president.
        </Person>
      </div>
    );
  }
}

export default App;
