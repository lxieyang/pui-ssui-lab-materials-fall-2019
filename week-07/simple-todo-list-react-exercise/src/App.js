import React, { Component } from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import './App.css';

class App extends Component {
  state = {
    todoList: [
      {
        content: 'Meet with Brad',
        finished: false,
      },
      {
        content: 'Go to Costco',
        finished: true,
      },
      {
        content: 'Hit the gym',
        finished: true,
      },
      {
        content: 'Remember to buy milk',
        finished: false,
      },
      {
        content: 'Finish Homework 6',
        finished: false,
      },
    ],
    newTodoContent: '',
  };

  todoContentInputHandler = event => {
    // Todo: handle input
  };

  addItemToList = () => {
    // Todo: add the newTodoContent in the state to the todoList in the state
  };

  switchItemCheckedStatus = idx => {
    // Todo: flip the 'finished' status of the todoItem at idx in the todoList
  };

  removeItemFromList = (event, idx) => {
    // Todo: remove the todoItem at idx from the todoList in the state
    // Hint: think about the event bubbling mechanisms we talked about earlier
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Simple To Do</h2>
          <input
            type="text"
            // Todo: add two-way binding
            placeholder="new to do..."
          />
          <button onClick={() => this.addItemToList()} className="AddNewToDoButton">
            Add
          </button>
        </div>

        <ul>
          {this.state.todoList.map((todoItem, idx) => {
            return <TodoItem key={idx} idx={idx} todoItem={todoItem} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
