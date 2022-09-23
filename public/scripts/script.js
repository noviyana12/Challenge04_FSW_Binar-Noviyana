AOS.init({
  duration: 2000,
  once: true,
});

var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-custom-nav", "shadow");
    nav.style.backgroundColor = "white";
  } else {
    nav.classList.remove("bg-custom-nav", "shadow");
    nav.style.backgroundColor = "transparent";
  }
});
