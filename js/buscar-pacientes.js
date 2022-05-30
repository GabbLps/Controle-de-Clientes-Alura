var btnBuscarPaciente = document.querySelector("#buscar-paciente")
let count = 0;
btnBuscarPaciente.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    
    if(count >= 1){
        exibeErroBuscar("Os pacientes já foram buscados.");
        return;
    }

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel")
        }

    });

    xhr.send();
    count = count +1;
    
});