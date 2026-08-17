async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=NAPVG3FN235GKC7EFQNY6M7SK`,
  );

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Couldn't connect to the API. Please try again.");
  }
}

async function processWeatherData(location) {
  try {
    const weather = await getWeatherData(location);

    const current = weather.currentConditions;
    const today = weather.days[0];

    return {
      location: weather.resolvedAddress,

      condition: current.conditions,
      temperature: current.temp,
      icon: current.icon,
      feelsLike: current.feelslike,

      humidity: current.humidity,
      windSpeed: current.windspeed,

      highest: today.tempmax,
      lowest: today.tempmin,
      chanceOfRain: today.precipprob,
      uvIndex: today.uvindex,
      sunrise: today.sunrise,
      sunset: today.sunset,

      forecast: weather.days.slice(1, 6).map((day) => {
        return {
          icon: day.icon,
          date: day.datetime,
          highest: day.tempmax,
          lowest: day.tempmin,
        };
      }),
    };
  } catch (error) {
    console.error(error);
  }
}

export { processWeatherData };
