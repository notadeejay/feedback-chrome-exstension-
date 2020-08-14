import axios from 'axios'
import secrets from "secrets";

const BASE_ID = secrets.APP_ID
const API_KEY = secrets.API_KEY
const config = {
  headers: { 'Authorization': `Bearer ${API_KEY}` }
};

function create(form) {
  console.log(form)
  const tableName = "Python"
   let date = new Date()
    let data = { 
      "records": [{
        "fields" : {
        }
      }]
    }
    data["records"][0]["fields"] = form 
    data["records"][0]["fields"]["Date Reviewed"] = date.toISOString().substring(0, 10);
    data["records"][0]["fields"]["Status"] = "Todo"

    const config = {
       headers: { 'Authorization': `Bearer ${API_KEY}` }
    };
  
    let url = `https://api.airtable.com/v0/${BASE_ID}/${tableName}`
    axios.post(url, data, config)
    .then((response) => {
      // Success 🎉
      console.log(response);
    })
    .catch((error) => {
      // Error 😨
      if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      }
    });
  }

function getLabels () {
  const tableName = "Sections"
  let url = `https://api.airtable.com/v0/${BASE_ID}/${tableName}`
  return axios.get(url, config)

}



export {create, getLabels};