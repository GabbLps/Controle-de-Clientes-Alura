var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //  Extraindo informações do paciente form
   

    //  Cria a tr a td do paciente 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    // Aqui também adiciona classes nas TDs
    pacienteTr.appendChild(nomeTd);   // Adiciona nomeTd dentro da Tr
    nomeTd.classList.add("info-nome");// Adiciona a classe info-name no nomeTd

    pacienteTr.appendChild(pesoTd);
    pesoTd.classList.add("info-peso");

    pacienteTr.appendChild(alturaTd);
    alturaTd.classList.add("info-altura");

    pacienteTr.appendChild(gorduraTd);
    gorduraTd.classList.add("info-gordura");

    pacienteTr.appendChild(imcTd);
    imcTd.classList.add("info-imc");

    //  Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    console.log(tabela);

});

function obtemPacienteDoFormulario(form) {
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
}