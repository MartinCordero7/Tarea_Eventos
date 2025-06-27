const colorInput = document.getElementById('color_favorito');
const colorPreview = document.getElementById('colorPreview');
colorInput.addEventListener('input', function () {
    colorPreview.style.background = colorInput.value;
});

document.addEventListener('DOMContentLoaded', function () {
    const fechaInput = document.getElementById('fecha_nacimiento');
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const dd = String(hoy.getDate()).padStart(2, '0');
    const hoyStr = `${yyyy}-${mm}-${dd}`;
    fechaInput.max = hoyStr;


    const horaInput = document.getElementById('hora_registro');
    function setMaxHora() {
        if (fechaInput.value === hoyStr) {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, '0');
            const min = String(now.getMinutes()).padStart(2, '0');
            horaInput.max = `${hh}:${min}`;
        } else {
            horaInput.removeAttribute('max');
        }
    }
    fechaInput.addEventListener('change', setMaxHora);
    setMaxHora();
});

function showValidMessage(input, message) {
    let msg = input.parentNode.querySelector('.valid-feedback-msg');
    if (!msg) {
        msg = document.createElement('div');
        msg.className = 'valid-feedback-msg text-success mt-1';
        input.parentNode.appendChild(msg);
    }
    msg.textContent = message;
    msg.style.display = 'block';
    msg.classList.remove('text-danger');
    msg.classList.add('text-success');
}

function showInvalidMessage(input, message) {
    let msg = input.parentNode.querySelector('.valid-feedback-msg');
    if (!msg) {
        msg = document.createElement('div');
        msg.className = 'valid-feedback-msg text-danger mt-1';
        input.parentNode.appendChild(msg);
    }
    msg.textContent = message;
    msg.style.display = 'block';
    msg.classList.remove('text-success');
    msg.classList.add('text-danger');
}

function hideValidMessage(input) {
    let msg = input.parentNode.querySelector('.valid-feedback-msg');
    if (msg) msg.style.display = 'none';
}

function onNombreInput(input) {
    const value = input.value.trim();
    if (value.length > 1 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
        showValidMessage(input, 'Nombre válido');
    } else if (value.length > 0 && /[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/.test(value)) {
        showInvalidMessage(input, 'No se permiten números ni caracteres especiales');
    } else {
        hideValidMessage(input);
    }
}

function onApellidoInput(input) {
    const value = input.value.trim();
    if (value.length > 1 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
        showValidMessage(input, 'Apellido válido');
    } else if (value.length > 0 && /[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/.test(value)) {
        showInvalidMessage(input, 'No se permiten números ni caracteres especiales');
    } else {
        hideValidMessage(input);
    }
}

function onArchivoChange(input) {
    if (input.files.length > 0 && input.files[0].type === "image/jpeg") {
        showValidMessage(input, 'Archivo JPG válido');
    } else {
        showInvalidMessage(input, 'Debe seleccionar un archivo JPG');
    }
}

function onFechaNacimientoChange(input) {
    if (input.value) {
        showValidMessage(input, 'Fecha válida');
    } else {
        showInvalidMessage(input, 'Ingrese una fecha válida');
    }
}

function onHoraRegistroChange(input) {
    if (input.value) {
        showValidMessage(input, 'Hora válida');
    } else {
        showInvalidMessage(input, 'Ingrese una hora válida');
    }
}

function onTelefonoInput(input) {
    if (/^[0-9]{10,15}$/.test(input.value)) {
        showValidMessage(input, 'Teléfono válido');
    } else {
        showInvalidMessage(input, 'Ingrese un número de teléfono válido (10-15 dígitos)');
    }
}

function onGeneroChange(input) {
    if (input.checked) {
        showValidMessage(input, 'Género seleccionado');
    } else {
        showInvalidMessage(input, 'Seleccione un género');
    }
}

function onColorFavoritoInput(input) {
    const colorPreview = document.getElementById('colorPreview');
    colorPreview.style.background = input.value;
    if (input.value) {
        showValidMessage(input, 'Color seleccionado');
    } else {
        showInvalidMessage(input, 'Seleccione un color');
    }
}

function onRedSocialInput(input) {
    if (input.value.startsWith('http')) {
        showValidMessage(input, 'URL válida');
    } else if (input.value.length > 0) {
        showInvalidMessage(input, 'Ingrese una URL válida (debe comenzar con http)');
    } else {
        hideValidMessage(input);
    }
}

function onPasswordInput(input) {
    if (input.value.length >= 6) {
        showValidMessage(input, 'Contraseña válida');
    } else {
        showInvalidMessage(input, 'La contraseña debe tener al menos 6 caracteres');
    }
}

function onPaisChange(input) {
    if (input.value) {
        showValidMessage(input, 'País seleccionado');
    } else {
        showInvalidMessage(input, 'Seleccione un país');
    }
}

function onNivelInput(input) {
    showValidMessage(input, `Nivel: ${input.value}`);
}

function onEmailInput(input) {
    if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(input.value)) {
        showValidMessage(input, 'Correo electrónico válido');
    } else if (input.value.length > 0) {
        showInvalidMessage(input, 'Ingrese un correo electrónico válido');
    } else {
        hideValidMessage(input);
    }
}

function onTerminosChange(input) {
    if (input.checked) {
        showValidMessage(input, '¡Gracias por aceptar los términos y condiciones!');
    } else {
        showInvalidMessage(input, 'Debe aceptar los términos y condiciones');
    }
}

function onComentariosInput(input) {
    if (input.value.trim().length > 0) {
        showValidMessage(input, '¡Gracias por dejarnos tu comentario!');
    } else {
        showInvalidMessage(input, 'Ingrese un comentario');
    }
}

