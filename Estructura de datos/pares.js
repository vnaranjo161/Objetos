/* Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} recorrer el objeto y mostrar
cuáles de los valores son pares.
*/

let objeto = {
    "dos": 2, 
    "cinco": 5, 
    "siete": 7, 
    "cuarenta": 40, 
    "cincuenta": 50
}

let mensaje = `impares: \n`
for (numero in objeto) {
    if (objeto[numero] % 2 != 0) {
        mensaje+= `${objeto[numero]} \n`
    }
}

console.log(mensaje);