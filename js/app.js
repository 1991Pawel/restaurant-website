// hamburger
const hamburger = document.querySelector(".hamburger");
const handleClick = () => {
  const nav = document.querySelector(".navigation");
  const navLink = document.querySelectorAll(".navigation__link");
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");

  const isOpen = nav.classList.contains("navigation--active");
  if (isOpen) {
    navLink.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("hamburger--active");
        nav.classList.remove("navigation--active");
      });
    });
  }
};

// tabs

const setubtabs = () => {
  document.querySelectorAll(".tabs__link").forEach(button => {
    button.addEventListener("click", () => {
      const tabBar = button.parentElement;
      const tabContainer = tabBar.parentElement;
      const tabNumber = button.dataset.forTab;

      const tabToActive = tabContainer.querySelector(
        `.tabs__content[data-tab="${tabNumber}"]`
      );

      tabBar.querySelectorAll(".tabs__link").forEach(button => {
        button.classList.remove("tabs__link--active");
      });
      tabContainer.querySelectorAll(".tabs__content").forEach(tab => {
        tab.classList.remove("tabs__content--active");
        console.log(tab);
      });

      button.classList.add("tabs__link--active");
      tabToActive.classList.add("tabs__content--active");
    });
  });
};

// quick slidier :()
const testimonials = () => {
  const slides = Array.from(document.querySelectorAll(".carousel__slide"));
  const nextButton = document.querySelector(".carousel__button--right");
  const prevButton = document.querySelector(".carousel__button--left");
  let counter = 1;

  nextButton.addEventListener("click", () => {
    slides.forEach(slide => {
      slide.classList.remove("carousel__slide--active");
    });
    counter++;

    if (counter == slides.length) {
      counter = 0;
    }
    slides[counter].classList.add("carousel__slide--active");
  });

  prevButton.addEventListener("click", () => {
    slides.forEach(slide => {
      slide.classList.remove("carousel__slide--active");
    });
    if (counter > 0) {
      counter = --counter;
    } else if (counter == 0) {
      counter = 2;
    }
    slides[counter].classList.add("carousel__slide--active");
  });
};

//modal
const modalSetup = () => {
  const openModalbtn = document.querySelector("[data-modal-target]");
  const closeModalbtn = document.querySelector("[data-modal-close]");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");

  openModalbtn.addEventListener("click", () => {
    modal.classList.add("modal--active");
    overlay.classList.add("overlay--active");
  });
  closeModalbtn.addEventListener("click", () => {
    modal.classList.remove("modal--active");
    overlay.classList.remove("overlay--active");
  });
};

// load when dom is ready.
document.addEventListener("DOMContentLoaded", () => {
  setubtabs();
  testimonials();
  modalSetup();
  hamburger.addEventListener("click", handleClick);
});
