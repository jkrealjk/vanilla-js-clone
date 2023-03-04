const API_KEY = "9ffc6ff717df80d66182ddd37421fbb4";

function geoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    });
}
function geoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
