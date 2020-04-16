$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    if(thermostat.getUsage() === 'Low') {
      $('#temperature').css('color', 'green')
    } else if(thermostat.getUsage() === 'Medium') {
      $('#temperature').css('color', 'black')
    } else {
      $('#temperature').css('color', 'red')
    }
  }

});