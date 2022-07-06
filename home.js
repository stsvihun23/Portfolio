document.addEventListener("DOMContentLoaded", function(e) {
  
var photo = document.getElementById("photo");
var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var project4 = document.getElementById("project4");
console.log(photo);
function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(photo);
  fadeOutOnScroll(project1);
  fadeOutOnScroll(project2);
  fadeOutOnScroll(project3);
  fadeOutOnScroll(project4);
}

window.addEventListener('scroll', scrollHandler);
})