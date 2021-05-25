import { getWeather } from "./getWeather"

const apiKey = "e2385a70454648afea5442d6b04eea8a"

const urlWeatherBuilder = (values) => {
  console.log ("from urlWeatherBuilder")
  console.log (values[0], values[1])
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${values[1]}&lon=${values[0]}&exclude=minuetly&appid=${apiKey}&units=metric`
  console.log(url)
  getWeather(url)
}


export { urlWeatherBuilder }