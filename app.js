const header = document.querySelector("header");
const hamburger = document.querySelector(".header__hamburger");
const hamburgerImg = hamburger.children[0];
const wrapper = document.querySelector(".header__wrapper");
const activeItems = document.querySelector(".header__active-items");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");

  if (header.classList.contains("active")) {
    hamburgerImg.src = "./images/icon-close.svg";
    wrapper.style.display = "none";
    activeItems.style.display = "flex";
  } else {
    hamburgerImg.src = "./images/icon-hamburger.svg";
    wrapper.style.display = "block";
    activeItems.style.display = "none";
  }
});
