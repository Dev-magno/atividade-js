
let nome = prompt("Digite seu nome:")
let nome_place = document.createElement('h1')
nome_place.innerHTML = nome
document.querySelector('body').appendChild(nome_place)
document.querySelector('h1').innerHTML = "Seja Bem-vindo, " + nome

