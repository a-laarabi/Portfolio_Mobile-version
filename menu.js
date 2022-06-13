const menu = document.querySelector(".menu");
const menuPopup = document.querySelector(".menu-popup");
const menuIcon = document.querySelector(".menu-icon");

menu.addEventListener("click", function click() {
  menuPopup.classList.add("visible");
});

menuIcon.addEventListener("click", function click() {
  menuPopup.classList.remove("visible");
});
