const showPassword = document.querySelector('#showPassword')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password1')
const exibir = document.querySelector('#message')

let mostrar = false
showPassword.addEventListener('click', ()=>{
    if(mostrar) {
        password.type = 'password'
        showPassword.src = 'olho_fechado.png'
    }else {
        password.type = 'text'
        showPassword.src = 'olho_aberto.png'
    }
    mostrar = !mostrar; // Invertendo o valor de mostrar
})

function confirmarSenha() {
    if (password.value === password2.value) {
        exibir.textContent = 'Senhas conferem, efeutar cadastro!';
        exibir.style.color = 'black'

    } else {
        exibir.textContent = 'Senhas não conferem, digite novamente!';
        exibir.style.color = 'red'
    }
}
