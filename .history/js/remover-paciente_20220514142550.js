var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo clique!");
        this.remove();  // this = quem for clicado ou recebe a ação/evento.
    });
});