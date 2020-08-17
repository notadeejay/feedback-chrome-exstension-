"use strict";



    const setLessonName = () => {
      let header = document.getElementsByClassName('header-bar__tab--active')[0]
      let lessonName = header.querySelector('.header-bar__tab-title').innerText
      chrome.storage.local.set({lessonname: lessonName});  
      console.log(lessonName)
    }
    
    function updateLessonName(e){
      let link = e.target.closest('a').dataset.tip
      chrome.storage.local.set({lessonname: link});  
    }

    const addHeaderListener = () => {
      let links = document.getElementsByClassName('header-bar__tab-link')
      for(let i = 0; i < links.length; i++) {
        links[i].onclick = function(e) {updateLessonName(e)}
      }
    }

    const getText = () => {
      let selection = window.getSelection().toString();
      chrome.storage.local.set({content: selection}); 
    }

    function getBlockName(e, header, name){
      console.log(e.target.getAttribute('name'))
      chrome.storage.local.set({blockname: header}); 
      chrome.storage.local.set({blockid: name});
    }

   
    const addBlockListener = () => {
      let section = document.getElementsByClassName('block html')
      for(let i = 0; i < section.length; i++) {
         let header = section[i].querySelector('h1').innerText
         let name = section[i].getAttribute('name')
          section[i].onclick = function(e) {
            getBlockName(e, header, name)
          }
          section[i].onmouseup = function(e) {
            getText();
          }
       }
     }

    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        addHeaderListener();
        window.setTimeout(setLessonName, 8000);
        window.setTimeout(addBlockListener, 8000);
        chrome.storage.local.set({blockname: ""}); 
    }
  }
 
  



  



  
