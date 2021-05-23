import {urlBuilder} from "./urlBuilder"



const dealEvent = (event) => {
  event.preventDefault()
  console.log("Camacicci")
  const posto = event.target[0].value
  console.dir(posto)
  urlBuilder(posto) 
}

export {dealEvent}