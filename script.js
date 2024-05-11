// Navigation
const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".navlink a");
function toggleNav() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

burger.addEventListener("click", function () {
  toggleNav();
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    toggleNav();
  });
});

// Get the current year

const currentYear = new Date().getFullYear();
document.getElementById('year').innerText = currentYear;


// Sliders

const reviewSwiper = new Swiper(".review-slider", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const instaSwiper = new Swiper(".instagram-slider", {
  slidesPerView: 7,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
    },
    0: {
      slidesPerView: 3,
    },
  },
});
