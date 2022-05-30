const inputMsg = document.querySelector(".field-desencriptar")
const buttonEncript = document.querySelector(".encript");
const buttonDesencript = document.querySelector(".desencript");
const msgEncript = document.querySelector(".msg-desencript");
let novaPalavra;
let palavraDesencriptada;


console.log(inputMsg);

let letras = [["a", "haky"], ["e", "enys"], ["i", "kyt"], ["o", "hrkp"], ["u", "kjkszpj"]];

buttonEncript.addEventListener("click", function(){
    if(inputMsg.value.length > 0){
        novaPalavra = inputMsg.value;
        for(let i = 0; i < letras.length; i++){
            if(novaPalavra.includes(letras[i][0])){
                novaPalavra = novaPalavra.replaceAll(letras[i][0], letras[i][1])
            }
        }
        msgEncript.value = novaPalavra;
        msgEncript.classList.add("background-branco")
        removeElemento(".msg-background");
    }  
})

buttonDesencript.addEventListener("click", function(){
    palavraDesencriptada = inputMsg.value;
    if(palavraDesencriptada.length > 0){
        for(let i = 0; i < letras.length; i++){
            if(palavraDesencriptada.includes(letras[i][1])){
                palavraDesencriptada = palavraDesencriptada.replaceAll(letras[i][1], letras[i][0])
            }
        }
        msgEncript.value = palavraDesencriptada;
        msgEncript.classList.add("background-branco")
        removeElemento(".msg-background");
    }

    
})

function selecione(elemento){
    return document.querySelector(elemento)
}
function removeElemento(elemento){
    selecione(elemento).classList.add("invisivel")
}
