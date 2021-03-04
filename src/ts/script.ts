let navOpen: boolean = false;

function toggleHamburger() {
  navOpen = !navOpen;
  console.log("navOpen", navOpen);
  const navbar = document.getElementById("nav");
  navbar?.classList.toggle("hide-nav");
}
