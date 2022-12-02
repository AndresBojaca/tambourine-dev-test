// AOS Init   
  AOS.init();

//Vars

const slider = document.querySelectorAll(".slider__item");
const sliderarrowright = document.querySelectorAll(".slider__arrow--right");
const sliderarrowleft = document.querySelectorAll(".slider__arrow--left");
const sliderTranslate = document.querySelector(".first__section--slider");
const openbookingmodal = document.querySelector(".booking__form--open");
const closebookingmodal = document.querySelector(".booking__form--close");
const bookingformsend = document.getElementById("booking__form-send");
const bookingmodal = document.getElementById("booking__form");
const bookingmodalinputs = document.querySelectorAll("#booking__form input");
const backdrop = document.getElementById("backdrop");

// Slider Offset
let offset = 1;

function slide(arrow) {
  switch (offset) {
    case 1:
      arrow == "right" ? offset++ : (offset = 1);
      break;
    case 2:
      arrow == "right" ? offset++ : offset--;
      break;
    case 3:
      arrow == "right" ? (offset = 1) : offset--;
      break;
  }
  sliderTranslate.style.transform = `translateX(-${offset - 1}00%)`;
}
// Every 8 Sec the slider plays
setInterval('slide("right")', 8000);

// Modal Booking
openbookingmodal.addEventListener('click', function(){
    bookingmodal.classList.add('show');
    backdrop.classList.add('show');
})

closebookingmodal.addEventListener('click', function(){
    bookingmodal.classList.remove('show');
    backdrop.classList.remove('show');
    // Reset Validations Input form
    bookingmodalinputs.forEach(e => e.value == 0 && e.classList.remove('empty'));
})

bookingformsend.addEventListener('click', function(){
    // Validate Inputs
    bookingmodalinputs.forEach(e => e.value == 0 && e.classList.toggle('empty'));
})



