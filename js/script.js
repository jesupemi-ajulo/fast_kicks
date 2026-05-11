// const swiper = new Swiper(".myswiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
// const tswiper = new Swiper(".testimonialSwiper", {
//   slidesPerView: 2,
//   spaceBetween: 10,

//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const harmburger = document.querySelector("#harmburger");
// const mobileNavLink = document.querySelector("#mobile-nav-links");
// const navOverlay = document.querySelector("#navOverlay");
// harmburger.addEventListener("click", () => {
//   mobileNavLink.classList.toggle("open");
//   navOverlay.classList.toggle("open");
// });
// navOverlay.addEventListener("click", () => {
//   mobileNavLink.classList.remove("open");
//   navOverlay.classList.remove("open");
// });

// signup

const siContainer = document.querySelector("#siContainer");
const signUp = document.querySelector("#fcSignup");
const signIn = document.querySelector("#fcSignin");
signUp.addEventListener("click", () => {
  siContainer.classList.add("active");
  console.log('hi')
});
signIn.addEventListener("click", () => {
  siContainer.classList.remove("active");
});
