import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';

class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue" />
        <Link to="/blue">Blue Only</Link>
        <Link to="/blue/indigo">Add Indigo</Link>
      </div>
    );
  }
}

export default Blue;
