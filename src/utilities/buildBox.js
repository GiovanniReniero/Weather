import { dealEventBis } from "./dealEventBis"

const whichList = document.querySelector("#which")

function buildBox (locationDetails, which){
  console.log("From buildBox")
  console.log(locationDetails)
  let btn = document.createElement("button")
  btn.innerText = "Select"
  
  for(let i=0; i<locationDetails.length; i++){
    let brk = document.createElement("br")
    let radioButton = document.createElement("input")
    radioButton.setAttribute("type", "radio")
    radioButton.setAttribute("name", "option")
    radioButton.setAttribute("value", `${which[i].lon},${which[i].lat}`)
    let mango = radioButton.getAttribute("value")
    console.log("Son mi", mango)
    let btn = document.createElement("button")
    btn.setAttribute("type", "submit")
    let radioLabel = document.createElement("label")
    radioLabel.setAttribute("for", `${which[i].long}`)
    radioButton.setAttribute("id", `${which[i].long}`)
    radioLabel.innerText = `${locationDetails[i]}`
    whichList.appendChild(radioButton) 
    whichList.appendChild(radioLabel)
    whichList.appendChild(brk)
  }

  whichList.appendChild(btn)
  btn.addEventListener("click", dealEventBis)
}

export { buildBox }