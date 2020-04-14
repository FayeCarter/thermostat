'use strict';

describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it('temperature starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature when you use the up function', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases the temperature when you use the down function', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

});
