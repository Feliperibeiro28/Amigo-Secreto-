//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let inputAmigo = document.getElementById ("amigo");
let listAmigos = [];
let ulListaAmigos = document.getElementById ("listaAmigos");
let ulResultado = document.getElementById ("resultado");

function adicionarAmigo (){
    listAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML +=  `<li>${inputAmigo.value}</>`;

};

function sortearAmigo(){
    let randon = Math.floor(Math.random() * listAmigos.length);
    let amigoSecreto = listAmigos[random];
    ulResultado.innerHTML `<li>Seu amigo Secreto é ${amigoSecreto}</li>`;

};
