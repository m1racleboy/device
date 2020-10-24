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

const sliderButtonTop = document.querySelector('.slider-controls');

sliderButtonTop.onclick=function(e){
  const slider = document.querySelector('.slider-list');
  for(let i = 0; i < sliderButtonTop.children.length; i++){
    sliderButtonTop.children[i].classList.remove('current-button');
    slider.children[i].classList.remove('slide-current');
  }
  e.target.classList.add('current-button');

  for(i = 0; i < sliderButtonTop.children.length; i++){
    if(sliderButtonTop.children[i].classList.contains('current-button')){
      slider.children[i].classList.add('slide-current');
      break;
    }
  }
}

// slider-bottom

const sliderButtonBottom = document.querySelector('.features-list');

sliderButtonBottom.onclick=function(e){
  const slider = document.querySelector('.feature-slider-list');
  for(let i = 0; i < sliderButtonBottom.children.length; i++){
    sliderButtonBottom.children[i].classList.remove('current');
    slider.children[i].classList.remove('slide-current');
  }
  e.target.parentNode.classList.add('current');

  for(i = 0; i < sliderButtonBottom.children.length; i++){
    if(sliderButtonBottom.children[i].classList.contains('current')){
      slider.children[i].classList.add('slide-current');
      break;
    }
  }
}
