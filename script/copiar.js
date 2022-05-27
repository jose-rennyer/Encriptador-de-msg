const buttonCopy = document.querySelector(".copiar");
let palavraCopiada;

buttonCopy.addEventListener("click", function(){
    if(msgEncript.textContent.length > 0){
        palavraCopiada = msgEncript.textContent;
        msgEncript.textContent = "";
        msgEncript.classList.remove("background-branco")
        selecione(".msg-background").classList.remove("invisivel")
    }else{
        alert("não tem nada escrito aqui")
    }
})

inputMsg.addEventListener("keydown", function(e){
    if(e.crtlKey && e.keyCode == 86){
        inputMsg.value = palavraCopiada
    }
})