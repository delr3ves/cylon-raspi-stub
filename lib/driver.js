"use strict";

var Cylon = require("cylon"),
 GPIO = require("./gpio");

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  // Include a list of commands that will be made available to external APIs.
  this.commands = {
    // This is how you register a command function for the API;
    // the command should be added to the prototype, see below.
    hello: this.hello
  };
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

//LED OPERATIONS

Driver.prototype.turnOff = function () {
  GPIO.high(this.pin);
  Cylon.Logger.log(`Pin ${this.pin} just turned off`)
  Cylon.Logger.log(GPIO.print())
}

Driver.prototype.turnOn = function () {
  GPIO.low(this.pin);
  Cylon.Logger.log(`Pin ${this.pin} just turned on`)
  Cylon.Logger.log(GPIO.print())
}

Driver.prototype.start = function(callback) {
  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

Driver.prototype.hello = function() {
  Cylon.Logger.log("Hello World!");
};
