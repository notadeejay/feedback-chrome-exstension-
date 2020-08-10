const headerDiv = document.getElementsByClassName('header-bar__tab--active')[0]
const lessonName = headerDiv.querySelector('.header-bar__tab-title').innerHTML

form.elements["Lesson Name"].value = lessonName
