let btn = document.querySelectorAll(".return");

btn.forEach(recorrerBtn);

function recorrerBtn(btn){
    btn.addEventListener("click", animaciones);
}
function animaciones(ev){
    ev.preventDefault();
    
    let animaciones = document.querySelector(".content");
    animaciones.classList.remove("animate__fadeInDown", "animate__animated");
    animaciones.classList.add("animate__animated", "animate__fadeOutUp");

    setTimeout(cerrar, 600);

    function cerrar() {
        location.href = "../index.html";
    }
}