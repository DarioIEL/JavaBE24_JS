//dichiaro una variabile
let mioNome = "Dario";
let eta = 35;
let altezza = 1.78;
let secondi = 1002251157;
let presenza = true;

//JAVASCRIPT è un linguaggio DEBOLMENTE TIPIZZATO

//riassegno una variabile
mioNome = "Luisa";
console.log(mioNome + " è di tipo " + typeof mioNome);

//salto da un tipo all'altro e per quanto possibile non è una bella cosa
mioNome = 100;
console.log(mioNome + " è di tipo " + typeof mioNome);

// Esempio tipizzazione debole
let num1 = "3";
let num2 = "5";

// let somma = num1 + num2;
let somma = Number(num1) + Number(num2);
console.log(somma);

let prod = num1 * num2;
console.log(prod);

let sott = num1 - num2;
console.log(sott);

let div = num1/num2;
console.log(div);


console.log(1/0);

let mioNum = 5;
let tuoNum = 9;

let nsSomma = mioNum + tuoNum;
console.log(nsSomma);


// let primoNumUser = window.prompt("Inserisci un numero");
// let secNumUser = window.prompt("Inserisci un altro numero");
// //CAST del dato
// let sommaUser = Number(primoNumUser) + Number(secNumUser);

// console.log(sommaUser);

//Dichiaro un array
//               0         1        2       3         4
let colori = ["giallo", "verde", "rosso", "blu", "arancione"];
let numColori = colori.length; //.length -> proprietà

console.log(colori);
console.log(numColori);

colori.push("azzurro"); //.push() -> metodo
colori.push("viola");
colori.sort();
colori.reverse();
colori.pop(); //elimina l'ultimo elemento
colori.splice(2,2);
console.log( colori.join(" "));

console.log(colori);

//rappresento i colori utilizzando un ciclo for
for(let i = 0; i < colori.length; i++){
    console.log(colori[i]);
}

//recupero l'elemento html della lista UL
let listaColoriUL = document.getElementById("listaColori");

for(let i = 0; i < colori.length; i++){
    listaColoriUL.innerHTML += "<li>" + colori[i] + "</li>"; 
}
