

var fetchButton = document.getElementById("fetch-button")
var city = document.getElementById("city")


function getApi() {
  var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city.value + "&limit=1&appid=58bb8c46105c2bf2c6009817e319a3bc"

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
    // set variable for city name to be displayed
    var cityName = data[0].name
    // set variables for latitude and longitude to use for second api call
    var lat = data[0].lat
    var lon = data[0].lon
   
    console.log(lat)
    console.log(lon)

    getWeather(lat, lon)
    getCity(cityName)
  })
}

function getWeather(lat, lon) {
    var requestWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=58bb8c46105c2bf2c6009817e319a3bc"

    fetch(requestWeather)
      .then(function(weatherInfo) {
        return weatherInfo.json();
      })
      .then(function(weatherData) {
        console.log(weatherData)
      
      weather = weatherData.current
      
      var currentTemp = weather.temp
      var wind = weather.wind_speed
      var humidity = weather.humidity
      var uvIndex = weather.uvi

      console.log(currentTemp)
      console.log(wind)
      console.log(humidity)
      console.log(uvIndex)

      // getTemperature(currentTemp)
      // getWindSpeed(wind)
      // getHumidity(humidity)
      // getUVIndex(uvIndex)
      })

      
      
  }

function getCity (cityName) {
  //console.log(cityName)
  var content = $('#city-data');
  var city = $('<h2>');
  city.text(cityName)
  content.append(city)
    
}

function getTemp (currentTemp) {
  var content = $('#city-data');
  var city = $('<h2>');
  city.text(currentTemp)

  content.append(city)

}




var today = moment().format("MM-DD-YYYY");
$("#currentDay").text(today);

fetchButton.addEventListener("click", getApi)