const axios = require('axios')
const requestOne = axios.get("https://api.openweathermap.org/data/2.5/weather?q=canda&appid=6df38294fdb552bb95e2c46bbfa787af");
const requestTwo = axios.get("https://http://api.openweathermap.org/data/2.5/weather?q=tunisie&appid=6df38294fdb552bb95e2c46bbfa787af");
const requestThree = axios.get("https://api.openweathermap.org/data/2.5/weather?q=italie&appid=6df38294fdb552bb95e2c46bbfa787af");
axios
  .all([requestOne, requestTwo, requestThree])
  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });