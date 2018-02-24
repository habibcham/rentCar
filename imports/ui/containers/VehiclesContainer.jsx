
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Vehicles } from '../../api/vehicles/vehicles.js';

import VehiclesPage from '../pages/VehiclesPage';

const VehiclesContainer = withTracker(({ }) => {

  const vehiclesHandle = Meteor.subscribe('vehicles.all');

  const loading = !vehiclesHandle.ready();
  const vehicles = loading ? [] : Vehicles.find().fetch();

  console.log(vehicles);
  return {
    loading,
    vehicles,
  };
})(VehiclesPage);

export default VehiclesContainer;
