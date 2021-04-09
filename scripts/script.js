
let qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));

quantidadeDeCartas ();

function quantidadeDeCartas (){
    let resto = qtdd % 2;

    while (resto !== 0 || qtdd<4 || qtdd>14){
        qtdd = parseInt(prompt("Com quantas cartas quer jogar?"));
        resto = qtdd % 2;
    }
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
    
    listaDobrada.sort(comparador);

    while (i<qtdd){

        let carta = document.querySelector(".cards-container");
            carta.innerHTML +=`
            <div class="card viradaParaBaixo" onclick="regraDoJogo(this)">
            <img src="imagens/front.png" alt="papagaio-carta oculta" class="front-side face">
            <img src="imagens/${listaDobrada[i]}" alt="papagaio-carta oculta" class="back-side back-face-init face">
            </div>
            `;
        i++;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

mostrarCartas ();


let contadordeJogadas = 0;
let contadorDeCartasViradas = 0;
let elementoClicadoAnterior;

function regraDoJogo(elementoClicado){

    const paraBaixo = elementoClicado.querySelector(".viradaParaBaixo");

    if (paraBaixo !== undefined){
        virarCarta(elementoClicado);
        contadordeJogadas += 1;
    }

    if (elementoClicadoAnterior == undefined){
        elementoClicadoAnterior ="abc"
    } else {
        let paraCima = elementoClicadoAnterior.querySelector(".viradaParaCima");
        
        if (elementoClicadoAnterior !== undefined && paraCima !== undefined){
            if (elementoClicadoAnterior.innerHTML == elementoClicado.innerHTML){
                console.log(elementoClicadoAnterior)
                elementoClicado.setAttribute('onclick', "");
                elementoClicadoAnterior.setAttribute('onclick', "");
                contadorDeCartasViradas += 2;
                elementoClicado = undefined;
            } else {
                setTimeout(desvirarCarta, 1000, elementoClicado);
                setTimeout(desvirarCarta, 1000, elementoClicadoAnterior);
                elementoClicado = undefined;
            }
        }
    }

    if (contadorDeCartasViradas == qtdd){
        setTimeout(alert, 1000, "Você ganhou em "+contadordeJogadas+ " jogadas!");
    }

    elementoClicadoAnterior = elementoClicado;

}

function desvirarCarta (cartaSelecionada){
    
    let ladoPapagaio = cartaSelecionada.querySelector(".front-side");
    ladoPapagaio.classList.remove("front-face");

    let ladoGif = cartaSelecionada.querySelector(".back-side");
    ladoGif.classList.remove("back-face");
    ladoGif.classList.add("back-face-init");

    cartaSelecionada.classList.add("viradaParaBaixo");
    cartaSelecionada.classList.remove("viradaParaCima");
  
}

function virarCarta (cartaSelecionada){
    
    let ladoPapagaio = cartaSelecionada.querySelector(".front-side");
    ladoPapagaio.classList.add("front-face");

    let ladoGif = cartaSelecionada.querySelector(".back-side");
    ladoGif.classList.add("back-face");
    ladoGif.classList.remove("back-face-init");

    cartaSelecionada.classList.remove("viradaParaBaixo");
    cartaSelecionada.classList.add("viradaParaCima");
  
}

//contadordeJogadas =0
//contador de cartas viradas para cima = 0
//elemento clicado anterior

/*função regra do jogo(elemento clicado){
    Se a carta estiver virada para baixo
        virar a carta para cima
        contador + 1
    saber SE uma carta anterior está virada
            SE as duas cartas forem iguais
                efeito - as duas não desviram
                add uma classe .combinada
                contador de cartas viradas para cima
                elemento clicado anterior + return
            SE elas não forem iguais
                efeito - as duas viram para baixo (1s setTimeOut)
    Verificar se todas as cartas estão viradas para cima
        efeito- se sim, jogar um alert na tela

    elemento clicado anterior
}*/

//tratar se a carta clicada é a mesmma carta - clicou duas vezes na mesma carta - id em cartas com a mesma figura
