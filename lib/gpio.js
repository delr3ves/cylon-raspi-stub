"use strict";

require('colors');

var GPIO = function GPIO() {
}

GPIO.prototype.pins = new Array(40).fill(0);

GPIO.prototype.write = function(pinNumber, value) {
  this.pins[normalizePinNumber(pinNumber)] = value;
  return this;
}

GPIO.prototype.read = function(pinNumber) {
  return this.pins[normalizePinNumber(pinNumber)];
}
GPIO.prototype.high = function(pinNumber) {
  return this.write(pinNumber, 1);
}

GPIO.prototype.low = function(pinNumber) {
  return this.write(pinNumber, 0);
}

GPIO.prototype.print = function() {
  var matrix =  {
    top: {
      header: [],
      content: []
    },
    bottom:  {
        header: [],
        content: []
    }
  };
  var pinColor = function(pin) {
    if (pin === 0) {
      return pin.toString().red;
    } else {
      return pin.toString().green;
    }
  };

  var nomralizePinNumber = function(pinNumber) {
    var number = pinNumber + 1;
    if (number < 10) {
      number = '0' + number;
    }
    return number.toString().bgMagenta;
  }

  this.pins.forEach(function(pin, pinNumber) {
    if (pinNumber % 2 === 0) {
      var content = matrix.bottom;
    } else {
      var content = matrix.top;
    }
    content.header.push(nomralizePinNumber(pinNumber));
    content.content.push(pinColor(pin));
  })
  return "\n" + matrix.top.header.join("|".blue) + "\n" +
  matrix.top.content.join(" |".blue) + "\n" +
  matrix.bottom.content.join(" |".blue) + "\n" +
  matrix.bottom.header.join("|".blue) + "\n";
}

GPIO.getInstance = function(){
  if(global.raspiStubGpioInstance === undefined)
    global.raspiStubGpioInstance = new GPIO();
  return global.raspiStubGpioInstance;
}

function normalizePinNumber(pinNumber) {
  return pinNumber - 1;
}

module.exports = GPIO.getInstance();
