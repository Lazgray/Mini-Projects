// Desafio: Contagem de Caracteres
// Escreva uma função chamada contarCaracteres que recebe uma string como parâmetro e retorna o número de caracteres presentes nela.
// Implemente a função contarCaracteres de acordo com as especificações acima.

function contarCaracteres(string) {
  try {
    string += True
    console.log('Deu certo familia')
  } catch (error) {
    console.log('Deu erro, tente novamente')
  }  
  return string.length;
}

let texto = 'Aqui está uma frase longa'
console.log(contarCaracteres(texto))

// Desafio: Soma de Números
// Implemente uma função chamada somarNumeros que recebe dois números como parâmetros e retorna a soma desses números.
function somarNumeros(num1, num2) {
  const soma = Number(num1 + num2)
  return soma;
}
const resultado = somarNumeros(25, 100)
console.log(`O resultado da soma é ${resultado}`)

// Desafio: Verificar Paridade
// Implemente uma função chamada verificarParidade que recebe um número como parâmetro e retorna verdadeiro se o número for par e falso se o número for ímpar.

function verificarParidade(numero) {
   const boleano = numero % 2 == 0
  return boleano;
}

const boleano = verificarParidade(201)
console.log(`is the number even?? ${boleano}`)

// Desafio: Valor Absoluto
// Implemente uma função chamada obterValorAbsoluto que recebe um número como parâmetro e retorna o seu valor absoluto.

function obterValorAbsoluto(numero) {
  return Math.abs(parseInt(numero));
}

const n_absoluto = -20.592932
const absoluto = obterValorAbsoluto(n_absoluto)
console.log(`o valor absoluto de ${n_absoluto} é ${absoluto}`)


// Desafio: Maior Valor da Lista
// Implemente uma função chamada obterMaiorNumero que recebe uma lista de números como parâmetro e retorna o maior valor presente nessa lista.

function obterMaiorNumero(numeros) {
  let numero_atual = numeros[0]
  numeros.forEach(element => {
  
    if (element > numero_atual) {
      numero_atual = element
    }
  });
  return numero_atual;
}

console.log(obterMaiorNumero([-13,-4,-5, 0]))

// Desafio: Concatenar Strings
// Implemente uma função chamada concatenarStrings que recebe uma lista de strings como parâmetro e retorna a concatenação de todas elas.

function concatenarStrings(strings) {
  let texto_atual = ''
  strings.forEach(element => {
    texto_atual += element
  });
  return texto_atual;
}

lista = ['e','u',' ','s','o','u',' ','f','o','d','a']
console.log(concatenarStrings(lista))

// Desafio: Cálculo da Área do Quadrado
// Implemente uma função chamada calcularAreaQuadrado que recebe o comprimento de um dos lados de um quadrado como parâmetro e retorna a sua área.

function calcularAreaQuadrado(lado) {
  return lado ** 2;
}

console.log(calcularAreaQuadrado(4))

// Desafio: Pontuação do Time de Futebol
// Implemente uma função chamada calcularPontuacao que recebe o número de vitórias (wins) e o número de derrotas (lies) de um time de futebol como parâmetros. A função deve calcular e retornar a pontuação total do time, considerando que a cada vitória o time ganha 3 pontos e a cada derrota ele perde 1 ponto.

function calcularPontuacao(wins, lies) {
  wins *= 3
  return wins - lies;
}

console.log(calcularPontuacao(10, 3))

// Desafio: Gatos e Rato
// Considere uma situação em que um rato está tentando escapar de dois gatos. Os gatos, chamados de "cat1" e "cat2", estão em posições diferentes e se movem em direção ao rato. Queremos descobrir qual dos gatos alcançará o rato primeiro.
// Implemente uma função chamada catAndMouse que recebe três parâmetros: a posição atual do rato e as posições atuais de cat1 e cat2, respectivamente. A função deve retornar:
// "Os gatos trombam e o rato foge." se as distâncias entre o rato e os dois gatos forem iguais, indicando que eles se encontram no mesmo momento e o rato consegue escapar;
// "cat1" se cat1 chegar primeiro ao rato;
// "cat2" se cat2 chegar primeiro ao rato.
// Considere que a distância entre o rato e cada gato é calculada pela diferença entre suas posições.
// Implemente a função catAndMouse de acordo com as especificações acima.

function catAndMouse(mouse, cat1, cat2) {
    let resultado = ''
    let dist_cat1 = Math.abs(cat1 - mouse)
    let dist_cat2 = Math.abs(cat2 - mouse)
    if (dist_cat1 < dist_cat2) {
      resultado = 'cat1'
    } else if (dist_cat1 > dist_cat2) {
      resultado = 'cat2'
    } else {
      resultado = 'Os gatos trombam e o rato foge.'
    }
  return resultado;
}
console.log(catAndMouse(0, 24, -24))