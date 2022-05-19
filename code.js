const sendButton = document.getElementById('enviar-datos');

sendButton.addEventListener("click",()=>{
    document.querySelector(".mensaje").innerHTML.value;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
});