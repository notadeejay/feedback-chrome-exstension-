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

    const getBlockName = () => {
      let htmlBlock = e.target.closest('.block--edit-mode')
      let blockName = htmlBlock.querySelector('h1').innerText
      chrome.storage.local.set({blockname: blockName}); 
    }

    const setBlockName = () =>{
      let contentBlocks = document.querySelectorAll('.cke_editable')
      for (let i = 0; i < contentBlocks.length; i++) {
        contentBlocks[i].onfocus= function() {
          getBlockName()
        }
    }
      
      
    }
    
    document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      let links = document.getElementsByClassName('header-bar__tab-link')
      for(let i = 0; i < links.length; i++) {
        links[i].onclick = function(e) {updateLessonName(e)}
      }
      setLessonName();
      setBlockName();
    
    }
  }
 



  



  
