//  pop-up

const contactsButton = document.querySelector('.contacts .button');
const modalWriteUs = document.querySelector('.modal-write-us');
const map = document.querySelector('.map');
const modalMap = document.querySelector('.modal-map');
const closeWriteUs = document.querySelector('.close-write-us');
const closeMap = document.querySelector('.close-map');
const form = modalWriteUs.querySelector('form');
const nameField = modalWriteUs.querySelector('[name=name]');
const emailField = modalWriteUs.querySelector('[name=email]');
const messageField = modalWriteUs.querySelector('[name=text]');

contactsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add('modal-show');
  nameField.focus();
});

map.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

closeWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove('modal-show');
  nameField.classList.remove('write-us-input-invalid');
  emailField.classList.remove('write-us-input-invalid');
  messageField.classList.remove('write-us-input-invalid');
});

closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

form.addEventListener("submit", function (evt) {
  if (!nameField.value || !nameField.validity.valid) {
    nameField.classList.add('write-us-input-invalid');
    evt.preventDefault();
  } else {
    nameField.classList.remove('write-us-input-invalid');
  }
  if (!emailField.value || !emailField.validity.valid) {
    emailField.classList.add('write-us-input-invalid');
    evt.preventDefault();
  } else {
    emailField.classList.remove('write-us-input-invalid');
  }
  if (!messageField.value) {
    messageField.classList.add('write-us-input-invalid');
    evt.preventDefault();
  } else {
    messageField.classList.remove('write-us-input-invalid');
  }
});

// slider-top

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    let dots = document.getElementsByClassName("slider-button");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-current");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("current-button");
    }
    slides[slideIndex - 1].classList.add("slide-current");
    dots[slideIndex - 1].classList.add("current-button");
}


// slider-bottom

let sliderIndex = 1;
showSlide(sliderIndex);

function plusSlide() {
    showSlide(sliderIndex += 1);
}

function minusSlide() {
    showSlide(sliderIndex -= 1);  
}

function currentSlides(n) {
    showSlide(sliderIndex = n);
}

function showSlide(n) {
    let slide = document.getElementsByClassName("feature-slide");
    let item = document.getElementsByClassName("features-item");
    if (n > slide.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
        sliderIndex = slide.length;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].classList.remove("current-slide");
    }
    for (i = 0; i < item.length; i++) {
        item[i].classList.remove("current");
    }
    slide[sliderIndex - 1].classList.add("current-slide");
    item[sliderIndex - 1].classList.add("current");
}