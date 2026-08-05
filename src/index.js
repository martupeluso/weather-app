import { processWeatherData } from "./api";

console.log(await processWeatherData("buenosaires"));

const form = document.querySelector("form");
const locationInput = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  console.log(await processWeatherData(location));
});
