
function limpar(){
    document.getElementById('resultado').innerHTML = ""
}

function voltar(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function add(digito){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + digito
}

function calcular(){
    var cofre = document.getElementById('resultado').innerHTML
    if(cofre){
        try {
            var resultado = eval(cofre); 
            document.getElementById('resultado').innerHTML = resultado
            toque()
        } catch (error) {
            alert("Erro na operação")
        }
    }else{
        document.getElementById('resultado').innerHTML = "Digite um número"
    }
}
function toque() {
    const audio = document.getElementById("som")
    if (audio){
    audio.play();
}}