import {urlBuilder} from "./urlBuilder"

const dealEvent = (event) => {
  event.preventDefault()
  const posto = event.target[0].value
  urlBuilder(posto)
}



export {dealEvent}