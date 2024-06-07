// PreEntrega 1 Coder Js

// Declaro las constantes con array de 3 objetos
const productos = [
  {
    nombre: "Taladro a Bateria",
    precio: 2900,
    sku: 222
  },
  {
    nombre: "Sierra Circular",
    precio: 3500,
    sku: 333
  },
  {
    nombre: "Destornillador Eléctrico",
    precio: 1500,
    sku: 444
  },
];

// saludo a usuarios

function saludarUsuario() {
  let nombre = prompt("Por favor, ingresa tu nombre:");
  if (nombre) {
    alert("¡Hola, " + nombre + "! Bienvenido/a.");
  } else {
    alert("No ingresaste un nombre.");
  }
  preguntarPais(); // Llamar a la función país después de saludo
}

// Pregunto país 
function preguntarPais() {
  let pais = prompt("Por favor, ingresa el país donde resides:");
  if (pais) {
    alert("Resides en " + pais + ".");
  } else {
    alert("No ingresaste un país.");
  }
}

// confirmo mensaje
function confirmarAccion(mensaje) {
  return confirm(mensaje);
}

// Lógica principal del programa
function buscarProducto() {
  let continuar = true;

  while (continuar) {
    const skuIngresado = prompt("Por favor, ingrese el SKU del producto para saber el precio: \n 222 - Taladro a Bateria \n 333 - Sierra Circular \n 444 - Destornillador Electrico");
  
    const productoEncontrado = productos.find(producto => producto.sku == skuIngresado);
  
    if (productoEncontrado) {
      confirm(`Producto encontrado: \n Nombre: ${productoEncontrado.nombre} \n Precio: ${productoEncontrado.precio}`);
    } else {
      alert("El SKU ingresado es incorrecto.");
    }
  
    const respuesta = confirmarAccion("¿Desea buscar otro SKU?");
    if (!respuesta) {
      continuar = false;
    }
  }

  alert("Proceso finalizado.");
}

// ejecuto
saludarUsuario();
buscarProducto();
