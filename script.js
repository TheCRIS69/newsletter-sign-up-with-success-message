const formStart = document.querySelector('.form-start');
const formEnd = document.querySelector('.form-end');
const subscribeButton = document.querySelector('.subscribe');
const inputEmail = document.querySelector('input[type="email"]');
const userEmail = document.querySelector('#email');
const emailRequiredMessage = document.querySelector('.email-required-message');

subscribeButton.addEventListener('click', changeFormStatus) 

function changeFormStatus(e) {
    e.preventDefault()
    const emailValue = inputEmail.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(emailValue)) {
        emailRequiredMessage.style.display = 'block';
    } else {
        emailRequiredMessage.style.display = 'none';
        formStart.style.display = 'none';
        formEnd.style.display = 'grid';
        userEmail.textContent = emailValue;
        userEmail.style.fontWeight = '700';
    }
}