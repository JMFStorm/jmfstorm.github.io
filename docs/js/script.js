"use strict";
function toggleHamburgerMain() {
    const navbar = document.getElementById("nav");
    navbar?.classList.toggle("hide-nav");
}

function toggleHamburger() {
    if (850 < window.innerWidth) {
        return;
    }
    const navbar = document.getElementById("nav");
    navbar?.classList.toggle("hide-nav");
}

async function copyEmail(){
    // Desktop
    const emailText = "jannematiasf@gmail.com";

    // Mobile
    let input = document.body.appendChild(document.createElement("input"));
    input.value = emailText;
    input.focus();
    input.select();
    document.execCommand("copy");
    input.parentNode?.removeChild(input);

    alert("Copied to clipboard: " + emailText);
}
