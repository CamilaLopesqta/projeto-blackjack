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
const mensagem = (confirm("Boas vindas ao jogo de BlackJack! Quer iniciar uma nova rodada?"))

const usuario = comprarCarta()
const usuario1 = comprarCarta()
const computador = comprarCarta()
const computador1 = comprarCarta()

let somaCartaUsuario = usuario.valor+usuario1.valor
let somaCartaComputador = computador.valor+computador1.valor
//console.log(usuario);
//console.log(usuario1);

   if (mensagem === true){
      
      if (somaCartaUsuario === somaCartaComputador){
         console.log("Cartas do usuário:", "\n","primeira carta:", usuario, "\n","segunda carta:", usuario1, "\n", "Soma:", somaCartaUsuario);
         console.log("Cartas do computador:", "\n", "primeira carta:", computador, "\n", "segunda carta:", computador1, "\n", "Soma:", somaCartaComputador);
         console.log("Empate");
      }
      if (somaCartaUsuario < somaCartaComputador){
         console.log("Cartas do usuário:", "\n","primeira carta:", usuario, "\n","segunda carta:", usuario1, "\n", "Soma:", somaCartaUsuario);
         console.log("Cartas do computador:", "\n", "primeira carta:", computador, "\n", "segunda carta:", computador1, "\n", "Soma:", somaCartaComputador);
         console.log("O computador ganhou");
      }
      if (somaCartaUsuario > somaCartaComputador){
         console.log("Cartas do usuário:", "\n","primeira carta:", usuario, "\n","segunda carta:", usuario1, "\n", "Soma:", somaCartaUsuario);
         console.log("Cartas do computador:", "\n", "primeira carta:", computador, "\n", "segunda carta:", computador1, "\n", "Soma:", somaCartaComputador);
         console.log("O usuário ganhou");
   }
   }else{ (mensagem === false)
         console.log("O jogo acabou");
   }