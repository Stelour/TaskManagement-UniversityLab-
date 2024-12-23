const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        document.getElementById('preloader').style.display = 'flex';

        setTimeout(function () {
            window.location.href = "welcome.html";
        }, 1000);
    }
});

function validateForm() {
    const errorMessage = document.getElementById('error-message');
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // сброс состояния ошибки
    errorMessage.style.display = 'none';

    // проверка email
    if (!email) {
        errorMessage.innerText = 'Пожалуйста, введите email.';
        errorMessage.style.display = 'block';
        return false;
    }
    if (!email.includes('@')) {
        errorMessage.innerText = 'Email должен содержать символ "@".';
        errorMessage.style.display = 'block';
        return false;
    }

    // проверка пароля
    if (!password) {
        errorMessage.innerText = 'Пожалуйста, введите пароль.';
        errorMessage.style.display = 'block';
        return false;
    }
    if (password.length < 8) {
        errorMessage.innerText = 'Пароль должен содержать минимум 8 символов.';
        errorMessage.style.display = 'block';
        return false;
    }

    // проверка пароля на буквы и цифры
    if (!/[A-Za-zА-Яа-я]/.test(password) || !/\d/.test(password)) {
        errorMessage.innerText = 'Пароль должен содержать хотя бы одну букву и одну цифру.';
        errorMessage.style.display = 'block';
        return false;
    }

    return true;
}