var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    //agora com a classe para sumir devagarinho na remoção
    event.target.parentNode.classList.add("fadeOut");
    //função para não remover instantaneamente e fazer o fadeOut.
    setTimeout(function() {
        event.target.parentNode.remove(); //tudo o que foi feito abaixo, numa só linha.
    }, 500); // 500 milisegundos = 1/2 segundo;

    /*
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.remove();
    */
    // ou tudo numa linha só: 
});