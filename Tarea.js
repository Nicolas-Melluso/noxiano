let jugadores_noxus = [ // const // camelCase jugadoresNoxus
    "Nicolas",
    "Roy",
    "Charli",
    "Franco",
    "Tomas",
    "JuanCarlos",
    "Matias B",
    "Dakota",
    "Cesar",
    "Juan",
    "Roi",
    "Luciano",
    "Fabi",
];

console.log(jugadores_noxus);

let sacador_rival = true;
let pelota = "doble positiva";
let receptor = true;
let rematador = "central";
let armador = "primer tiempo"
let defensa_rival = false;
let defensa_rival2 = true;


if(sacador_rival == true) {
    console.log(receptor);
    if(pelota === "doble positiva") {
        console.log(armador);
    } else {
        console.log("3° tiempo por 4");
    }
}

if(armador == "primer tiempo") {
    console.log(rematador);
} else {
    console.log("punta");
}

if(rematador == "central") {
    console.log(defensa_rival);
} else {
    console.log(defensa_rival2)
}

let saque = 1;

function iniciarPartido(saque){
if(saque === 1) {
    console.log("saque flotante");
}
if(saque === 2) {
    console.log("saque en potencia");
}
if(saque === 3) {
    console.log("saque flotante con salto");
}
if (saque === 4) {
    console.log("saque de potencia con salto");
}
if (saque === 5) {
    console.log("saque de abajo");
}
if (saque === 6) {
    console.log("saque paraguayo");
}
if (saque === 7) {
    console.log("flotencio");
}
if (saque === 0) {
    console.log("saque errado");
}
}

iniciarPartido(0)