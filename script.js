

// add Event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

const menuTogle = document.getElementById("menu-btn")
const navbar = document.getElementById("navbar")
const navItem = document.querySelectorAll(".navbar-link")

const toggleNav = function () {
    navbar.classList.toggle("active");
    document.body.classList.toggle("active");
}
menuTogle.addEventListener("click", toggleNav);
navItem.addEventListener("click", toggleNav)
// addEventOnElements(navItem, "click", toggleNav)
// navItem.addEventListener("click", toggleNav);
