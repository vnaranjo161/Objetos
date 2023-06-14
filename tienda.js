const productos = {
    "manzana" : 3.0,
    "banano" : 4.5,
    "pera" : 2.6,
    "aguacate" : 2.0,
    "arroz" : 4.8
}

let producto = prompt("Ingrese el rpoduucto que desea comprar (manzana, banano, pera, aguacate, arroz)").toLowerCase();

if (productos.hasOwnProperty(producto)) {
    console.log(`el precio de ${producto} es: ${productos[producto]}`);
}else{
    console.log(`El producto ${producto} no esta disponible en la tienda`);
}