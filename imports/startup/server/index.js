
import './register-api.js';

import { Vehicles } from '/imports/api/vehicles/vehicles.js';

Meteor.startup(() => {
  console.log(Vehicles.find().fetch());
})
