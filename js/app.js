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




// slider
var slideIndex = 0;
var slideAuto = true;
var slideContainer = document.querySelector('.slide-list');
var slideItem = document.querySelectorAll('.slide-item');
var fullSlide = document.querySelector('.slider');

var preSlide = () => {
    if (slideIndex === 0) {
        slideContainer.style.transform = `translateX(-${slideItem[slideIndex].offsetWidth * (slideItem.length - 1)}px)`;
        slideIndex = slideItem.length - 1;
    } else {
        slideContainer.style.transform = `translateX(-${slideItem[slideIndex].offsetWidth * (slideIndex - 1)}px)`
        slideIndex--;
    }
}

var nextSlide = () => {
    if (slideIndex === slideItem.length - 1) {
        slideContainer.style.transform = `translateX(0px)`;
        slideIndex = 0;
    } else {
        slideContainer.style.transform = `translateX(-${slideItem[slideIndex].offsetWidth * (slideIndex + 1)}px)`;
        slideIndex++;
    }
}

var preButton = document.querySelector('.slider .fa-arrow-left');
var nextButton = document.querySelector('.slider .fa-arrow-right');

preButton.onclick = () => preSlide();
nextButton.onclick = () => nextSlide();

fullSlide.onmouseover = () => slideAuto = false;
fullSlide.onmouseleave = () => slideAuto = true;

setInterval(() => {
    if (!slideAuto) return;
    nextSlide();
}, 1000);

// end slider