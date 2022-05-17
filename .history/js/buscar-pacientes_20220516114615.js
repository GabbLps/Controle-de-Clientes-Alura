var btnBuscarPaciente = document.querySelector("#buscar-paciente")

btnBuscarPaciente.addEventListener("click", function(){
    console.log("Buscando paciente!");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
});