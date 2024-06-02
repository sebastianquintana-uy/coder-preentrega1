//PreEntrega 1 Coder Js

//Declaro las constantes con array de 3 objetos

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

//control de ciclos while, find para buscar la info del producto

  let continuar = true;

  while (continuar) {
    const skuIngresado = prompt("Por favor, ingrese el SKU del producto para saber el precio: \n 222 - Taladro a Bateria \n 333 - Sierra Electrica \n 444 - Destornillador Electrico");
  
    const productoEncontrado = productos.find(producto => producto.sku == skuIngresado);
  
    if (productoEncontrado) {
      confirm(`Producto encontrado: \n Nombre: ${productoEncontrado.nombre} \n Precio: ${productoEncontrado.precio}`);
    } else {
      alert("Su SKU es incorrecto.");
    }
  
    const respuesta = prompt("¿Desea buscar otro SKU? (si/no)");
    if (respuesta !== 'si') {
      continuar = false;
    }
  }
  
  alert("Proceso finalizado.");

  