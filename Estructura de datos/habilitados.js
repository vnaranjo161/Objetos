/*. Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:
"inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar cuántos usuarios están habilitados.  */

let users = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
}
let habilitados = 0
for (key in users) {
    if (users[key]== "habilitado") {
        habilitados++
    }
}

console.log(`La cantidad de  usuarios habilitados es:  ${habilitados}`);