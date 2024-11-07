//VARIABILE GLOBALE
let nomeDocente = "Mauro Bogliaccino";

//dichiaro una funzione
function saluta(){
    //Variabili LOCALI
    let nome = "Dario";
    let cognome = "Mennillo";
    console.log("Ciao " + nome + " " + cognome);
    console.log("La responsabile corso è " + respoCorso);
    avvisa();
}

let respoCorso = "Egle Risola";
function avvisa(){
    let respoCorso = "Valentina Favole";
    let avviso = "Attenzione, sei ancora in Console";
    console.log(avviso);
    console.log("Il tuo docente " + nomeDocente + " is watching you!"); 
    console.log("La responsabile corso è " + respoCorso);

}



//richiamo la funzione
saluta();
// avvisa();

// for(let i = 0; i < 10; i++){
    //     avvisa()
    // }
    
console.log("Il tuo docente " + nomeDocente + " is watching you!"); 
// console.log("Mi chiamo " + nome);


for(let i = 0; i < 5; i++){
    var nome = "Paolo";
    console.log("Giro " + i );
}

console.log(nome);
console.log(i);

