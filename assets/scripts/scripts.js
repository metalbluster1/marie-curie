/* Hamburger icon for mobile screen */

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


/* Scroll to section using navigatin bar */

let mainTopPaddingString = window.getComputedStyle(document.getElementById("main__section")).paddingTop;
let mainTopPadding = removePX(mainTopPaddingString);

let headerHeightString = window.getComputedStyle(document.getElementById("header")).height;
let headerHeight = removePX(headerHeightString);

let imageBanner = document.getElementById("img-banner");
let moveToSection = document.querySelectorAll(".move-to-section");

moveToSection.forEach((el) => {
    el.addEventListener('click', () => {
        let imagePositionY = imageBanner.getBoundingClientRect().y + headerHeight - mainTopPadding;
        let id = el.id;
        let idPositionY = document.getElementById(`${id}__section`).getBoundingClientRect().y;
        
        window.scrollTo(0, idPositionY - imagePositionY);
    })
})

/* Removes pixels from getComputedStyleValues */

function removePX(value) {
    let loc = value.indexOf('p');
    return parseInt(value.slice(0, loc));
}
