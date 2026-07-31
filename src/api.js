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
