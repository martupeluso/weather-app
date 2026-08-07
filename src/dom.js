import { processWeatherData } from "./api";
import { currentUnit } from "./index";
import { convertFahrenheitToCelsius } from "./utils";

const weatherDataContainer = document.querySelector(".weather-data-container");

let weatherData = null;

async function showWeatherData(location) {
  weatherData = await processWeatherData(location);

  renderWeatherData(weatherData);
}

function renderWeatherData(weatherData) {
  weatherDataContainer.textContent = "";

  const location = document.createElement("p");
  location.textContent = `Location: ${weatherData.location}`;

  const condition = document.createElement("p");
  condition.textContent = `Condition: ${weatherData.condition}`;

  const temperature = document.createElement("p");

  if (currentUnit === "Fahrenheit") {
    temperature.textContent = `Temperature: ${weatherData.temperature}`;
  } else {
    temperature.textContent = `Temperature: ${convertFahrenheitToCelsius(weatherData.temperature)}`;
  }

  weatherDataContainer.append(location, condition, temperature);
}

export { weatherData, showWeatherData, renderWeatherData };
