import "../css/popup.css";
import hello from "./popup/example";

import {create} from './airtable_db'


const isValidElement = element => {
  return element.name && element.value;
};
  
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (isValidElement(element)) {
       console.log(element.name)
      if (element.name == "Label") {
        data[element.name] = new Array(`Section ${element.value}`)
      } else {
      data[element.name] = element.value
      }
    }
    return data
  }, {});
  
  const handleFormSubmit = event => {
  
    event.preventDefault();
    const data = formToJSON(form.elements)
    create(data)
    
  };



const form = document.getElementById('feedback-form')
form.addEventListener('submit', handleFormSubmit);