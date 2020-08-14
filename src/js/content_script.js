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

    function getBlockName(e, header){
      chrome.storage.local.set({blockname: header}); 
    }

    const addHeaderListener = () => {
      let links = document.getElementsByClassName('header-bar__tab-link')
      for(let i = 0; i < links.length; i++) {
        links[i].onclick = function(e) {updateLessonName(e)}
      }
    }

    const addBlockListener = () => {
      let section = document.getElementsByClassName('block html')
      for(let i = 0; i < section.length; i++) {
         let header = section[i].querySelector('h1').innerText
          section[i].onclick = function(e) {getBlockName(e, header)}
       }
     }

    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        chrome.storage.local.set({blockname: "Block Name"});
        addHeaderListener();
        setLessonName();
        window.setTimeout(addBlockListener, 8000);
    }
  }
 



  



  
