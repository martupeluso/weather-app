import humiditySVG from "./assets/icons/humidity.svg";
import chanceOfRainSVG from "./assets/icons/chance-of-rain.svg";
import windSpeedSVG from "./assets/icons/wind.svg";
import uvIndexSVG from "./assets/icons/uv-index.svg";
import sunriseSVG from "./assets/icons/sunrise.svg";
import sunsetSVG from "./assets/icons/sunset.svg";

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

  const todaysDataContainer = document.createElement("div");
  todaysDataContainer.classList.add("todays-data-container");

  const basicInfoContainer = document.createElement("div");
  basicInfoContainer.classList.add("basic-info-container");

  const condition = document.createElement("p");
  condition.textContent = `${weatherData.condition}`;

  const location = document.createElement("p");
  location.textContent = `${weatherData.location}`;

  const iconAndTempContainer = document.createElement("div");
  iconAndTempContainer.classList.add("icon-and-temp-container");

  const icon = document.createElement("img");
  import(`./assets/icons/${weatherData.icon}.svg`).then((module) => {
    icon.src = module.default;
  });

  const temperature = document.createElement("p");

  iconAndTempContainer.append(icon, temperature);

  const detailedTempContainer = document.createElement("div");
  detailedTempContainer.classList.add("detailed-temp-container");

  const feelsLike = document.createElement("p");
  const highest = document.createElement("p");
  const lowest = document.createElement("p");

  detailedTempContainer.append(feelsLike, highest, lowest);

  if (currentUnit === "Fahrenheit") {
    temperature.textContent = `${weatherData.temperature}°`;
    feelsLike.textContent = `Feels like: ${weatherData.feelsLike}°`;
    highest.textContent = `H: ${weatherData.highest}°`;
    lowest.textContent = `L: ${weatherData.lowest}°`;
  } else {
    temperature.textContent = `${convertFahrenheitToCelsius(weatherData.temperature)}°`;
    feelsLike.textContent = `Feels like: ${convertFahrenheitToCelsius(weatherData.feelsLike)}°`;
    highest.textContent = `H: ${convertFahrenheitToCelsius(weatherData.highest)}°`;
    lowest.textContent = `L: ${convertFahrenheitToCelsius(weatherData.lowest)}°`;
  }

  basicInfoContainer.append(
    condition,
    location,
    iconAndTempContainer,
    detailedTempContainer,
  );

  const expandedInfoContainer = document.createElement("div");
  expandedInfoContainer.classList.add("expanded-info-container");

  const leftColumn = document.createElement("div");
  leftColumn.classList.add("expanded-info-column");

  const humidityContainer = document.createElement("div");
  humidityContainer.classList.add("info-row");

  const humidityIcon = document.createElement("img");
  humidityIcon.src = humiditySVG;

  const humidityLabel = document.createElement("p");
  humidityLabel.textContent = "Humidity";

  const humidityValue = document.createElement("p");
  humidityValue.textContent = `${weatherData.humidity}%`;

  humidityContainer.append(humidityIcon, humidityLabel, humidityValue);

  const chanceOfRainContainer = document.createElement("div");
  chanceOfRainContainer.classList.add("info-row");

  const chanceOfRainIcon = document.createElement("img");
  chanceOfRainIcon.src = chanceOfRainSVG;

  const chanceOfRainLabel = document.createElement("p");
  chanceOfRainLabel.textContent = "Chance of rain";

  const chanceOfRainValue = document.createElement("p");
  chanceOfRainValue.textContent = `${weatherData.chanceOfRain}%`;

  chanceOfRainContainer.append(
    chanceOfRainIcon,
    chanceOfRainLabel,
    chanceOfRainValue,
  );

  const windContainer = document.createElement("div");
  windContainer.classList.add("info-row");

  const windIcon = document.createElement("img");
  windIcon.src = windSpeedSVG;

  const windLabel = document.createElement("p");
  windLabel.textContent = "Wind speed";

  const windValue = document.createElement("p");
  windValue.textContent = `${weatherData.windSpeed} mph`;

  windContainer.append(windIcon, windLabel, windValue);

  leftColumn.append(humidityContainer, chanceOfRainContainer, windContainer);

  const rightColumn = document.createElement("div");
  rightColumn.classList.add("expanded-info-column");

  const uvContainer = document.createElement("div");
  uvContainer.classList.add("info-row");

  const uvIcon = document.createElement("img");
  uvIcon.src = uvIndexSVG;

  const uvLabel = document.createElement("p");
  uvLabel.textContent = "UV Index";

  const uvValue = document.createElement("p");
  uvValue.textContent = `${weatherData.uvIndex}`;

  uvContainer.append(uvIcon, uvLabel, uvValue);

  const sunriseContainer = document.createElement("div");
  sunriseContainer.classList.add("info-row");

  const sunriseIcon = document.createElement("img");
  sunriseIcon.src = sunriseSVG;

  const sunriseLabel = document.createElement("p");
  sunriseLabel.textContent = "Sunrise";

  const sunriseValue = document.createElement("p");
  sunriseValue.textContent = `${weatherData.sunrise}`;

  sunriseContainer.append(sunriseIcon, sunriseLabel, sunriseValue);

  const sunsetContainer = document.createElement("div");
  sunsetContainer.classList.add("info-row");

  const sunsetIcon = document.createElement("img");
  sunsetIcon.src = sunsetSVG;

  const sunsetLabel = document.createElement("p");
  sunsetLabel.textContent = "Sunset";

  const sunsetValue = document.createElement("p");
  sunsetValue.textContent = `${weatherData.sunset}`;

  sunsetContainer.append(sunsetIcon, sunsetLabel, sunsetValue);

  rightColumn.append(uvContainer, sunriseContainer, sunsetContainer);

  expandedInfoContainer.append(leftColumn, rightColumn);

  todaysDataContainer.append(basicInfoContainer, expandedInfoContainer);

  weatherDataContainer.append(todaysDataContainer);
}

export { weatherData, showWeatherData, renderWeatherData };
