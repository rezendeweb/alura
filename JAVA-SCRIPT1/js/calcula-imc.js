console.log("fui carregado de um arquivo externo");

//console.log(document.querySelector("h1"));//O querySelector consulta no html
var titulo = document.querySelector(".titulo"); //consulta por classe
console.log(titulo);
console.log(titulo.textContent); //carrega apenas o conteudo dentro da tag

titulo.textContent = "Aparecida Nutricionista" // alterando o conteúdo

/*
//Forma de buscar apenas um conteúdo
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso<=0 || peso >= 1000){
    console.log("Peso Inválido!")
    pesoValido = false;
    tdImc.textContent = "Peso Inválido!";
}

if(altura<=0 || altura >= 3.00){ //Or ||
    console.log("Altura Inválido!")
    alturaValida = false;
    tdImc.textContent = "Altura Inválido!";
}

if (pesoValido && alturaValida) { //And &&
    var imc = peso/(altura*altura); //100/ 2.0*2.0 = 100/4 = 25
    tdImc.textContent = imc;
    console.log(imc);
}else{
    tdImc.textContent = "Altura e/ou peso inválidos!";
}*/

//Forma para buscar uma lista
var pacientes = document.querySelectorAll(".paciente");

//tamanho de uma lista
for( var i = 0; i < pacientes.length; i++){
    //console.log(i);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        console.log("Peso Inválido!")
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        //paciente.style.color = "red";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaValida){ //Or ||
        console.log("Altura Inválido!")
        alturaValida = false;
        tdImc.textContent = "Altura Inválido!";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido"); //adicionando uma classe de css alterando a cor. Jeito correto.
    }
    
    if (pesoValido && alturaValida) { //And &&
        var imc = calculaImc(peso,altura); //100/ 2.0*2.0 = 100/4 = 25
        tdImc.textContent = imc;//Apenas duas casa decimais
        console.log(imc);
    }/*else{
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }*/
}

//Pode ser dessa forma criando uma funcao e chamando ela
//titulo.addEventListener("click",mostraMensagem);

//Ou chamando uma função anonima
titulo.addEventListener("click",function(){
    console.log("Olha só posso chamar uma função anonima")
});

function mostraMensagem(){
    console.log("Olá eu fui clicado!")
}

//Função responsável pelo cálculo do IMC
function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso>=0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura>=0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}