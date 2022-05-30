var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(e){
    e.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        e.target.parentNode.remove();
        var mensagensErro = document.querySelector("#erro-buscar-paciente");
        mensagensErro.innerHTML = "";
    }, 500);

    count = 0;

      // e. target = o filho que é clicado
});  // parentNode é o pai dele.     e.target = alvoDoEvento e o parentNode = o pai dele.

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo clique!");
        this.remove();  // this = quem for clicado ou recebe a ação/evento.
    });
});
*/