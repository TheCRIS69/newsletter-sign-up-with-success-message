const formStart = document.querySelector('.form-start');
const formEnd = document.querySelector('.form-end');
const subscribeButton = document.querySelector('.subscribe');

subscribeButton.addEventListener('click', changeFormStatus);

function changeFormStatus() {
    formStart.style.display = 'none';
    formEnd.style.display = 'grid';
}