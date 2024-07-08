
var PasswordButton = document.getElementById('showPassword');
var passwordcampo = document.getElementById('password');

PasswordButton.addEventListener('click', function () {
    if (passwordcampo.type === 'password') {
        passwordcampo.type = 'text';
        PasswordButton.textContent = 'Hide'
    } else {
        passwordcampo.type = 'password';
        PasswordButton.textContent = 'Show';
    }
});