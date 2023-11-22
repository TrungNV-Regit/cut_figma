let header = document.querySelector("#headerScroll");
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', function() {
  let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition > previousScrollPosition) {
    header.classList.remove('backInDown');
        header.classList.add('backOutUp');
  } else if (currentScrollPosition < previousScrollPosition) {
    header.classList.remove('backOutUp');
    header.classList.add('backInDown');
  }
  previousScrollPosition = currentScrollPosition;
});
