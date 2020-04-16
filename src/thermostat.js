function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
  this._powerSavingMode = true;
}

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if((this._powerSavingMode  === true && this._temperature < 25) || (!this._powerSavingMode && this._temperature < 32)){
    this._temperature++;
  }
}

Thermostat.prototype.down = function() {
  if(this._temperature > this.MIN_TEMPERATURE){
    this._temperature--;
  }
}

Thermostat.prototype.powerSavingOn = function() {
  this._powerSavingMode = true;
  if( this._temperature > 26) {
    this._temperature = 25;
  } 
}

Thermostat.prototype.powerSavingOff = function() {
  this._powerSavingMode = false;
}

Thermostat.prototype.getPowerSaving = function() {
  return this._powerSavingMode;
}

Thermostat.prototype.reset = function() {
  this._temperature = 20;
}

Thermostat.prototype.getUsage = function() {
  if(this._temperature < 18 ) {
    return "Low"
  } else if(this._temperature < 25) {
    return "Medium"
  }
  return "High"
}