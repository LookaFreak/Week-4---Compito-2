// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

// const marco = {
//   name: "Marco",
//   lastName: "Rossi",
//   isAmbassador: true,
// };

// const paul = {
//   name: "Paul",
//   lastName: "Flynn",
//   isAmbassador: false,
// };

// const amy = {
//   name: "Amy",
//   lastName: "Reed",
//   isAmbassador: false,
// };

// const prices = [34, 5, 2];
// const shippingCost = 50;
// let utenteCheEffettuaLAcquisto = amy;  // Utente che fa l'acquisto

// let totalCartCost = 0;

// for (let i = 0; i < prices.length; i++) {
//   totalCartCost += prices[i];
// }

// if (utenteCheEffettuaLAcquisto.isAmbassador) {
//   totalCartCost *= 0.7; // Applica lo sconto del 30%
// }

// if (totalCartCost <= 100) {
//   totalCartCost += shippingCost; // Aggiungi il costo di spedizione
// }

// console.log("Il costo totale del carrello è: " + totalCartCost);

// const users = [marco, paul, amy];
// const ambassadorUsers = [];

// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   const fullName = user.name + " " + user.lastName;

//   if (user.isAmbassador) {
//     ambassadorUsers.push(user);
//     console.log(fullName + " è un ambassador");
//   } else {
//     console.log(fullName + " non è un ambassador");
//   }
// }

// console.log("Lista degli ambassador:");
// console.log(ambassadorUsers);
   


//Extra 1
//Scrivi un programma che dato un numero N, generi un array di N numeri casuali e stampi sia l'array ottenuto che quello invertito.
//  Esempio:
//  Input: N = 5
//  Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

// let N = 5;
// let array = [];

// for (let i = 0; i < N; i++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   array.push(randomNumber);
// }

// console.log("Array ottenuto: ", array);

// let arrayInvertito = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   arrayInvertito.push(array[i]);
// }

// console.log("Array invertito: ", arrayInvertito);



//Extra 2
// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

// Variante:
// Prova ad ordinali in modo crescente.


// let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }

// console.log("Array ordinato in modo decrescente: ", array);



// let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
// for (let i = 0; i < array.length -1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
// if (array[i] > array[j]) {
//   let temp = array[i];
//   array [i] = array[j];
//   array [j] = temp;
// }
//   }
// }

// console.log("Array ordinato in modo crescente: ", array)




//Extra 3
// Operazioni tra array
//   Scrivi un programma che dati:
  
// 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// il tipo di operazione aritmetica da effettuare, una delle seguenti:
// addizione
// sottrazione
// moltiplicazione
// divisione
// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

//   Esempio:
//     Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
//     Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]




// let array1 = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
// let array2 = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];
// let operation = "addizione";

// let resultArray = [];
  
// for (let i = 0; i < array1.length; i++) {
//   let result;
  
//   if (operation === "addizione") {
//     result = array1[i] + array2[i];
//   } else if (operation === "sottrazione") {
//     result = array1[i] - array2[i];
//   } else if (operation === "moltiplicazione") {
//     result = array1[i] * array2[i];
//   } else if (operation === "divisione") {
//     result = array1[i] / array2[i];
//   }
  
//   resultArray.push(result);
// }

// console.log("Array risultato: ", resultArray);



//Extra 4
// un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
// un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
// Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
//   2 numeri uguali => ambo
//   3 numeri uguali => terna
//   4 numeri uguali => quaterna
//   5 numeri uguali => cinquina
//   tutti i numeri uguali => tombola

//   In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
//   in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".




