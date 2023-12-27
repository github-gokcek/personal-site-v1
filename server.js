window.addEventListener("scroll", () => {
  document.querySelector("#Home h1").style.marginTop = `${
    window.scrollY * 1.5
  }px`;
  document.querySelector("#Mountain1").style.marginBottom = `${
    106 - window.scrollY
  }px`;
  document.querySelector(
    "#leftCloud"
  ).style.marginLeft = `-${window.scrollY}px`;
  document.querySelector(
    "#rightCloud"
  ).style.marginRight = `-${window.scrollY}px`;
  document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`;
});

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
