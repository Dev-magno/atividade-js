const showPassword = document.querySelector('#showPassword')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password1')
const exibir = document.querySelector('#message')

let mostrar = false

showPassword.addEventListener('click', ()=> {
    if (mostrar) {
        password.type = 'password'
        showPassword.textContent = 'olho_fechado.png'
        mostrar = false
    } else {
        password.type = 'text'
        showPassword.textContent = 'olho_'
        mostrar = true
    }
   
});

function confirmarSenha(){
    if(password.value === password2.value){
        exibir.textContent = 'Senhas conferem, efetuar cadastro.'
        exibir.style.color = 'black'
    }else{
        exibir.textContent = 'Senhas não conferem, digite novamente.'
        exibir.style.color = 'red'
    }
}