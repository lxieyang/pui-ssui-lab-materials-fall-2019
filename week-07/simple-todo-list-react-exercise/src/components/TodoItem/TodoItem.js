import React from 'react';
import './TodoItem.css';

const todoItem = props => {
  return (
    <li>
      {props.todoItem.content}
      {props.todoItem.finished ? <div className="DoneIcon">Done!</div> : null}
      <div className="Filler"></div>
      <div className="DeleteIcon">x</div>
    </li>
  );
};

export default todoItem;
