
import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from '../../ui/pages/Home';
import VehiclesContainer from '../../ui/containers/VehiclesContainer';

export const renderRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/vehicles" component={ VehiclesContainer } />
    </Switch>
  </BrowserRouter>
)
