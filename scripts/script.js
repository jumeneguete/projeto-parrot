
let qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));
let resto = qtdd % 2;

while (resto !== 0 || qtdd<4 || qtdd>14){
    qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));
    resto = qtdd % 2;
}

function mostrarCartas (){

    let i = 0;

    while (i<qtdd){

        let carta = document.querySelector(".cards-container");
            carta.innerHTML=`
            <div class="card">
            <img src="imagens/front.png" alt="papagaio-carta oculta" class="parrot-card">
            </div>
            ` + carta.innerHTML;
        i++;
    }
}


mostrarCartas ();


