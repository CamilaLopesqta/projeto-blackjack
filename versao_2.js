/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    function comprarCarta() {
      // Cria array de cartas
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
      // Cria array de naipes
      const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
      // Sorteia uma carta
      const numero = cartas[Math.floor(Math.random() * 13)]
    
      // Sorteia um naipe
      const naipe = naipes[Math.floor(Math.random() * 4)]
    
      let valor
    
      // Verifica se é uma das letras e coloca o valor correspondente na variável valor
      if (numero === "A") {
        valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
      } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
      }
    
      // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
    
      return carta
    }

let usuario = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]
let computador = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]

confirm("Boas vindas ao jogo de BlackJack! Quer iniciar uma nova rodada?")
let somaPrimeiraRodada = usuario[0].valor + usuario[1].valor
alert(`Suas cartas são: ${usuario[0].texto} e ${usuario[1].texto}. A soma das cartas do usuário é: ${somaPrimeiraRodada}. \nA carta revelada do computador é: ${computador[0].texto}`)

let somaSegundaRodada = somaPrimeiraRodada + usuario[2].valor
let somaPc1 = computador[0].valor + computador[1].valor
let somaPc2 = somaPc1.valor + computador[2].valor
let somaTerceiraRodada = somaSegundaRodada + usuario[3].valor

if (confirm("Deseja comprar mais uma carta?")){
  let somaSegundaRodada = somaPrimeiraRodada + usuario[2].valor
  let somaPc1 = computador[0].valor + computador[1].valor
  alert(`Suas cartas são: ${usuario[0].texto}, ${usuario[1].texto} e ${usuario[2].texto}. A soma das cartas do usuário é: ${somaSegundaRodada}. \nAs cartas reveladas do computador são: ${computador[0].texto} e ${computador[1].texto}. \nA soma do computador é: ${somaPc1} `)
 } if else (somaPrimeiraRodada.valor < 21){
    alert("O Usuario ganhou! Fim de jogo")}
  /* 
if (confirm("Deseja comprar mais uma carta?")){
    let somaTerceiraRodada = somaSegundaRodada + usuario[3].valor
    let somaPc2 = somaPc1.valor + computador[2].valor
    alert(`Suas cartas são: ${usuario[0].texto}, ${usuario[1].texto}, ${usuario[2].texto} e ${usuario[3].texto}. A soma das cartas do usuário é: ${somaTerceiraRodada}. \nAs cartas reveladas do computador são: ${computador[0].texto}, ${computador[1].texto} e ${computador[2].texto}. \nA soma do computador é: ${somaPc2}`)
    } else ((somaTerceiraRodada.valor > 21) && (somaPc2.valor < 21))
    alert("O Computador ganhou!")
  } */