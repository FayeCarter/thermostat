$(document).ready(function() {
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="
  var apiPart2 = "&appid=eb6ae52da19175e8885ca553f8c4f3e7"
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

  $('#get-weather').submit(function(event) {
    event.preventDefault();
    var currentCity = $('#city').val()
    getWeather(currentCity);
  })

  function getWeather(city) {
    $.get(apiUrl + city + apiPart2, function(data){
      $('#weather').text("Weather is " + data.weather[0].description );
    });
  }

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.getUsage());
  }

});