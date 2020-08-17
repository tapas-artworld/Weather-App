import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error_404 from "../404/Error";
import Home from '../pages/home';

function Routes() {
  return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route component={Error_404} />
        </Switch>
      </Router>
  );
}

export default Routes;
