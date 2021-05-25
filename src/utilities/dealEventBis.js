import { urlWeatherBuilder } from "./urlWeatherBuilder"


const dealEventBis = (event) => {
  event.preventDefault()
  console.log("Kapao!")
  let dinko =  document.getElementsByName("option")
  console.dir(dinko)
  // const dinkoArray = [...dinko]
  for (let radio of dinko) {
    if (radio.checked){
      let values = radio.value.split(",")
      urlWeatherBuilder(values)
    }
  }
}
  
  export { dealEventBis }
