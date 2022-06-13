const menu = document.querySelector(".menu");
const menuPopup = document.querySelector(".menu-popup");
const menuIcon = document.querySelector(".menu-icon");
const link1 = document.querySelector(".works")
const link2 = document.querySelector(".aboutMe")
const link3 = document.querySelector(".contactMe")

menu.addEventListener("click", function click() {
  menuPopup.classList.add("visible");
});

menuIcon.addEventListener("click", function click() {
  menuPopup.classList.remove("visible");
});

link1.addEventListener("click", function click() {
  menuPopup.classList.remove("visible");
});

link2.addEventListener("click", function click() {
  menuPopup.classList.remove("visible");
});

link3.addEventListener("click", function click() {
  menuPopup.classList.remove("visible");
});