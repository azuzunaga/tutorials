import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';

class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue" />
        <NavLink exact to="/blue">
          Blue Only
        </NavLink>
        <NavLink to="/blue/indigo">Add Indigo</NavLink>
      </div>
    );
  }
}

export default Blue;
