import { weatherData, showWeatherData, renderWeatherData } from "./dom";

let currentUnit = "Fahrenheit";

await showWeatherData("buenosaires");

const form = document.querySelector("form");
const locationInput = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  await showWeatherData(location);
});

const unitToggleBtn = document.querySelector(".unit-toggle-btn");

unitToggleBtn.addEventListener("click", (e) => {
  if (e.target.textContent.includes("°C")) {
    e.target.textContent = "Switch to °F";
    currentUnit = "Celsius";
  } else if (e.target.textContent.includes("°F")) {
    e.target.textContent = "Switch to °C";
    currentUnit = "Fahrenheit";
  }

  renderWeatherData(weatherData);
});

export { currentUnit };
