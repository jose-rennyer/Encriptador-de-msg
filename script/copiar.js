const buttonCopy = document.querySelector(".copiar");

buttonCopy.addEventListener("click", function(){
    msgEncript.select();
    document.execCommand("copy");
    msgEncript.value = "";

    msgEncript.classList.remove("background-branco");
    document.querySelector(".msg-background").classList.remove("invisivel");
})
