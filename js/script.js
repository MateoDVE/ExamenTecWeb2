const formulario = document.getElementById("form-contacto");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const selectServicio = document.getElementById("tipo-servicio");
const inputMensaje = document.getElementById("mensaje");

const mensajeExito = document.getElementById("form-exito");
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener("submit", function () {
    event.preventDefault();

    let formularioValido = true;

    limpiarErrores();
    mensajeExito.hidden = true;

    if (inputNombre.value.trim() === "") {
        mostrarError(inputNombre, "error-nombre", "El nombre es obligatorio.");
        formularioValido = false;
    }

    if (inputCorreo.value.trim() === "") {
        mostrarError(inputCorreo, "error-correo", "El correo es obligatorio.");
        formularioValido = false;
    } else if (!regexCorreo.test(inputCorreo.value.trim())) {
        mostrarError(inputCorreo, "error-correo", "Ingresa un correo electrónico válido.");
        formularioValido = false;
    }

    if (selectServicio.value === "") {
        mostrarError(selectServicio, "error-servicio", "Selecciona un servicio de interés.");
        formularioValido = false;
    }

    if (inputMensaje.value.trim() === "") {
        mostrarError(inputMensaje, "error-mensaje", "El mensaje no puede estar vacío.");
        formularioValido = false;
    }

    if (formularioValido) {
        mensajeExito.hidden = false;
        formulario.reset();
    }
});

function mostrarError(inputElement, spanId, mensaje) {
    const spanError = document.getElementById(spanId);
    spanError.textContent = mensaje;
    inputElement.classList.add("form-input-error");
}

function limpiarErrores() {
    const spansError = document.querySelectorAll(".form-error");
    spansError.forEach(span => span.textContent = "");

    const inputsError = document.querySelectorAll(".form-input-error");
    inputsError.forEach(input => input.classList.remove("form-input-error"));
}