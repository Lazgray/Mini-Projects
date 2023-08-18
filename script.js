
let span = document.getElementById('letter')
let passou = false
span.style.position = 'relative'
let posh = 0
let posv = 0

function colorir() {
  let cor = (Math.floor(Math.random() * 6));

  switch (cor) {
    case 1:
      span.style.color = 'orange'
      break;
    case 2:
      span.style.color = 'red'
      break;    
    case 3:
      span.style.color = 'green'
      break;
    case 4:
      span.style.color = 'blue'
      break;
    case 5:
      span.style.color = 'purple'
      break;
    default:
      span.style.color = 'dark yellow'
      break;
  }
}


function direcaoAleatoria(){
  let dire = 0
  aleatorio = parseInt(Math.random() * 2 % 2) 
  if (aleatorio == 1) {
    dire = -2
  } else {
    dire = 2
  }
  return dire;
} 


function animarTexto() {
  let txtbox = document.getElementById('txtbox')
  let texto = txtbox.value
  let span = document.getElementById('letter')
  if (texto.length >= 30 || texto.length == 0) {
    alert('Escreva um texto com menos de 30 letrás ou escreva algo')
  } else {
    span.innerText = `${texto}`
    span.style.fontFamily = 'monospace'
    tamanho = txtbox.value.length

    let h = 0
    let v = 0
    let addh = -2
    let addv = 0
    
    const tempo = setInterval(() => {

      if (h <= -186) { 
        addh = 2
        
        colorir()
      } else if (h >= 5) {
        addh = -2
        
        colorir()
      } else if (v >= (150 - tamanho * 3.5)) {
        addv = -2    
          
        colorir()
      } else if (v <= (-150 + tamanho * 3.5)) {
        addv = 2
         
        colorir()
      }
        span.style.bottom = `${h}px`
        span.style.left = `${v}px`
        h += addh
        v += addv

    }, 20);
    if (passou == true) {
      clearInterval(tempo)
    } else {
      addv = direcaoAleatoria()
    }
     passou = true
  }
}



// 2
//-186
// 150
//-150