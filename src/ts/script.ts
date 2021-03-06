let navOpen: boolean = false;

function toggleHamburgerMain() {
  navOpen = !navOpen;
  const navbar = document.getElementById("nav");
  navbar?.classList.toggle("hide-nav");
}

function toggleHamburger() {
  if (850 < window.innerWidth) {
    return;
  }
  navOpen = !navOpen;
  const navbar = document.getElementById("nav");
  navbar?.classList.toggle("hide-nav");
}

async function copyEmail(): Promise<void> {
  let emailText: string = "jannematiasf@gmail.com";
  navigator.clipboard.writeText(emailText);

  alert("Copied to clipboard: " + emailText);
}
