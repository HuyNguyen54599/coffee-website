// header scrolling
var header = document.querySelector('header');
var LastScrollTop = 0;

window.onscroll = () => {
    var screenWidth = window.innerWidth;

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var headerHidden = document.querySelector('.header-wrapper-top').offsetHeight;

    if (LastScrollTop < scrollTop && screenWidth > 1280) {
        header.style.top = `-${headerHidden}px`;
        LastScrollTop = scrollTop;

    } else {
        header.style.top = 0;
    }

    LastScrollTop = scrollTop;
}

window.onload = () => {
    header.style.top = 0;
}
// end header scrolling




// toggle menu responsive
var toggleMenu = document.querySelector('.mb-menu-toggle');
var toggleClose = document.querySelector('.mb-menu-close');
var headerWrapper = document.querySelector('.header-wrapper');

toggleMenu.onclick = () => {
    headerWrapper.classList.add('menu-active');
    document.body.style.overflow = 'hidden';
    headerWrapper.style.overflow = 'overlay';
}
toggleClose.onclick = () => {
    headerWrapper.classList.remove('menu-active');
    document.body.style.overflow = 'overlay';
}
// end toggle menu responsive




// handle header search
var extendBox = document.querySelector('.extend');
var searchIcon = document.querySelector('.extend .extend-item:first-child a');
var searchBar = document.querySelector('.extend input[type="text"]');

searchIcon.onclick = (e) => {
    extendBox.classList.add('search-active');
    e.preventDefault();
}
searchBar.onblur = () => {
    extendBox.classList.remove('search-active');
    searchBar.value = '';
};
// end handle header search




// dropdown arrow
var dropdownActive = document.querySelector('.dropdown-menu-item');
var homeDown = document.querySelector('.dropdown');

homeDown.onclick = () => dropdownActive.classList.toggle('down-active');
// end dropdown arrow