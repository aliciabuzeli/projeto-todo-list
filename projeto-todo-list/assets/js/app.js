var listaTarefas = []

function carregarInformacoes(){
    document.getElementById("numTarefas").innerHTML = listaTarefas.length

if (listaTarefas.length === 0) {
    document.getElementById("listaTarefas").style.display = "flex"
    document.getElementById("listaTarefas").style.display = "none"
} else {
    document.getElementById("semTarefas").style.display = "flex"
    document.getElementById("semTarefas").style.display = "none"
} 
}

carregarInformacoes()

var formCadastro = document.getElementById("formCadastroTarefa")

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    var dadosForm = new FormData(this)

    var tarefa = dadosForm.get("tarefa")
    
    listaTarefas.push(tarefa)

    carregarInformacoes()
})
