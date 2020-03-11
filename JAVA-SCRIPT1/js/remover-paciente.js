//Selecionar todos os pacientes
var pacientes = document.querySelectorAll(".paciente");

/*
//Colocando evento para cada paciente
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        //console.log("Fui clicado com duplo click");
        //o this é atrelado ao dono do evento
        this.remove();
    });
});*/

//ao invés de criar um evento para cada paciente colocaremos o pai de todos para escutar
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //TR
    //caso eu usse essa função irá remover a tabela toda porque o this é atrelado ao dono do evento e o dono é a tabela
    //this.remove();
    //Caso utilizar a função abaixo irá remover apenas a td
    //event.target.remove();
    //Removendo com as variáveis criadas acima
    //paiDoAlvo.remove();
    //Remove o conteudo utilizando o CSS
    event.target.parentNode.classList.add("fadeOut");
    
    //Segurando um tempo para executar a ação de dentro
    setTimeout(function(){
        //Remove a linha toda
        event.target.parentNode.remove();
    },500);

});