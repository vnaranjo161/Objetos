const citas = {
    "12345678": {
      nombres: "Juan Pérez",
      dia: "Lunes",
      fecha: "2023-07-10"
    },
    "87654321": {
      nombres: "María Gómez",
      dia: "Miércoles",
      fecha: "2023-07-12"
    },
  };
  
  function consultarCita(documento) {
    if (citas.hasOwnProperty(documento)) {
      let cita = citas[documento];
      console.log(`Nombre: ${cita.nombres}`);
      console.log(`Día de la cita: ${cita.dia}`);
      console.log(`Fecha de la cita: ${cita.fecha}`);
    } else {
      console.log("No se encontró ninguna cita para el documento ingresado.");
    }
  }
  
  function cambiarCita(documento, nuevoDia, nuevaFecha) {
    if (citas.hasOwnProperty(documento)) {
      citas[documento].dia = nuevoDia;
      citas[documento].fecha = nuevaFecha;
      console.log("El cambio de cita ha sido exitoso.");
    } else {
      console.log("No se encontró ninguna cita para el documento ingresado.");
    }
  }
  
  let documentoUsuario = prompt("Ingrese su número de documento para consultar su cita:");
  
  consultarCita(documentoUsuario);
  
  let cambiarCitaRespuesta = prompt("¿Desea cambiar el día o fecha de su cita? (Sí/No)");
  
  if (cambiarCitaRespuesta.toLowerCase() === "sí") {
    let nuevoDia = prompt("Ingrese el nuevo día de la cita:");
    let nuevaFecha = prompt("Ingrese la nueva fecha de la cita:");
  
    cambiarCita(documentoUsuario, nuevoDia, nuevaFecha);
  }