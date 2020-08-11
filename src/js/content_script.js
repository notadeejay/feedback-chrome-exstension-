"use strict";



    document.onreadystatechange = function () {

    if (document.readyState === 'complete') {
        const headerDiv = document.getElementsByClassName('header-bar__tab--active')[0]
        const lessonName = headerDiv.querySelector('.header-bar__tab-title').innerHTML
        chrome.storage.local.set({lessonname: lessonName});  
        document.addEventListener("click", function(e){
          let htmlBlock = e.target.closest('.block--edit-mode')
          let blockName = htmlBlock.querySelector('h1').innerText
          chrome.storage.local.set({blockname: blockName}); 
        });
    }
  }


  



  
