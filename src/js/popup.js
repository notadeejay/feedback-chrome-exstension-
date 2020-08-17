import "../css/popup.css";
import {buildForm, getLabels} from './airtable_db'

chrome.runtime.sendMessage({text: "popup opened"});

const selected = e => {
  let currVal = document.getElementById('selectform').value
  // need to loop through options and find matching val name to set it as selected.
}

const setLabels = labelArr => {
  let selectHTML = "";
  for(let i = 0; i < labelArr.length; i++) {
    selectHTML += (`<option value="Section ${labelArr[i]}"> Section ${labelArr[i]} </option>`)
  }
    let selectForm = document.getElementById('selectform')
    selectForm.innerHTML = selectHTML
    selectForm.onchange = function(e) {
        selected(e)
     }
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
    buildForm(data)
    
  };


const form = document.getElementById('feedback-form')
form.addEventListener('submit', handleFormSubmit);

chrome.storage.local.get("lessonname", function(data) {
    form.elements["Lesson Name"].value = data.lessonname
});

chrome.storage.local.get("blockname", function(data) {
  form.elements["Block Name"].value = data.blockname
});

chrome.storage.local.get("content", function(data) {
  console.log(data.content)
 document.getElementById("highlighted").value = data.content
});

