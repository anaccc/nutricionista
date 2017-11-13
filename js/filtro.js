var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var paciente = document.querySelectorAll(".paciente");

    if(this.value.length > 0){ // tem algo digitado
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i")
            if(expressao.test(nome)){
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");   
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

