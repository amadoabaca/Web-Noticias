let pantalla = document.getElementById('pantalla');

function mostrarPantalla(value) {
    pantalla.value += value;
}

function limpiar() {
    pantalla.value = '';
}

function igual() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch(error) {
    pantalla.value = 'Error';
  }
}

function borrarUltimoCaracter() {
  pantalla.value = pantalla.value.slice(0, -1);
}