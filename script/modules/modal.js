const callbackBtn = document.querySelector('.header__button-btn');
const modal = document.querySelector('.modal');
const modalSubmit = document.querySelector('.modal__submit');
const modalForm = document.querySelector('.modal__form');
const overlayModal = document.querySelector('.modal__overlay');
const callBack = document.querySelector('.header__item--call');


callbackBtn.addEventListener('click',() => {
    modal.classList.add('modal-open');
})

callBack.addEventListener('click',() => {
  modal.classList.add('modal-open');
})

overlayModal.addEventListener('click', (e) => {
    const target = e.target;
    if (target === overlayModal || target.closest('.modal__close')) {
      modal.classList.remove('modal-open');
      console.log("target")
    }
  });

modalSubmit.addEventListener('click', (e) => {
    console.log("submit")
    e.preventDefault();
    modalForm.reset();
    modal.classList.remove('modal-open');
})