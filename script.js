// Text Animation for Role (Web Developer)
const roles = [
  "Web Developer",
  "UI/UX Designer",
  "Front-End Developer",
  "Back-End Developer"
];

const h1 = document.querySelector(".content h1");
const originalHTML = h1.innerHTML;

// Extract the role text node
let roleSpan = document.createElement("span");
roleSpan.style.color = "#ffffff";
roleSpan.style.borderRight = "2px solid #00e5ff";
roleSpan.style.paddingRight = "5px";

h1.innerHTML = originalHTML.replace("Web Developer", "");
h1.appendChild(roleSpan);

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    roleSpan.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      setTimeout(() => (isDeleting = true), 1500);
    }
  } else {
    roleSpan.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect(); 


// Close Advertising Banner
function closeAd() {
  const banner = document.getElementById("adBanner");
  banner.style.display = "none";
  document.body.style.paddingTop = "0";
}


