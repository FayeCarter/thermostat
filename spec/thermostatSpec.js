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
    thermostat.powerSavingOn();
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases the temperature when you use the down function', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('wont go below the minimum temperature of 10 degrees', function() {
    for(let i = 0; i < 11; i++) {
      thermostat.down();
    }

    expect(thermostat.temperature).toEqual(10);
  });

  it('thermostat has a power saving mode', function() {
    expect(thermostat._powerSavingMode).toEqual(false);
  });

  it('can have power saving mode turned on', function() {
    thermostat.powerSavingOn();
    expect(thermostat._powerSavingMode).toEqual(true);
  });

  it('can have power saving mode turned off', function() {
    thermostat.powerSavingOn();
    thermostat.powerSavingOff();
    expect(thermostat._powerSavingMode).toEqual(false);
  });

  it('has a max temperature of 25 when power mode on', function() {
    thermostat.powerSavingOn();

    for(let i = 0; i < 6; i++) {
      thermostat.up();
    }

    expect(thermostat.temperature).toEqual(25);
  });

});
