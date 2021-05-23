
const apiKey = "e2385a70454648afea5442d6b04eea8a"

function urlBuilder (posto){
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${posto}&limit=2&appid=${apiKey}`
  console.log(url)
  
  // openWeather(url)

}

export {urlBuilder}

