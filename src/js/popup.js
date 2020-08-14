import "../css/popup.css";


import {create, getLabels} from './airtable_db'


const setLabels = labelArr => {
  let selectHTML = "";
  for(let i = 0; i < labelArr.length; i++) {
    selectHTML += (`<option value="Section ${labelArr[i]}"> Section ${labelArr[i]} </option>`)
  }
    let selectForm = document.getElementById('selectform')
    selectForm.innerHTML = selectHTML
}
  
getLabels().then(response => {
  let labels = response.data.records
  let newArr = []
  for(var i = 0; i < labels.length; i++) {
    newArr.push(Number(labels[i].fields['Section']))
  }
  setLabels(newArr.sort((a, b) => a - b))
})
.catch(err => console.log(err))


const isValidElement = element => {
  return element.name && element.value;
};
  
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (isValidElement(element)) {
       console.log(element.name)
      if (element.name == "Label") {
        data[element.name] = new Array(element.value)
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

chrome.storage.local.get("lessonname", function(data) {
    form.elements["Lesson Name"].value = data.lessonname
});

chrome.storage.local.get("blockname", function(data) {
   console.log(data.blockname)
  form.elements["Block Name"].value = data.blockname
});

