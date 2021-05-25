import axios from 'axios'
import { presentWeatherData } from "./presentWeatherData"


const getWeather = (url) => {
  axios.get(url)
  .then(({data})=>{
    let weatherData = data.current
    presentWeatherData(weatherData)
  })
  .catch((err) => {
    console.log("ERROR!", err)
  })
}

export { getWeather }
