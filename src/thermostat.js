function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
}

Thermostat.prototype.up = function() {
  this.temperature++;
}

Thermostat.prototype.down = function() {
  if(this.temperature > this.MIN_TEMPERATURE){
    this.temperature--;
  }
}
