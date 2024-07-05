
  function ligar(){
    var imagem = document.getElementById('myImg').src
    var imagem_ligado = 'pic_bulboff-on.gif' 
    var imagem_desligado = 'pic_bulboff-of.gif'

    if(imagem == imagem_ligado){
        document.getElementById('myImg').src = imagem_desligado
    }

    else{
        document.getElementById('myImg').src = imagem_desligado
    }
  }

  document.getElementById('myImg').addEventListener('click', ligarDesligar)