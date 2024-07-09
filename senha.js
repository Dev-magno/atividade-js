
var PasswordImg = document.getElementById('showPassword');
var passwordcampo = document.getElementById('password');

PasswordButton.addEventListener('click', function () {
    if (passwordcampo.type === 'password') {
        passwordcampo.type = 'text';
        PasswordImg.src = 'olho_aberto.png'
    } else {
        passwordcampo.type = 'password';
        PasswordImg.src = 'olho _fechado.png';
    }
});