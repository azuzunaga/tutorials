import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return (
      <div>
        <h2 className="red" />
        <Link to="/red">Red Only</Link>
        <Link to="/red/orange">Orange</Link>
        <Link to="/red/yellow">Yellow</Link>
      </div>
    );
  }
}

export default Red;
