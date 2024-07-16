var contador = 0;

function aumentar(){
    contador++;
    document.getElementById("texto").innerText = "Você apertou o botão " + contador + " vezes.";
}
