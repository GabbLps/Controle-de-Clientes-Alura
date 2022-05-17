var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erro = validaPaciente(paciente);

    if(erro.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return; 
    } else {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
    }

    //  Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");  // Cria uma tr
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));   // Adiciona nomeTd dentro da Tr
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");  // Cria uma  td
    td.textContent = dado;   //  Adiciona um valor para essa td
    td.classList.add(classe); // Adiciona a classe no Td
    return td;
}

function validaPaciente(paciente) {

    var erros = [""]

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }else{
        
    }

    if(validaPeso(paciente.altura)){
        erros.push("Altura inválida!");
    }else{
        
    }
    return erros;
}