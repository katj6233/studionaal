const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const logoVideo = document.querySelector("#logo-video");

logoVideo.addEventListener("mouseenter", (event) => {
  event.target.play();
});

logoVideo.addEventListener("mouseleave", (event) => {
  event.target.pause();
  event.target.currentTime = 0;
});
