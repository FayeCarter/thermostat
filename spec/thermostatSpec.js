'use strict';

describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it('temperature starts at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('increases the temperature when you use the up function', function() {
    thermostat.powerSavingOn();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('decreases the temperature when you use the down function', function() {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('wont go below the minimum temperature of 10 degrees', function() {
    for(let i = 0; i < 11; i++) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('can have power saving mode turned on', function() {
    thermostat.powerSavingOn();
    expect(thermostat.getPowerSaving()).toEqual(true);
  });

  it('can have power saving mode turned off', function() {
    thermostat.powerSavingOn();
    thermostat.powerSavingOff();
    expect(thermostat.getPowerSaving()).toEqual(false);
  });

  it('has a max temperature of 25 when power mode on', function() {
    thermostat.powerSavingOn();
    for(let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('has a max temperature of 32 when power mode off', function() {
    thermostat.powerSavingOff();
    for(let i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('powerSavingMode is on as standard', function() {
    expect(thermostat.getPowerSaving()).toEqual(true);
  });

  it('temperature can be reset to 20', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("can request thermostat's energy mode", function() {
    expect(thermostat.getUsage()).toEqual('Medium');
  });

  it("Energy mode is High if temp > 25", function() {
    for(let i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.getUsage()).toEqual('High');
  });

  it("Energy mode is Low if temp > 18", function() {
    for(let i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.getUsage()).toEqual('Low');
  });


});
