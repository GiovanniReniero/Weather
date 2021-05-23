import axios from 'axios'

export const getCoords =(url) =>{
  axios.get(url)
  .then(({data})=>{
    console.log(data)
    for (let place of data){
      console.log(place.name)
      console.log(place.country)
      console.log(place.lon)
      console.log(place.lat)
    }
  })
  .catch((err) => {
    console.log("ERROR!", err)
  })
}