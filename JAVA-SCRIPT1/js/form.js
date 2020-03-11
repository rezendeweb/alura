var botaoAdicionar = document.querySelector("#adicionar-paciente");

//para não fazer o comportamento padrão do botão é utilizando o event, passando pela função
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    //console.log("Oi eu sou o botão e fui clicado")
    var form = document.querySelector("#form-adiciona");
    
    //carregando o objeto paciente da funcção
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    //Limpa o conteúdo do formulário
    form.reset();
    //limpa os erros quando é incluso com sucesso
    document.querySelector("#mensagens-erro").innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    //Carrega o objeto Tr da função
    var pacienteTr = montaTr(paciente);
    //Carrega as informações da tabela inteira
    var tabela = document.querySelector("#tabela-pacientes");
    //incluindo as informações da tr na tabela
    tabela.appendChild(pacienteTr);

}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //limpa a variável quando é recarregado.
    /*for(var i = 0; i < erros.length; i++){
        var erro = erros[i];
    }*/

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemPacienteDoFormulario(form){
 
    //criando um objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    
    return paciente;
}

function montaTr(paciente){
    //Criar a TR e a TD do paciente
    var pacienteTr = document.createElement("tr");
    
    //adiciona uma class pciente no tr
    pacienteTr.classList.add("paciente");

    //apeendChild coloca as informações dentro do elemente
    //Nesse caso estou colocando as informações da td dentro da tr
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    //Valida Peso - Como o if tem uma linha pode colocar tudo em uma linha
    if(!validaPeso(paciente.peso)) erros.push("O Peso é inválido");
    
    //Valida altura
    if(!validaAltura(paciente.altura)){
        erros.push("A Altura é inválido");
    }

    if(paciente.nome.length <= 0){
        erros.push("O nome não pode ser em branco")
    }
    if(paciente.gordura.length <= 0){
        erros.push("A gordura não pode ser em branco")
    }
    
    if(paciente.peso.length <= 0){
        erros.push("O peso não pode ser em branco")
    }

    if(paciente.altura.length <= 0){
        erros.push("A altura não pode ser em branco")
    } 

    return erros;
}

