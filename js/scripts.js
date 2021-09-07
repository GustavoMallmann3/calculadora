
// ativ1
// function clicar() {
//     var num1 = document.querySelector(".num1").value;
//     var num2 = document.querySelector(".num2").value;
   
//     var resultado = parseInt(num1) + parseInt(num2);
//     document.querySelector(".resultado").innerHTML = resultado;
// }
// function limpar() {
//     document.querySelector(".num1").value = ""
//     document.querySelector(".num2").value = ""

function somarValores(_num1, _num2) {
    const num1 = _num1.value
    const num2 = _num2.value

    const resultado = parseInt(num1) + parseInt(num2)

    document.querySelector('#resultado').value = resultado

}

function limpar(){
    document.getElementById('num1').value = ""
    document.getElementById('num2').value = ""
    document.getElementById('resultado').value = ""

}

// ativ 2
function mostrarMedia(_nota1, _nota2, _nota3) {
    
    const nota1 = _nota1.value
    const nota2 = _nota2.value
    const nota3 = _nota3.value

    const soma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);

    const media = soma / 3

    document.querySelector('#resultado2').value = media

}

function limpar2() {
    document.getElementById('nota1').value = ""
    document.getElementById('nota2').value = ""
    document.getElementById('nota3').value = ""
    document.getElementById('resultado2').value = ""
}

// ativ 3
function calcularPorcentagem(_valorProdutoOriginal, _porcentagem) {
    const valorProdutoOriginal = _valorProdutoOriginal.value
    const porcentagem = _porcentagem.value
    
    
    const valorPercentual = valorProdutoOriginal / 100;
    const valorComDesconto = valorPercentual * porcentagem;
    const valorFinal = valorProdutoOriginal - valorComDesconto;


        document.querySelector('#resultado3').value = valorFinal;
}

function limpar3() {
    document.getElementById('valorProduto').value = ""
    document.getElementById('resultado3').value = ""
} 

// ativ4

function calcularPorcentagem2(_valorProdutoOriginal, _porcentagem2) {
    const valorProdutoOriginal = _valorProdutoOriginal.value
    const porcentagem2 = _porcentagem2.value
    
    
    const valorPercentual = valorProdutoOriginal / 100;
    const valorComDesconto = valorPercentual * porcentagem2;
    const valorFinal = valorProdutoOriginal - valorComDesconto;


        document.querySelector('#resultado4').value = valorFinal;
}

function limpar4() {
    document.getElementById('valorProduto2').value = ""
    document.getElementById('resultado4').value = ""
    document.getElementById('porcentagem2').value = ""
} 

// ativ5
function resposta() {
    const resposta2 = parseInt(document.getElementById('resposta2').value);
    const resposta1 = parseInt(document.getElementById('resposta1').value);
    let resultado = null;

    switch (resposta2) {
        case 1:
            resultado = resposta2;
            break;

        default:
            resultado = resposta2;
    }

    document.getElementById('resultado2').value = resultado;

    let resul = null;

    switch (resposta1) {
        case 1:
            resul = resposta1;
            break;

        default:
            resul = resposta1;

    document.getElementById('resultado1').value = resul;
    }
}



// ativ6

function verificaResultado(_parcelas, _parcelasPagas, _valorParcela,) {

// transformando em apenas valor
const parcelas = _parcelas.value
const parcelasPagas = _parcelasPagas.value
const valorParcela =  _valorParcela.value
// const parcelasPagar = _parcelasPagar

var parcu = document.getElementById('parcelas').value 
var parcelasPacu = document.getElementById('parcelasPagas').value
var valorParcu = document.getElementById('valorParcela').value

var parcelasRestantes = parcu - parcelasPacu

document.querySelector('#parcelasPagar').value = parcelasRestantes

const valorTotal = parcu * valorParcu
const valorPago = parcelasPacu * valorParcu
const faltaPagar = valorTotal - valorPago

document.querySelector('#valorPagar').value = faltaPagar

}

function limpar6() {
    document.getElementById('parcelas').value = ""
    document.getElementById('parcelasPagas').value = ""
    document.getElementById('valorParcela').value = ""
    document.getElementById('valorPagar').value = ""
    document.getElementById('parcelasPagar').value = ""

}


// ativ7

function calcularPicoles(_picoleFruta, _picoleCremoso, _picoleRecheado, _pFruta, _pCremoso, _pRecheado) {
    const picoleFruta = _picoleFruta.value
    const picoleCremoso = _picoleCremoso.value
    const picoleRecheado = _picoleRecheado.value
    const pFruta = _pFruta.value
    const pCremoso = _pCremoso.value
    const pRecheado = _pRecheado.value

    const picoleF = picoleFruta * pFruta
    const picoleC = picoleCremoso * pCremoso
    const picoleR = picoleRecheado * pRecheado    
    
    const resultado5 = picoleC + picoleF + picoleR
    
    document.querySelector('#lucroPicole').value = resultado5

}

function limpar7() {
    document.getElementById('lucroPicole'). value = ""
    document.getElementById('picoleFruta'). value = ""
    document.getElementById('picoleCremoso'). value = ""
    document.getElementById('picoleRecheado'). value = ""

}