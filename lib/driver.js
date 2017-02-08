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

// DIRECT PIN OPERATIONS
Driver.prototype.digitalWrite = function(value, callback) {
  GPIO.write(this.pin, value);
  Cylon.Logger.log(`Writed value ${value} into pin ${this.pin}`);
  Cylon.Logger.log(GPIO.print());
  callback(null, value);
}

Driver.prototype.analogWrite = function(value, callback) {
  this.digitalWrite(value, callback);
}

Driver.prototype.digitalRead = function(callback) {
  var value = GPIO.read(this.pin);
  Cylon.Logger.log(`Read value ${value} from pin ${this.pin}`);
  Cylon.Logger.log(GPIO.print())
  callback(null, value);
}

Driver.prototype.analogRead = function(callback) {
  this.digitalRead(callback);
}

Driver.prototype.servoWrite = function(angle, callback) {
  GPIO.write(this.pin, angle);
  Cylon.Logger.log(`Moved servo with angle ${angle}`)
  Cylon.Logger.log(GPIO.print())
  callback(null, angle);
}

Driver.prototype.pwmWrite = function(value, callback) {
  GPIO.write(this.pin, value);
  Cylon.Logger.log(`Move servo with angle ${angle}`)
  Cylon.Logger.log(GPIO.print())
  callback(null, value);
}


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
