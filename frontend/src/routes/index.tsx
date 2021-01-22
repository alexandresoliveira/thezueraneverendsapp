import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import CreateUsers from '../pages/CreateUsers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/users/new" exact component={CreateUsers} />
  </Switch>
);

export default Routes;
