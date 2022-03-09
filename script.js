let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputCerveja = document.getElementById("cerveja");
let inputRefrigerante = document.getElementById("refrigerante");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function limpar() {
    resultado.innerHTML = ""; 
}

function calcular() {
    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let cerveja = inputCerveja.value;
    let refrigerante = inputRefrigerante.value;

    let qdtCarne = carnePP(duracao) * homens + carnePM(duracao) * mulheres + ((carnePP(duracao) * criancas) / 2 );
    console.log("carne");   console.log(qdtCarne);

    let qdtCerveja = cervejaPP(duracao) * cerveja;
    console.log("cerveja");  console.log(qdtCerveja);

    let qdtRefrigerante = refrigerantePP(duracao) * refrigerante;
    console.log("refrigerante");  console.log(qdtRefrigerante);

    let qtdAcompanhamento = homens * 200 + mulheres * 200 + criancas * 100;
    console.log("acompanhamento");  console.log(qtdAcompanhamento);

    let qtdCarvao = (qdtCarne * 240) / 200;
    console.log("carvão"); console.log(qtdCarvao);

    resultado.innerHTML = `<h1>Resultados</h1>`
    resultado.innerHTML += `<p><img src="./assets/carne.png">
                            ${qdtCarne / 1000} Kg de Carne<br></p>`
    resultado.innerHTML += `<p><img src="./assets/cerveja.png">
                            ${qdtCerveja / 1000} L de Cerveja<br></p>`
    resultado.innerHTML += `<p><img src="./assets/refrigerantes.png">
                            ${qdtRefrigerante / 1000} L de Refrigerante ou Suco<br></p>`
    resultado.innerHTML += `<p><img src="./assets/pao.png">
                            ${qtdAcompanhamento} g de Acompanhamentos<br></p>`
    resultado.innerHTML += `<p><img src="./assets/carvao.png">
                            ${qtdCarvao / 1000} Kg de Carvão<br><br></p>`
    resultado.innerHTML += `<p><b>Esperamos que o site tenha de ajudado e desejamos que tenha um ótimo churrasco!</b></p><br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <img src="./assets/churrasco.png">
                            <img src="./assets/cozinhar.png">
                            <img src="./assets/churrasco.png">
                            <img src="./assets/cozinhar.png">`
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 650;
    }else{
        return 400;
    }
}

function carnePM(duracao) {
    if(duracao >= 6) {
        return 465;
    }else{
        return 300;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    }else{
        return 1200;
    }
}

function refrigerantePP(duracao) {
    if(duracao >= 6) {
        return 2000;
    }else{
        return 1500;
    }
}