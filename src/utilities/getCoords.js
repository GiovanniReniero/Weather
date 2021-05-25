import axios from 'axios'
import { askWhich } from "./askWhich"

// const note = (which) => {
  // return which
// }

const getCoords =(url) => {
  axios.get(url)
  .then(({data})=>{
    const which =[]
    console.log(data)
    let campione = data[0]
    which.push(campione) 
    for (let element of data){
       if (Math.floor(element.lon) !== Math.floor(which[0].lon) &&
      Math.floor(element.lat) !== Math.floor(which[0].lat) &&
      Math.round(element.lon) !== Math.round(which[0].lon) &&
      Math.round(element.lat) !== Math.round(which[0].lat)){
        which.push(element)
        //The above algorythm is poor as it only compares each element to element0.
        // I could end up having [A, B,B,B,B] as the conditions outlined are satisfied
        // but not what is required. Needs more attention!
      } 
    }
    askWhich(which)
  })
  .catch((err) => {
    console.log("ERROR!", err)
  })
}

export { getCoords }

