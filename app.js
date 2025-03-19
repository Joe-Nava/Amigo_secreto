const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos")
const ulResultado = document.getElementById("resultado")

function agregarAmigo() {
    if (inputAmigo.value == ""){
        alert("Aún no has colocado un nombre de amigo");
        return;
    };
    
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector("#amigo").value = '';
}

function sortearAmigo(){
    const numAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[numAleatorio]
    ulResultado.innerHTML = `<li>El amigo secreto sorteado fue: ${amigoSecreto}</li>`    
};
