var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    
    //pedindo para o javacript abrir o site
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    //quando o javacript carregar fazer essa ação
    xhr.addEventListener("load", function(){
        
        //Valida se consegui carregar minha página (200 é que deu tudo certo)
        if(xhr.status == 200){
            //Caso nao dê erro deixo invisivel a msg de erro
            erroAjax.classList.add("invisivel");
            //console.log(xhr.responseText);
            var resposta = xhr.responseText;
            //typeof retorar o tipo da variável
            //console.log(resposta);
            //console.log(typeof resposta);
            //transforma o JSON e um array
            var pacientes = JSON.parse(resposta);

            //console.log(pacientes);
            //console.log(typeof pacientes);
            
            pacientes.forEach(function(paciente) {
                //função que adiciona paciente do fonte form.js
                adicionaPacienteNaTabela(paciente);  
            });

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();
});