
import React from 'react';
import { Meteor } from 'meteor/meteor';

import ReactDOM from 'react-dom';
import { renderRoutes } from '/imports/startup/client/routes.jsx';

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
})
