import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import Blue from './blue';
import Green from './green';
import Indigo from './indigo';
import Orange from './orange';
import Red from './red';
import Violet from './violet';
import Yellow from './yellow';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        <NavLink to="/red">Red</NavLink>
        <NavLink to="/green">Green</NavLink>
        <NavLink to="/blue">Blue</NavLink>
        <NavLink to="/violet">Violet</NavLink>

        <div id="rainbow">
          <Route path="/red" component={Red} />
          <Route path="/red/orange" component={Orange} />
          <Route path="/red/yellow" component={Yellow} />
          <Route path="/green" component={Green} />
          <Route path="/blue" component={Blue} />
          <Route path="/blue/indigo" component={Indigo} />
          <Route path="/violet" component={Violet} />
        </div>
      </div>
    );
  }
}

export default Rainbow;
