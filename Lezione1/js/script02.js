/**
 * @param {String} nome 
 */
function saluta(nome){
    console.log("Ciao " + nome);
}

saluta("Dario");
saluta(true)
saluta(42);



/**
 * 
 * @param {String} nome 
 * @param {String} cognome 
 * @param {Number} eta 
*/
function salutaQualcuno(nome, cognome, eta){
    let elSaluto = document.getElementById("elSaluto");
    console.log(elSaluto);
    console.log("Ciao " + nome + " " + cognome + ". Età " + eta);
    elSaluto.innerHTML = "Ciao " + nome + " " + cognome + ". Età " + eta
}

salutaQualcuno("Laura", "Verdi", 20);