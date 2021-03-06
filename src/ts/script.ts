let navOpen: boolean = false;

function toggleHamburger() {
  navOpen = !navOpen;

  const header = document.getElementById("header");

  const navbar = document.getElementById("nav");
  navbar?.classList.toggle("hide-nav");
}

async function copyEmail() {
  let emailText: string = "jannematiasf@gmail.com";
  navigator.clipboard.writeText(emailText);

  alert("Copied to clipboard: " + emailText);
}
