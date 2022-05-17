var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(e){
    console.log(e.target);
    e.tr.target.remove();
});

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo clique!");
        this.remove();  // this = quem for clicado ou recebe a ação/evento.
    });
});
*/