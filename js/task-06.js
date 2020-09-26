// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validInput = document.querySelector('#validation-input');

const isValid = value => {
  if (value.target.value.length === Number(validInput.dataset.length)) {
    validInput.classList.add('valid');
    validInput.classList.remove('invalid');
  } else if (value.target.value.length === 0) {
    validInput.classList.remove('invalid');
    validInput.classList.remove('valid');
  } else {
    validInput.classList.add('invalid');
    validInput.classList.remove('valid');
  }
};

validInput.addEventListener('blur', isValid);
