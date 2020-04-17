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
    $('#power-saving-status').text('power saving on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#power-saving-status').text('power saving off')
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
    $('#mercury').css('height', `${mercury()}%`)
    $('#right').attr('class', thermostat.getUsage());
  }

  function mercury() {
    return thermostat.getTemperature() * 2.63 -8.7
  }

});

/*

32/32*100 = 100

10/32*100 =  31.25

30/30*100*3/4 = 75

10/32*100 =  31.25




32 =~ 75 (2.34)
10 =~ 17 (1.7)

*/
