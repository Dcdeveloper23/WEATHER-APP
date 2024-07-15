/*const API =
"https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ac07c0b44658a1e04d3f81605c45f222";
const APIkey = "ac07c0b44658a1e04d3f81605c45f222";
async function Checkweather() {
    let ans=await*/

const API = `https://api.weatherapi.com/v1/current.json?key=c4b469446da64a62a7455412241903&q=London&aqi=yes`;
const APIKEY = "c4b469446da64a62a7455412241903";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("city-name");
const countryName = document.getElementById("countryName");
const localTime = document.getElementById("loc-time");
const temp = document.getElementById("temp");
const sup = document.getElementById("sup");

async function getData(KEY, cityName) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

searchBtn.addEventListener("click", async () => {
  const input = cityInput.value;
  document.getElementById("outputCard").style.visibility = "visible";
  const result = await getData(APIKEY, input);
  cityName.innerText = ` ${result.location.name}, ${result.location.region}`;
  countryName.innerText = `${result.location.country}`;
  temp.innerText = `${result.current.temp_c}`;
  sup.innerText = "°C";
  localTime.innerText = `${result.location.localtime}`;
});
