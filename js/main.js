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

form.addEventListener('submit', function (evt) {
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

let slideIndexTop = 1;
showSlidesTop(slideIndexTop);

function plusSlideTop() {
    showSlidesTop(slideIndexTop += 1);
}

function minusSlideTop() {
    showSlidesTop(slideIndexTop -= 1);  
}

function currentSlideTop(n) {
    showSlidesTop(slideIndexTop = n);
}

function showSlidesTop(n) {
    let i;
    let slidesTop = document.getElementsByClassName('slider-item');
    let dots = document.getElementsByClassName('slider-button');
    if (n > slidesTop.length) {
      slideIndexTop = 1;
    }
    if (n < 1) {
        slideIndexTop = slidesTop.length;
    }
    for (i = 0; i < slidesTop.length; i++) {
        slidesTop[i].classList.remove('slide-current');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('current-button');
    }
    slidesTop[slideIndexTop - 1].classList.add('slide-current');
    dots[slideIndexTop - 1].classList.add('current-button');
}

let slideIndexBottom = 1;
showSlideBottom(slideIndexBottom );

function plusSlideBottom() {
    showSlideBottom(slideIndexBottom  += 1);
}

function minusSlideBottom() {
    showSlideBottom(slideIndexBottom  -= 1);  
}

function currentSlidesBottom(n) {
    showSlideBottom(slideIndexBottom  = n);
}

function showSlideBottom(n) {
    let slidesBottom = document.getElementsByClassName('feature-slide');
    let item = document.getElementsByClassName('features-item');
    if (n > slidesBottom.length) {
      slideIndexBottom  = 1;
    }
    if (n < 1) {
      slideIndexBottom  = slidesBottom.length;
    }
    for (i = 0; i < slidesBottom.length; i++) {
      slidesBottom[i].classList.remove('current-slide');
    }
    for (i = 0; i < item.length; i++) {
        item[i].classList.remove('current');
    }
    slidesBottom[slideIndexBottom  - 1].classList.add('current-slide');
    item[slideIndexBottom  - 1].classList.add('current');
}