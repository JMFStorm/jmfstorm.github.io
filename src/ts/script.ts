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

async function copyEmail(): Promise<void> {
  // Desktop
  const emailText: string = "jannematiasf@gmail.com";

  // navigator.clipboard.writeText(emailText);

  // Mobile
  let input = document.body.appendChild(document.createElement("input"));
  input.value = emailText;
  input.focus();
  input.select();
  document.execCommand("copy");
  input.parentNode?.removeChild(input);

  alert("Copied to clipboard: " + emailText);
}
