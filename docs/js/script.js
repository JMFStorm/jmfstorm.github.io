"use strict";
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
    const navbar = document.getElementById("nav");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("hide-nav");
}
function toggleHamburger() {
    if (850 < window.innerWidth) {
        return;
    }
    const navbar = document.getElementById("nav");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("hide-nav");
}
function copyEmail() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // Desktop
        const emailText = "jannematiasf@gmail.com";
        // navigator.clipboard.writeText(emailText);
        // Mobile
        let input = document.body.appendChild(document.createElement("input"));
        input.value = emailText;
        input.focus();
        input.select();
        document.execCommand("copy");
        (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        alert("Copied to clipboard: " + emailText);
    });
}
