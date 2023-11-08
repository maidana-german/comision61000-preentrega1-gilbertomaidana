let mensajeBienvenida = "Bienvenido a la app de facturación";
alert(mensajeBienvenida);
let continuar = prompt("Desea comenzar con la carga de productos? (si/no)")
precioTotal = 0;
i = 0;
//Acá se van a cargar los productos hasta que se ingrese que no se desea continuar
while (continuar != "no") {
    //Funciona para agregar el IVA a los productos
    function precio(precioSinIva, iva) {
        precioFinal = precioSinIva + iva;
        mensaje = `El precio final del producto: ${producto}, es de ARS ${precioFinal}`
        alert(mensaje);
    }
    //Acá se ingresan los productos a facturar y el precio sin IVA
    producto = prompt("Ingrese el producto");
    valor1 = parseInt(prompt("Ingrese precio sin IVA"));
    valor2 = valor1 * 0.21;
    i = i + 1;
    precio(valor1, valor2);
    continuar = prompt("Desea continuar con la carga de productos?");
    precioTotal = precioTotal + precioFinal;
}
//Al final se muestra el total de productos cargados y la suma de todos ellos con el IVA
alert(`El total de la compra, ${i} productos, es de ARS ${precioTotal}`);