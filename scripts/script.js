
let qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));
let resto = qtdd % 2;

while (resto !== 0 || qtdd<4 || qtdd>14){
    qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));
    resto = qtdd % 2;
}

function mostrarCartas (){

    let listaImagens = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
    let i = 0;

    let listaDobrada = [];

    for (let i =0; i < qtdd/2; i++){
        //listaDobrada[i] = listaImagens[i];
       //listaDobrada[i+1] = listaImagens[i];

        listaDobrada.push(listaImagens[i]);
        listaDobrada.push(listaImagens[i]);
    }

    while (i<qtdd){

        let carta = document.querySelector(".cards-container");
            carta.innerHTML=`
            <div class="card" onclick="virarCarta(this)">
            <img src="imagens/front.png" alt="papagaio-carta oculta" class="front-side face">
            <img src="imagens/${listaDobrada[i]}" alt="papagaio-carta oculta" class="back-side back-face-init face">
            </div>
            ` + carta.innerHTML;
        i++;
    }
}


mostrarCartas ();

function virarCarta (cartaSelecionada){
    let primeiraCarta = cartaSelecionada.querySelector(".front-side");
    primeiraCarta.classList.add("front-face");

    let segundaCarta = cartaSelecionada.querySelector(".back-side");
    segundaCarta.classList.add("back-face");
    segundaCarta.classList.remove("back-face-init");
}


