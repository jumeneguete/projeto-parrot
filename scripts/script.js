
let qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));
let resto = qtdd % 2;

while (resto !== 0 || qtdd<4 || qtdd>14){
    qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));
    resto = qtdd % 2;
}

console.log("chegou aqui");

