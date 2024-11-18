let title = document.querySelector('h1');
title.innerHTML = 'Hora do Desafio';

function ClickBTN(){
    console.log('o btn foi clicado!');
}

function AlertBTN(){
    alert('Eu amo JS');
}

function QueryBTN(){
    let nomeCidade = prompt('Informe o nome de uma cidade.');
    let msg = `Estive em ${nomeCidade} e lembrei de voce!`;
    alert(msg);
}

function sumBTN(){
    let num1, num2, sum, msg;

    num1 = parseInt(prompt('Informe numero 1'));
    num2 = parseInt(prompt('Informe numero 2'));
    sum = num1 + num2;
    msg = `Resultado da soma dos numeros(${num1}|${num2}): ${sum})`
    alert(msg);
}