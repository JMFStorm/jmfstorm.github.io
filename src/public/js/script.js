"use strict";
let navOpen = false;
function toggleHamburger() {
    navOpen = !navOpen;
    console.log("navOpen", navOpen);
    const navbar = document.getElementById("nav");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("hide-nav");
}
