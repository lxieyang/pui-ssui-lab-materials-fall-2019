import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Jason Hong', location: 'Pittsburgh' },
      { name: 'Michael', location: 'Pittsburgh' },
      { name: 'Elon', location: 'DC' },
      { name: 'Jason Hong', location: 'Pittsburgh' },
      { name: 'Michael', location: 'Pittsburgh' },
      { name: 'Elon', location: 'DC' },
    ],
    otherState: 'other stuff',
    showPersons: true,
  };

  switchNameHandler = () => {
    // this.state.persons[0].name = 'Michelle'; // this is wrong!
    // if (this.state.persons[0].name === 'Jason') {
    this.setState({
      persons: [
        { name: 'Michelle', location: 'Pittsburgh' },
        { name: 'Michael', location: 'Pittsburgh' },
        { name: 'Elon', location: 'DC' },
      ],
    });
    // }
  };

  nameChangedHandler = event => {
    // console.log(event.target.value);
    this.setState({
      persons: [
        { name: 'Michelle', location: 'Pittsburgh' },
        { name: event.target.value, location: 'Pittsburgh' },
        { name: 'Elon', location: 'DC' },
      ],
    });
  };

  toggleNameDisplayClickedHandler = () => {
    let newShowPersons = this.state.showPersons;
    console.log(newShowPersons);
    this.setState({
      showPersons: !newShowPersons,
    });
  };

  deletePersonClickedHandler = idx => {
    console.log('should delete', idx);
    let newPersons = [...this.state.persons];
    newPersons.splice(idx, 1);
    this.setState({
      persons: newPersons,
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'blue',
      color: '#fff',
      fontSize: '20px',
      // margin: '10px',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                key={idx}
                i={idx}
                name={person.name}
                location={person.location}
                deleteMe={this.deletePersonClickedHandler}
              />
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
        <button style={buttonStyle} onClick={() => this.toggleNameDisplayClickedHandler()}>
          Toggle Persons Display
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
