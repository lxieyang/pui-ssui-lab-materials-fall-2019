import React, { Component } from 'react';

class Person extends Component {
  render() {
    const { name, location, children } = this.props;

    return (
      <div>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <p>{children}</p>
      </div>
    );
  }
}

// const person = ({ name, location, children }) => {
//   // const { name, location, children } = props;

//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h3>Location: {location}</h3>
//       <p>{children}</p>
//     </div>
//   );
// };

export default Person;
