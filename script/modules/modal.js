const callbackBtn = document.querySelector('.header__button-btn');
const modal = document.querySelector('.modal');
const modalSubmit = document.querySelector('.modal__submit');
const modalForm = document.querySelector('.modal__form');
const overlayModal = document.querySelector('.modal__overlay');
const callBack = document.querySelector('.header__item--call');
const modalName = document.querySelector('.modal__input-name');
const modalPhone = document.querySelector('.modal__input-phone');
const modalTitle = document.querySelector('.modal__title');
const modalFieldset = document.querySelector('.modal__fieldset');

const telMask = new Inputmask('+7 (999)-999-99-99');

telMask.mask(modalPhone);

const validation = new JustValidate(modalForm);
console.log(validation);

validation
  .addField(modalName, [
    {
      rule: 'required',
      errorMessage: 'Укажите Ваше имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Не короче 2 символов'
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Не длиннее 15 символов'
    },
  ])
  .addField(modalPhone, [
    {
      rule: 'required',
      errorMessage: 'Укажите Ваш телефон',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Введите 10 цифр телефона'
    },
    {
      validator() {
        const phone = modalPhone.inputmask.unmaskedvalue();
        if (Number(phone) && phone.length === 10 ) {
          return true;
        }
        return false;
      },
      errorMessage: 'Введите 10 цифр номера телефона'
    }
  ])
  .onSuccess(event => {
    const target = event.target;
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      name: target.name.value,
      phone: target.phone.value
    })
    .then(response => {
      console.log(response);
      modalTitle.textContent = `Ваша заявка номер ${response.data.id} принята, ожидайте звонка`;
      modalFieldset.disabled = 'true';
      target.reset();
    })
    .catch((err) => {
      modalFieldset.disabled = 'false';
      modalTitle.textContent = 'Что-то пошло не так попробуйте ещё раз'
    })
  })


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
    // e.preventDefault();
    // modalForm.reset();
    // modal.classList.remove('modal-open');
})

