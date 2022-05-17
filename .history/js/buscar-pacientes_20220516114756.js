var btnBuscarPaciente = document.querySelector("#buscar-paciente")

btnBuscarPaciente.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        console.log("Carregado");
    });

    xhr.send();
});