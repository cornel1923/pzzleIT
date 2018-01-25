import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import HomePage from './components/Homepage';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}>
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
);

export default Routes;
