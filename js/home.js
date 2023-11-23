let header = document.querySelector("#headerScroll");
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', function () {
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition > previousScrollPosition) {
        header.classList.remove('back-in-down');
        header.classList.add('back-out-up');
    } else if (currentScrollPosition < previousScrollPosition) {
        header.classList.remove('back-out-up');
        header.classList.add('back-in-down');
    }
    previousScrollPosition = currentScrollPosition;
});
