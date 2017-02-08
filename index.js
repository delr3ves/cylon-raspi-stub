"use strict";

var Adaptor = require("./lib/adaptor"),
  Driver = require("./lib/driver");

module.exports = {
  // Adaptors your module provides, e.g. ["spark"]
  adaptors: [
    'raspi-stub'
  ],

  // Drivers your module provides, e.g. ["led", "button"]
  drivers: [
    'led',
    'button',
    'servo'
  ],

  // Modules intended to be used with yours, e.g. ["cylon-gpio"]
  dependencies: ['cylon-gpio', 'cylon-i2c'],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  }
};
