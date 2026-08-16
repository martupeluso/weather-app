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
  condition.classList.add("condition");
  condition.textContent = `${weatherData.condition}`;

  const location = document.createElement("p");
  location.classList.add("location");
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

  const highestLowestContainer = document.createElement("div");
  highestLowestContainer.classList.add("highest-lowest-container");

  const highest = document.createElement("p");
  const lowest = document.createElement("p");

  highestLowestContainer.append(highest, lowest);

  detailedTempContainer.append(feelsLike, highestLowestContainer);

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

  const humidityText = document.createElement("div");
  humidityText.classList.add("info-text");

  const humidityLabel = document.createElement("p");
  humidityLabel.textContent = "Humidity";

  const humidityValue = document.createElement("p");
  humidityValue.textContent = `${weatherData.humidity}%`;

  humidityText.append(humidityLabel, humidityValue);
  humidityContainer.append(humidityIcon, humidityText);

  const chanceOfRainContainer = document.createElement("div");
  chanceOfRainContainer.classList.add("info-row");

  const chanceOfRainIcon = document.createElement("img");
  chanceOfRainIcon.src = chanceOfRainSVG;

  const chanceOfRainText = document.createElement("div");
  chanceOfRainText.classList.add("info-text");

  const chanceOfRainLabel = document.createElement("p");
  chanceOfRainLabel.textContent = "Chance of rain";

  const chanceOfRainValue = document.createElement("p");
  chanceOfRainValue.textContent = `${weatherData.chanceOfRain}%`;

  chanceOfRainText.append(chanceOfRainLabel, chanceOfRainValue);
  chanceOfRainContainer.append(chanceOfRainIcon, chanceOfRainText);

  const windContainer = document.createElement("div");
  windContainer.classList.add("info-row");

  const windIcon = document.createElement("img");
  windIcon.src = windSpeedSVG;

  const windText = document.createElement("div");
  windText.classList.add("info-text");

  const windLabel = document.createElement("p");
  windLabel.textContent = "Wind speed";

  const windValue = document.createElement("p");
  windValue.textContent = `${weatherData.windSpeed} mph`;

  windText.append(windLabel, windValue);
  windContainer.append(windIcon, windText);

  leftColumn.append(humidityContainer, chanceOfRainContainer, windContainer);

  const rightColumn = document.createElement("div");
  rightColumn.classList.add("expanded-info-column");

  const uvContainer = document.createElement("div");
  uvContainer.classList.add("info-row");

  const uvIcon = document.createElement("img");
  uvIcon.src = uvIndexSVG;

  const uvText = document.createElement("div");
  uvText.classList.add("info-text");

  const uvLabel = document.createElement("p");
  uvLabel.textContent = "UV Index";

  const uvValue = document.createElement("p");
  uvValue.textContent = `${weatherData.uvIndex}`;

  uvText.append(uvLabel, uvValue);
  uvContainer.append(uvIcon, uvText);

  const sunriseContainer = document.createElement("div");
  sunriseContainer.classList.add("info-row");

  const sunriseIcon = document.createElement("img");
  sunriseIcon.src = sunriseSVG;

  const sunriseText = document.createElement("div");
  sunriseText.classList.add("info-text");

  const sunriseLabel = document.createElement("p");
  sunriseLabel.textContent = "Sunrise";

  const sunriseValue = document.createElement("p");
  sunriseValue.textContent = `${weatherData.sunrise}`;

  sunriseText.append(sunriseLabel, sunriseValue);
  sunriseContainer.append(sunriseIcon, sunriseText);

  const sunsetContainer = document.createElement("div");
  sunsetContainer.classList.add("info-row");

  const sunsetIcon = document.createElement("img");
  sunsetIcon.src = sunsetSVG;

  const sunsetText = document.createElement("div");
  sunsetText.classList.add("info-text");

  const sunsetLabel = document.createElement("p");
  sunsetLabel.textContent = "Sunset";

  const sunsetValue = document.createElement("p");
  sunsetValue.textContent = `${weatherData.sunset}`;

  sunsetText.append(sunsetLabel, sunsetValue);
  sunsetContainer.append(sunsetIcon, sunsetText);

  rightColumn.append(uvContainer, sunriseContainer, sunsetContainer);

  expandedInfoContainer.append(leftColumn, rightColumn);

  todaysDataContainer.append(basicInfoContainer, expandedInfoContainer);

  const nextFiveDaysDataContainer = document.createElement("div");
  nextFiveDaysDataContainer.classList.add("next-five-days-data-container");

  const nextFiveDaysTitle = document.createElement("h2");
  nextFiveDaysTitle.textContent = "Next 5 days";

  const nextFiveDaysDetailsContainer = document.createElement("div");
  nextFiveDaysDetailsContainer.classList.add(
    "next-five-days-details-container",
  );

  weatherData.forecast.forEach((day) => {
    const dayContainer = document.createElement("div");
    dayContainer.classList.add("day-container");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    const dayConditionIcon = document.createElement("img");

    import(`./assets/icons/${day.icon}.svg`).then((module) => {
      dayConditionIcon.src = module.default;
    });

    dayConditionIcon.width = 40;

    iconContainer.append(dayConditionIcon);

    const dayTitle = document.createElement("p");
    dayTitle.textContent = "Placeholder";

    const dayHighestLowestContainer = document.createElement("div");
    dayHighestLowestContainer.classList.add("day-highest-lowest-container");

    const dayHighest = document.createElement("p");

    const dayLowest = document.createElement("p");

    if (currentUnit === "Fahrenheit") {
      dayHighest.textContent = `${day.highest}°`;
      dayLowest.textContent = `${day.lowest}°`;
    } else {
      dayHighest.textContent = `${convertFahrenheitToCelsius(day.highest)}°`;
      dayLowest.textContent = `${convertFahrenheitToCelsius(day.lowest)}°`;
    }

    dayHighestLowestContainer.append(dayHighest, dayLowest);

    dayContainer.append(iconContainer, dayTitle, dayHighestLowestContainer);
    nextFiveDaysDetailsContainer.append(dayContainer);
  });

  nextFiveDaysDataContainer.append(
    nextFiveDaysTitle,
    nextFiveDaysDetailsContainer,
  );

  weatherDataContainer.append(todaysDataContainer, nextFiveDaysDataContainer);
}

export { weatherData, showWeatherData, renderWeatherData };
