import { buildBox } from "./buildBox"

const whichList = document.querySelector("#which")
const display = document.querySelector("#display")

const askWhich = (which)=>{
  whichList.innerHTML = ""
  display.innerHTML = ""
  console.log("From askWhich...")
  console.log(which)
  
  let locationDetails =[]
  for (let element of which) {
    if (element.state === undefined) {
      let string = (`${element.name}, ${element.country}, long: ${element.lon}, lat: ${element.lat}`)
      locationDetails.push(string)
    } else {
      let string = (`${element.name}, ${element.country}, ${element.state}, long: ${element.lon}, lat: ${element.lat}`)
      locationDetails.push(string)
    }
  }
  buildBox(locationDetails, which) 
}

export { askWhich }

