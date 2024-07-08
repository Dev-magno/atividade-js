
  function ligarDesligar(){
    var imagem = document.getElementById('myImg')
    var body = document.getElementById('body')
    var ligado = 'pic_bulboff-on.gif' 
    var desligado = 'pic_bulboff-of.gif'

    if (imagem.src.includes(desligado)) {
      imagem.src = ligado;
      body.style.backgroundColor = 'white'
  } else {
      imagem.src = desligado
      body.style.backgroundColor = 'black'
  }

  window.onload = function(){
    document.getElementById('trocar').addEventListener('click', ligarDesligar)
  }

  }

  

  
