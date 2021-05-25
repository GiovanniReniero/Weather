
const display = document.querySelector("#display")

function dateCatcher () {
  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  let dateTime = cDate + ' ' + cTime;
  return dateTime
}


const presentWeatherData =(weatherData) => {
  console.log(weatherData)
  display.innerHTML = ""
  let temp = document.createElement("h4")
  let feelsLike = document.createElement("h4")
  let weather = document.createElement("h4")
  let currentTime = document.createElement("h4")
  temp.innerText= `Temperature: ${weatherData.temp}`
  feelsLike.innerText= `Feels like: ${weatherData.feels_like}`
  weather.innerText= `Weather: ${weatherData.weather[0].description}`
  let dateStuff = dateCatcher()
  currentTime.innerText = `Time and date: ${dateStuff}`
  // let icon = weatherData.weather[0].icon
  // console.log(icon)
  display.appendChild(currentTime)
  display.appendChild(temp)
  display.appendChild(feelsLike)
  display.appendChild(weather)
}


export{ presentWeatherData }
