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
    this.setState({
      newTodoContent: event.target.value,
    });
  };

  addItemToList = () => {
    if (this.state.newTodoContent === '') {
      return;
    }
    let newTodoList = [...this.state.todoList];
    newTodoList.push({
      content: this.state.newTodoContent,
      finished: false,
    });

    this.setState({
      todoList: newTodoList,
      newTodoContent: '',
    });
  };

  removeItemFromList = (event, idx) => {
    event.stopPropagation();
    let newTodoList = [...this.state.todoList];
    newTodoList.splice(idx, 1);
    this.setState({
      todoList: newTodoList,
    });
  };

  switchItemCheckedStatus = idx => {
    let newTodoList = [...this.state.todoList];
    newTodoList[idx].finished = !newTodoList[idx].finished;
    this.setState({
      todoList: newTodoList,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Simple To Do</h2>
          <input
            type="text"
            value={this.state.newTodoContent}
            onChange={e => this.todoContentInputHandler(e)}
            placeholder="new to do..."
          />
          <span onClick={() => this.addItemToList()} className="AddNewToDoButton">
            Add
          </span>
        </div>

        <ul>
          {this.state.todoList.map((todoItem, idx) => {
            return (
              <TodoItem
                key={idx}
                idx={idx}
                todoItem={todoItem}
                remove={this.removeItemFromList}
                switchCheckedStatus={this.switchItemCheckedStatus}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
