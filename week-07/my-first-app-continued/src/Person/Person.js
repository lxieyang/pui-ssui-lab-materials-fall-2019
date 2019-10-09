import React from 'react';
import './Person.css';

const person = props => {
  const { name, location, i } = props;

  return (
    <div className="Person">
      <h3>{i}</h3>
      <h1 className="HeaderName" onClick={() => props.deleteMe(i)}>
        Name: {name}
      </h1>
      <h3 onClick={() => props.switchNameToMichelle()}>Location: {location}</h3>
      <input type="text" value={name} onChange={e => props.handleNameChange(e)} />
    </div>
  );
};

export default person;
