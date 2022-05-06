let nav = document.querySelector(".nav-1");
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav-1");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("active", windowPosition);
});

//

const one = document.querySelector(".one");
const options = {
  rootMargin: "-12%",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove("color-magic");
    } else {
      nav.classList.add("color-magic");
    }
  });
}, options);
observer.observe(one);
const two = document.querySelector(".main");
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove("three-mi");
    } else {
      nav.classList.add("three-mi");
    }
  });
}, options);
observer2.observe(two);

//

const ham = document.querySelector("#ham");
const icon = document.querySelector("#icon");
const icon2 = document.querySelector("#icon2");
const menu = document.querySelector(".mobile-menu");
ham.addEventListener("click", () => {
  menu.classList.add("open");
});
icon2.addEventListener("click", () => {
  menu.classList.remove("open");
});

//

const dad = document.querySelector(".slider-d");
const son = document.querySelector(".slider");
window.addEventListener("load", () => {
  son.style.left = "100%";
  dad.style.width = "100%";
  setTimeout(() => {
    dad.style.display = "none";
  }, 1500);
});
//
