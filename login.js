function validateForm() {
    const errorMessage = document.getElementById('error-message');
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // сброс состояния ошибки
    errorMessage.style.display = 'none';

    // проверка email
    if (!email.includes('@')) {
        errorMessage.innerText = 'Email должен содержать символ "@".';
        errorMessage.style.display = 'block';
        return false;
    }

    // проверка пароля
    if (password.length < 8) {
        errorMessage.innerText = 'Пароль должен содержать минимум 8 символов.';
        errorMessage.style.display = 'block';
        return false;
    }

    // проверка на буквы и цифры
    if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
        errorMessage.innerText = 'Пароль должен содержать хотя бы одну букву и одну цифру.';
        errorMessage.style.display = 'block';
        return false;
    }

    // проверка - если данные введены правильно. показ прелоадера
    document.getElementById('preloader').style.display = 'flex';

    // задержка в 0.5 сек перед перенаправлением
    setTimeout(function () {
        window.location.href = "index.html";
    }, 500);

    return false; // предотвращаем отправку формы
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        this.innerText = '🌞';
    } else {
        this.innerText = '🌙';
    }
});