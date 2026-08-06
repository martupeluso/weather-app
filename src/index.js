import { showWeatherData } from "./dom";

await showWeatherData("buenosaires");

const form = document.querySelector("form");
const locationInput = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  await showWeatherData(location);
});
