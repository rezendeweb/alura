var campoFiltro = document.querySelector("#filtra-tabela");
//console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
    //console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente")
    //caso cotenha informação é executado o filtro
    if(this.value.length > 0){

        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //expressao regular
            var expressao = new RegExp(this.value,"i");//quando passo por parâmetro o "i", estou falando que aceito maiúsculo e minúsculo

            //Se nao contem o nome coloca a classe invisivel criada no CSS
            if(!expressao.test(nome)){
            //if(nome != this.value){//palavra exata
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    //caso nao tenha conteúdo retiro a classe invisivel de todos
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente= pacientes[i];
            paciente.classList.remove("invisivel");

        }
    }
});