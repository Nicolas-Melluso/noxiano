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