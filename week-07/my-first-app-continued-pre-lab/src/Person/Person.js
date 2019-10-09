import React, { Component } from 'react';
import './Person.css';

const person = props => {
  const { name, location, children } = props;

  return (
    <div className="Person">
      <h1>Name: {name}</h1>
      <h3 onClick={() => props.click('Sara')}>Location: {location}</h3>
      <input type="text" onChange={e => props.changed(e)} value={name} />
    </div>
  );
};

export default person;
