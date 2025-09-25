document.addEventListener("DOMContentLoaded", function () {

    // Elementos
    var contenedor_login_registro = document.querySelector(".contenedor__login-registro");
    var formulario_login = document.querySelector(".formulario_login");
    var formulario_registro = document.querySelector(".formulario_registro");
    var caja_trasera_login = document.querySelector(".caja__trasera_login");
    var caja_trasera_registro = document.querySelector(".caja__trasera_registro");

    // Botones
    var btn_iniciar_sesion = document.getElementById("btn_iniciar_sesion");
    var btn_registrarse = document.getElementById("btn_registrarse");

    // Eventos de clic
    btn_iniciar_sesion.addEventListener("click", iniciarSesion);
    btn_registrarse.addEventListener("click", registro);
    window.addEventListener("resize", anchoPagina);

    // Función para manejar el tamaño de la ventana y el diseño
    function anchoPagina() {
        if (window.innerWidth > 850) {
            caja_trasera_login.style.display = "block";
            caja_trasera_registro.style.display = "block";
        } else {
            caja_trasera_registro.style.display = "block";
            caja_trasera_registro.style.opacity = "1";
            caja_trasera_login.style.display = "none";
            formulario_login.style.display = "block";
            formulario_registro.style.display = "none";
            contenedor_login_registro.style.left = "0px";
        }
    }

    // Función para cambiar a la vista de login
    function iniciarSesion() {
        if (window.innerWidth > 850) {
            formulario_registro.style.display = "none";
            contenedor_login_registro.style.left = "10px";
            formulario_login.style.display = "block";
            caja_trasera_registro.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        } else {
            formulario_registro.style.display = "none";
            contenedor_login_registro.style.left = "0px";
            formulario_login.style.display = "block";
            caja_trasera_registro.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    // Función para cambiar a la vista de registro
    function registro() {
        if (window.innerWidth > 850) {
            formulario_registro.style.display = "block";
            contenedor_login_registro.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_registro.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        } else {
            formulario_registro.style.display = "block";
            contenedor_login_registro.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_registro.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }
    }

    // Llamamos a la función para ajustar el diseño al cargar la página
    anchoPagina();

});