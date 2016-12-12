export default {
  getWeather: (city, cb) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=65335b960c1bdddd90043ed649672fdd&units=metric')
      .then(response => response.json())
      .then(json => cb(json));
  }
}