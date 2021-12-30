const navBtn = document.getElementById("nav-btn-phone");
const nav = document.getElementById("nav");
const body = document.getElementById("body");
let navOn = false;
navBtn.addEventListener("click", (e) => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    navOn = true;
  } else {
    nav.classList.add("hidden");
    navOn = false;
  }
});

document.onclick = function (div) {
  if (div.target.id != "nav-btn-phone" && navOn == true) {
    nav.classList.add("hidden");
  }
};
