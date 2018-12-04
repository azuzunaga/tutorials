import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return (
      <div>
        <h2 className="red" />
        <NavLink exact to="/red">
          Red Only
        </NavLink>
        <NavLink to="/red/orange">Orange</NavLink>
        <NavLink to="/red/yellow">Yellow</NavLink>
      </div>
    );
  }
}

export default Red;
