const basicPrice = document.querySelector(".left-card p span.change");
const professionalPrice = document.querySelector(".center-card p span.change");
const masterPrice = document.querySelector(".right-card p span.change");
const toggler = document.querySelector(".toggle-icon");

let toggle = function () {
  isActive = toggler.classList.contains("active");

  if (isActive) {
    toggler.classList.remove("active");
    basicPrice.innerText = "19";
    professionalPrice.innerText = "24";
    masterPrice.innerText = "39";
  } else {
    toggler.classList.add("active");
    basicPrice.innerText = "199";
    professionalPrice.innerText = "249";
    masterPrice.innerText = "399";
  }
};

toggler.addEventListener("click", toggle);
