import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Michael', location: 'Pittsburgh' },
      { name: 'Elon', location: 'LA' },
      { name: 'Jason', location: 'Pittsburgh' },
    ],
    showPersons: false,
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

  togglePersonsHandler = () => {
    let showPersons = !this.state.showPersons;
    this.setState({ showPersons: showPersons });
  };

  deletePersonsHandler = personIdx => {
    let persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({
      persons: persons,
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person key={idx} name={person.name} location={person.location} delete={this.deletePersonsHandler} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, this is my first React App.</h1>
        <button style={buttonStyle} onClick={() => this.switchNameHandler()}>
          Switch Name
        </button>

        <button style={buttonStyle} onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
