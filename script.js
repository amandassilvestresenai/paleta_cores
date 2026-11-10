let tela = document.querySelector("#tela-pintura");/*é um comando do JS para buscar um elemento dentro de seu HTML.. utilizando as mesmas regras de seleção que usamos no CSS.*/
let corlilas = document.querySelector("#pincel-lilas"); 
let corverdeagua = document.querySelector("#pincel-verdeagua");
let corvermelho = document.querySelector("#pincel-vermelho");
let corlaranja = document.querySelector("#pincel-laranja");
let cormarrom = document.querySelector("#pincel-marrom");
let corpreto = document.querySelector("#pincel-preto");
let coramarelo = document.querySelector("#pincel-amarelo");
let corrosa = document.querySelector("#pincel-rosa");
let corverde = document.querySelector("#pincel-verde");
let nomeCor = document.querySelector("h3");

corlilas.addEventListener("click", lilas);
corverdeagua.addEventListener("click", verdeagua);
corvermelho.addEventListener("click", vermelho);
corlaranja.addEventListener("click", laranja);
cormarrom.addEventListener("click", marrom);
corpreto.addEventListener("click", preto);
coramarelo.addEventListener("click", amarelo);
corrosa.addEventListener("click", rosa);
corverde.addEventListener("click", verde);

function lilas(){
    tela.style.background = "rgb(173, 10, 227)";
    nomeCor.innerHTML = "Lilas"; /*Propriedade de elementos HTML no JS usada para alterar e ler todo o comando de uma tag */
}
function verdeagua(){
    tela.style.background = "rgb(9, 244, 248)";
    nomeCor.innerHTML = "Verde Agua";
}
function vermelho(){
    tela.style.background = "rgb(255, 0, 0)";
    nomeCor.innerHTML = "Vermelho";
}
function laranja(){
    tela.style.background = "rgb(255, 153, 0)";
    nomeCor.innerHTML = "Laranja";
}
function marrom(){
    tela.style.background = "rgb(109, 62, 8)";
    nomeCor.innerHTML = "Marrom";
}
function preto(){
    tela.style.background = "rgb(0, 0, 0)";
    nomeCor.innerHTML = "Preto";
}
function amarelo(){
    tela.style.background = "rgb(238, 255, 0)";
    nomeCor.innerHTML = "Amarelo";
}
function rosa(){
    tela.style.background = "rgb(255, 0, 179)";
    nomeCor.innerHTML = "Rosa";
}
function verde(){
    tela.style.background = "rgb(31, 205, 34)";
    nomeCor.innerHTML = "Verde";
}