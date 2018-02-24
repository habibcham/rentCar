
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Vehicles } from './vehicles.js';

export const insert = new ValidatedMethod({
  name: 'Vehicles.insert',
  validate: new SimpleSchema({
    data : { type: Object, blackbox: true }
  }).validator(),
  run({ data }) {

    return Vehicles.insert(data);
  },
});

export const update = new ValidatedMethod({
  name: 'Vehicles.update',
  validate: new SimpleSchema({
    VehiclesId: { type: String },
    data: { type: Object, blackbox: true },
  }).validator(),
  run({ VehiclesId, data }) {
    const deeping = Vehicles.findOne(VehiclesId);

    if(! this.userId) {
      throw new Meteor.Error('not-logged-in', 'Must be logged in to perform this operation');
    }

    return Vehicles.update(VehiclesId, { $set: data });
  },
});

export const remove = new ValidatedMethod({
  name: 'Vehicles.remove',
  validate: new SimpleSchema({
    VehiclesId: { type: String },
  }).validator(),  run({ VehiclesId }) {
    const deeping = Vehicles.findOne(VehiclesId);

    if(! this.userId) {
      throw new Meteor.Error('not-logged-in', 'Must be logged in to perform this operation');
    }

    return Vehicles.remove(VehiclesId);
  },
});

// Get list of all method names on Vehicles
const Vehicles_METHODS = _.pluck([
  insert,
  update,
  remove,
], 'name');

if (Meteor.isServer) {
  // Only allow 5 list operations per connection per second
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(Vehicles_METHODS, name);
    },

    // Rate limit per connection ID
    connectionId() { return true; },
  }, 5, 1000);
}
