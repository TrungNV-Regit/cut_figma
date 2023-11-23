let header = document.querySelector("#headerScroll");
let previousScroll = window.scrollY;

document.addEventListener('scroll', function() {
  if (window.scrollY > previousScroll) {
    header.classList.remove('header-down');
    header.classList.add('header-up');
  } else {
    header.classList.remove('header-up');
    header.classList.add('header-down');    
  }
  
  previousScroll = window.scrollY;
});