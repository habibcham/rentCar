
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class VehiclesCollection extends Mongo.Collection {
  insert(vehicle, callback) {
    return super.insert(vehicle, callback);
  }
  update(vehicle, callback) {
    return super.update(vehicle, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback);
  }
}

export const Vehicles = new VehiclesCollection('Vehicles');

Vehicles.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Vehicles.schema = new SimpleSchema({

  make: {
    type: String
  },

  model: {
    type: String
  },

  pricePerDay: {
    min: 0,
    type: Number,
    decimal: true
  },

  deposit: {
    min: 0,
    type: Number,
    decimal: true,
  },

  minRentalDay: {
    min: 0,
    type: Number
  },

  maxRentalDay: {
    min: 0,
    type: Number,
    // autoValue() {
    //   const minValue = this.field('minRentalDay').value();
    //   const maxValue = this.field('maxRentalDay').value();
    //   if(minValue > maxValue) {
    //     throw new Meteor.Error('Fatal Error', 'Max cannot be great than min');
    //   }
    //   return maxValue;
    // }
  },

  available: {
    type: Boolean,
    defaultValue: true,
  },

  location: {
    type: String,
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();
      }
    }
  },

  updatedAt: {
    type: Date,
    autoValue: function() {
      if(this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Vehicles.attachSchema(Vehicles.schema);

Vehicles.helpers({

});
