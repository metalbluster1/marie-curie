const hamburger = document.getElementById("hamburger");
const topBar = document.querySelectorAll(".top-bar")[0];
const middleBar = document.querySelectorAll(".middle-bar")[0];
const bottomBar = document.querySelectorAll(".bottom-bar")[0];
const navBarLinks = document.querySelectorAll(".nav-bar__links")[0];


hamburger.addEventListener('click', (e) => {
    topBar.classList.toggle("top-bar--active");
    middleBar.classList.toggle("middle-bar--active");
    bottomBar.classList.toggle("bottom-bar--active");
    navBarLinks.classList.toggle("nav-bar-links--is-visible");
})