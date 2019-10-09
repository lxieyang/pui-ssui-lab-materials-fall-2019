import React from 'react';
import './TodoItem.css';

const todoItem = props => {
  return (
    <li onClick={() => props.switchCheckedStatus(props.idx)}>
      {props.todoItem.content}
      {props.todoItem.finished ? <div className="DoneIcon">Done!</div> : null}
      <div className="Filler"></div>
      <div className="DeleteIcon" onClick={e => props.remove(e, props.idx)}>
        x
      </div>
    </li>
  );
};

export default todoItem;
