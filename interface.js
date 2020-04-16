$(document).ready(function() {
  var api_url = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=eb6ae52da19175e8885ca553f8c4f3e7"
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

  $('#get-weather').click(function() {
    getWeather();
  })

  function getWeather() {
    $.get(api_url, function(data){
      $('#weather').text("Weather is " + data.weather[0].description );
    });
  }

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.getUsage());
  }

});