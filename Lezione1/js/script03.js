//GEOMETRIA
function calcolaArea(base, altezza){
    let area = base * altezza;
    return area;
}

console.log(calcolaArea(7,9));

let area = calcolaArea(5,4);
console.log(area);


function calcolaVolume(base, altezza, profond){
    // let volume = base * altezza * profond;
    let volume = calcolaArea(base, altezza) * profond;
    return volume;
}

console.log(calcolaVolume(5,6,7));

function calcolaVolume2(area , profond){
    let volume = area * profond;
    return volume;
}

console.log(calcolaVolume2(calcolaArea(4,5), 6));

//Variabile funzionale
let area2 = function(){
    return "L'area vale 400"
}
console.log(area2());


//IIFE
(function(){
    console.log("ciao");
})()
