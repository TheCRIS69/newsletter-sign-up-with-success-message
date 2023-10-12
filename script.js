const formStart = document.querySelector('.form-start');
const formEnd = document.querySelector('.form-end');
const subscribeButton = document.querySelector('.subscribe');
const inputEmail = document.querySelector('input[type="email"]');
const userEmail = document.querySelector('#email');

subscribeButton.addEventListener('click', changeFormStatus);

function changeFormStatus() {
    formStart.style.display = 'none';
    formEnd.style.display = 'grid';
    userEmail.textContent = inputEmail.value;
    userEmail.style.fontWeight = '700';
}