
import { Meteor } from 'meteor/meteor';

import { Vehicles } from '../vehicles.js';

Meteor.publish('vehicles.all', function allVehicles() {
  return Vehicles.find();
});
