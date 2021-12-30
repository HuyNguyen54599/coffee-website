let scrollRequest = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };

let animationEl = document.querySelectorAll('.show-el-effect');

isElInViewPort = (element) => {
    let elDomReact = element.getBoundingClientRect();

    let distance = 200;

    return elDomReact.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance);
}

loop = () => {
    animationEl.forEach(element => {
        if (isElInViewPort(element)) element.classList.add('show-scroll');
    });

    scrollRequest(loop);
}

loop();