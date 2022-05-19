// seleccionar boton de confirmar
const sendButton = document.querySelector('.enviar-datos');
// aparecer modal
sendButton.addEventListener("click",()=>{
    document.querySelector(".mensaje").innerHTML.value;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
});

// aparecer el boton para ir arriba
window.onscroll = function(){
    if (document.documentElement.scrollTop > 100) {
        let contenedor = document.querySelector(".go-top-container");
        contenedor.classList.add("show");
    } else {
        let contenedor = document.querySelector(".go-top-container");
        contenedor.classList.remove("show");
    };
};
// evento para subir
let contenedor = document.querySelector(".go-top-container");
contenedor.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// prueba scroll hasta el formulario
// let irAform = document.querySelector(".go-to-mesas");
// let formMesas = document.querySelector("titulo-h2");
// irAform.addEventListener("click",()=>{
//     window.scrollTo(formMesas,{
//         behavior: "smooth"
//     });
// });