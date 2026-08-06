import { processWeatherData } from "./api";

const weatherDataContainer = document.querySelector(".weather-data-container");

async function showWeatherData(location) {
  const weatherData = await processWeatherData(location);

  for (let info in weatherData) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${info}: ${weatherData[info]}`;
    weatherDataContainer.append(paragraph);
  }
}

export { showWeatherData };
