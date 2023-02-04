const checkbox = document.querySelectorAll('checkbox')

document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
var label = this.nextElementSibling;
    if (this.checked) {
        label.innerHTML = "X";
    } else {
        label.innerHTML = "";
    }
    });
});

window.addEventListener('load', checked)

//Este código busca todas las casillas de verificación en el documento y les agrega un evento click. Cuando se hace clic en una casilla de verificación, se verifica si está marcada o no. Si está marcada, se muestra una "X" en el elemento de etiqueta siguiente. Si no está marcada, se muestra una cadena vacía en lugar de la "X".