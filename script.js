// function toggleMenu() {
//   document.getElementById("header").classList.toggle("active");
// }

document.getElementById("menu-icon").addEventListener("click", function () {
  document.querySelector(".header").classList.add("active");
  document.querySelector(".header-title").classList.add("active-title");
  document.querySelector(".header-button").classList.add("active-button");
  document.getElementById("menu-icon").style.display = "none";
  document.getElementById("close-icon").style.display = "block";
});

document.getElementById("close-icon").addEventListener("click", function () {
  document.querySelector(".header").classList.remove("active");
  document.querySelector(".header-title").classList.remove("active-title");
  document.querySelector(".header-button").classList.remove("active-button");
  document.getElementById("menu-icon").style.display = "block";
  document.getElementById("close-icon").style.display = "none";
});
