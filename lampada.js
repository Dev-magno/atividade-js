
const btn_onoff = document.querySelector('#btn_onoff')
const lampada = document.querySelector('#lamp')
const icone_onoff = document.querySelector('#icon_onoff')
const body = document.querySelector('body')

let ligado = true
btn_onoff.addEventListener('clik', ()=> {
  if(ligado) {
    lampada.src = 'pic_bulboff.gif'
    icone_onoff.innerHTML = 'togle_of'
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    icone_onoff.style.color = 'white'
    ligado = false
  }else{
    lampada.src = 'pic_bulboff.gif'
    icone_onoff.innerHTML = 'togle_on'
    body.style.backgroundColor = 'black'
    body.style.color = 'black'
    icone_onoff.style.color = 'black'
    ligado = true
  }
})

  

  
