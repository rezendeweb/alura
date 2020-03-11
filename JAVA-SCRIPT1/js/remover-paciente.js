//Selecionar todos os pacientes
var pacientes = document.querySelectorAll(".paciente");

/*
//Colocando evento para cada paciente
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        //console.log("Fui clicado com duplo click");
        //o this � atrelado ao dono do evento
        this.remove();
    });
});*/

//ao inv�s de criar um evento para cada paciente colocaremos o pai de todos para escutar
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //TR
    //caso eu usse essa fun��o ir� remover a tabela toda porque o this � atrelado ao dono do evento e o dono � a tabela
    //this.remove();
    //Caso utilizar a fun��o abaixo ir� remover apenas a td
    //event.target.remove();
    //Removendo com as vari�veis criadas acima
    //paiDoAlvo.remove();
    //Remove o conteudo utilizando o CSS
    event.target.parentNode.classList.add("fadeOut");
    
    //Segurando um tempo para executar a a��o de dentro
    setTimeout(function(){
        //Remove a linha toda
        event.target.parentNode.remove();
    },500);

});