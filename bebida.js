let resultado
let bebida = prompt('Qual sua bebida preferida? ')
switch (bebida){
    case 'Coca-cola':
        resultado.innerHTML = "Não exceda! Cuidado com a concentração de açúcar";
        break
    case 'Pepsi':
        resultado.innerHTML = "Tome com moderação";
        break
    case 'Spryt':
        resultado.innerHTML = "Spryt? É uma bebida ruim!";
    default:
        resultado.innerHTML = "Obrigado por participar!";

}

