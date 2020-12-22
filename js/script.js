// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// var numeroCom = [];
// var numeroUtente = [];
//
//
// // numbers without repetition
// while(numeroCom.length < 16){
//   var numero = generaRandom(1,100);
//   if (numeroCom.includes(numero)==false){
//     numeroCom.push(numero);
//   }
//
// }
//
// console.log(numeroCom);
//
// var status = true;
//
// while (numeroUtente.length < 84 && status){
//   var number = parseInt(prompt("insert a number from 1 to 100"));
// if(number>=1 && number <=100){
//   if(numeroCom.includes(number)==true){
//     status = false;
//     alert("total score is " + numeroUtente.length + "points")
//   } else {
//     if (numeroCom.includes(number)==false){
//       numeroUtente.push(number);
//     } else {
//       alert("dont insert value");
//     }
//
//   }
// } else{
//   alert("please insert number from 1 to 100");
// }
// } {
//
// }
//
//
var chances = 100;
var bombList = [];
var numeriConsentiti = [];
var utente = 0;
var punteggio = 0;



while (bombList.length < 16) {
  var numeroBomba = getRandomNumber(100);

  if (bombList.includes(numeroBomba)== false) {
    bombList.push(numeroBomba)
  }
}

while ((numeriConsentiti.length < chances) && (bombList.includes(utente)!==true)) {

utente = parseInt(prompt ('Inserisci un numero da 1 a 100'));
console.log('Scelta utente ' + utente )

controlNumbers(utente);

if(numeriConsentiti.length == chances)
  alert('Hai vinto!');

}


function getRandomNumber(max) {
  return Math.floor(Math.random() * max ) + 1;
}

function controlNumbers(numero) {
  if(bombList.includes(numero)==true){
    alert('Hai perso, hai provato ' + punteggio +'volte prima di trovare la bomba')
  }

  else if (numeriConsentiti.includes(numero)) {
    alert ('Number already inserted,try again.')
  }
  else if (numeriConsentiti.includes(numero) == false) {
    numeriConsentiti.push(numero);
    punteggio = punteggio + 1;
  }
}
console.log('Bomb list is =', bombList)
console.log("valid numbers inserted:", numeriConsentiti)
console.log('chances made', punteggio)
