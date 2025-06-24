
const luzVermelha = document.getElementById("vermelha");
const luzAmarela = document.getElementById("amarela");
const luzVerde = document.getElementById("verde");

const botaoVermelho = document.getElementById("botaoVermelho") ;
const botaoAmarelo = document.getElementById("botaoAmarelo") ;
const botaoVerde = document.getElementById("botaoVerde") ;

const stop = document.getElementById("stop");
const start = document.getElementById("start");

let intervaloId = null;

function desligarLuzes(){
    luzVermelha.style.backgroundColor = "#555";
    luzAmarela.style.backgroundColor = "#555";
    luzVerde.style.backgroundColor = "#555";
    
    
}
function ligarVermelha(){
    desligarLuzes();
    luzVermelha.style.backgroundColor = "red";
}
function ligarAmarela(){
    desligarLuzes();
    luzAmarela.style.backgroundColor = "yellow";
}
function ligarVerde(){
    desligarLuzes();
    luzVerde.style.backgroundColor = "green";
}
botaoVermelho.addEventListener ("click",ligarVermelha);
botaoAmarelo.addEventListener ("click",ligarAmarela);
botaoVerde.addEventListener ("click",ligarVerde);

function semaforoAutomatico(){
    let estado = 0;

    ligarVermelha();

    intervaloId = setInterval(() =>{
        if( estado === 0) {
            ligarVermelha();
        }
        else if (estado === 1) {
            ligarVerde();
        }
        else if (estado === 2) {
            ligarAmarela();
        }
    estado = (estado + 1) % 3;
 } , 3000);
}

stop.addEventListener("click", () =>{ 
    clearInterval(intervaloId)
    desligarLuzes()});


start.addEventListener("click", () => {
  clearInterval(intervaloId); 
  semaforoAutomatico();
});

semaforoAutomatico();