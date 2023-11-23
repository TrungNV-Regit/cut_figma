let header = document.querySelector("#headerScroll");
document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.remove('back-in-down');
        header.classList.add('back-out-up');
    }
    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        header.classList.remove('back-out-up');
        header.classList.add('back-in-down');
    }
});
