function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
  this._powerSavingMode = false;
}

Thermostat.prototype.up = function() {
  if(this._powerSavingMode && this.temperature !== this.MAX_TEMPERATURE){
    this.temperature++;
  }
}

Thermostat.prototype.down = function() {
  if(this.temperature > this.MIN_TEMPERATURE){
    this.temperature--;
  }
}

Thermostat.prototype.powerSavingOn = function() {
  this._powerSavingMode = true;
}

Thermostat.prototype.powerSavingOff = function() {
  this._powerSavingMode = false;
}