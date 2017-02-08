"use strict";

var gpio = lib("gpio");

describe("GPIO", function() {
  it("pins exists", function() {
    expect(gpio.pins).to.be.an.instanceOf(Array);
  });

  it("there are 40 pins intialized", function() {
    expect(gpio.pins.length).to.be.equal(40);
  });

  it("pins are intialized to 0", function() {
    gpio.pins.forEach(function(pin) {
      expect(pin).to.be.equal(0);
    });
  });

  it("write pin should store the value", function() {
    var pinNumber = 15;
    var value = 1;
    gpio.write(pinNumber, value);
    expect(gpio.read(pinNumber)).to.be.equal(value);
  });

  it("GPIO should be a singleton", function() {
    var pinNumber = 1;
    var value = 2;
    gpio.write(pinNumber, value);
    var anotherGpio = lib('gpio');
    expect(anotherGpio.read(pinNumber)).to.be.equal(value);
  });

  it("high shoul write a 1", function() {
    var pinNumber = 1;
    gpio.high(pinNumber);
    expect(gpio.read(pinNumber)).to.be.equal(1);
  });

  it("low should write a 0", function() {
    var pinNumber = 1;
    gpio.low(pinNumber);
    expect(gpio.read(pinNumber)).to.be.equal(0);
  });
});
