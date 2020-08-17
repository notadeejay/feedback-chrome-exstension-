"use strict";



    const setLessonName = () => {
      let header = document.getElementsByClassName('header-bar__tab--active')[0]
      let lessonName = header.querySelector('.header-bar__tab-title').innerText
      chrome.storage.local.set({lessonname: lessonName});  
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


     chrome.runtime.onMessage.addListener(request => {
      if (request && request.type === 'page-rendered') {
        setLessonName();
      }
      return Promise.resolve({response: "Hi from content script"});
    });


    

 
  



  



  
