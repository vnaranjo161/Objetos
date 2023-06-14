let continentes = {
    "america": ["Canadá", "Estados Unidos", "Brasil", "Argentina", "México"],
    "europa": ["España", "Francia", "Italia", "Alemania", "Reino Unido"],
    "asia": ["China", "India", "Japón", "Corea del Sur", "Rusia"],
    "africa": ["Nigeria", "Egipto", "Sudáfrica", "Kenia", "Etiopía"],
    "oceania": ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"]
  };
  
let continenteSeleccionado = prompt("Ingrese el nombre de uno de los cinco continentes: America, Europa, Asia, Africa u Oceania").toLowerCase();
  
if (continentes.hasOwnProperty(continenteSeleccionado)) {
    let paises = continentes[continenteSeleccionado];
    console.log(`Países en ${continenteSeleccionado}:`);
for (let i = 0; i < 5; i++) {
      console.log(paises[i]);
}
} else {
    console.log("Continente inválido. Por favor, ingrese un continente válido.");
}