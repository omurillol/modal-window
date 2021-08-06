'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

//select multiple elements with a single class
const btnsShowModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      //if it doesn't contain hidden, then add
      closeModal();
    }
  }
});
