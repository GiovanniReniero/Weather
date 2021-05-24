// import {dealEventBis} from "./dealEventBis"


const whichList = document.querySelector("#which")

const askWhich = (which)=>{
  whichList.innerHTML = ""
  console.log("From askWhich...")
  for (let element of which) {
    // const radioBox = document.createElement("input")
    // radioBox.type ="radio"
    const li = document.createElement("h4") //This needs to change to Radio Button
    if (element.state === undefined) {
      li.innerText= (`${element.name}, ${element.country}, 
                      long :${element.lon}, lat :${element.lat}`)
    } else {
      li.innerText= (`${element.name}, ${element.country}, ${element.state}, 
                      long :${element.lon}, lat :${element.lat}`)
    }
    // li.addEventListener("click", dealEventBis)
    whichList.appendChild(li)
  }
}

// whichList.addEventListener("click", dealEventBis)



export { askWhich }

