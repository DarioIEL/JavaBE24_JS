let prodotti = ["mela", "nutella", "verdura", "pasta", "pesce"];
let prezzi = [3.5, 5.6, 2.20, 4.6, 18.4];

const listaProdotti = document.getElementById("listaProdotti");
const btnStampa = document.getElementById("btnStampa");
const grandTotal = document.getElementById("grandTotal");
const btnIva = document.getElementById("btnIva");

function stampaScontrino(){
    btnIva.style = "display: block";
    let voce = "";
    
    for(let i = 0; i < prodotti.length; i++){
        let prodottoConMaius = prodotti[i][0].toLocaleUpperCase() + prodotti[i].substring(1);
        voce += "<li>" + prodottoConMaius + " - " + prezzi[i] + " € </li>";
    }
    
    calcolaTotale(prezzi);
    
    listaProdotti.innerHTML = voce;
}

/**
 * @param {Number[]} prezzi 
 */
function calcolaTotale(prezzi){
    
    let totale = 0;

    for(let i = 0; i < prezzi.length; i++){
        totale += prezzi[i];
    }

    grandTotal.innerHTML ="Totale " + totale + " €";
    
}
// btnStampa.onclick = stampaScontrino;

btnStampa.addEventListener("click", stampaScontrino);