/*Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números. */

let objeto = {
    numeros: [45, 78, 22, 89, 8]
}

for (key in objeto) {
    for (let index = 0; index < objeto[key].length; index++) {
        console.log(objeto[key][index]);        
    }
}

    /** */

let  objeto2  = {
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
}

for (key in objeto2) {
    console.log(`----------------------------------`);
    for (key2 in objeto2[key]) {
       console.log(`${key2} : ${objeto2[key][key2]}`);
    }
}