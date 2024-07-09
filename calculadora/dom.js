document.addEventListener('DOMContentLoaded', function() { // aguarda o evento de carregamento completo do DOM antes do código ser executado dentro da função
    const display = document.querySelector('.calculator_display') // seleciona o elemento HTML com a classe .calculator_display e armazena na vaiavel display
    const buttons = document.querySelector('calculator_keys button') // seleciona todos os botões com a classe .calculator_keys e armazena na variável buutons.

    buttons.forEach(button => { //itera cada botão
        button.addEventListener('click',()=> [
            //lógica para tratar os cliques nos botões
            //posso usar switch/case para lidar com diferentes operações
            // atualizar o display conforme o necessário
        ])
    })
})