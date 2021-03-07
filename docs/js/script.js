"use strict";
// let navOpen: boolean = false;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function toggleHamburgerMain() {
    // navOpen = !navOpen;
    const navbar = document.getElementById("nav");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("hide-nav");
}
function toggleHamburger() {
    if (850 < window.innerWidth) {
        return;
    }
    // navOpen = !navOpen;
    const navbar = document.getElementById("nav");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("hide-nav");
}
function copyEmail() {
    return __awaiter(this, void 0, void 0, function* () {
        let emailText = "jannematiasf@gmail.com";
        navigator.clipboard.writeText(emailText);
        alert("Copied to clipboard: " + emailText);
    });
}
