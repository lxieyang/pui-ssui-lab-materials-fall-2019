import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Michael', location: 'Pittsburgh' },
      { name: 'Elon', location: 'LA' },
      { name: 'Jason', location: 'Pittsburgh' },
    ],
  };

  switchNameHandler = (newName = 'Michelle') => {
    // this.state.persons[0].name = 'Michelle';   // wrong!!!
    this.setState({
      persons: [
        { name: newName, location: 'DC' },
        { name: 'Elon', location: 'LA' },
        { name: 'Jason', location: 'New York City' },
      ],
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Michelle', location: 'Pittsburgh' },
        { name: event.target.value, location: 'LA' },
        { name: 'Jason', location: 'New York City' },
      ],
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hello, this is my first React App.</h1>
        <button style={buttonStyle} onClick={() => this.switchNameHandler()}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} location={this.state.persons[0].location} />
        <Person
          name={this.state.persons[1].name}
          location={this.state.persons[1].location}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}
        />
        <Person name={this.state.persons[2].name} location={this.state.persons[2].location} />
      </div>
    );
  }
}

export default App;
