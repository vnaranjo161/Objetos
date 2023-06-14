let usuarios = {
    "1234567890": "Juan Pérez",
    "0987654321": "María Gómez",
    "9876543210": "Pedro Rodríguez",
    "0123456789": "Laura Martínez",
    "5432109876": "Carlos Sánchez",
    "6789054321": "Ana López",
    "4567890123": "Diego Torres",
    "7654321098": "Sofía Ramírez",
    "2345678901": "Luisa Castro",
    "8901234567": "Andrés Jiménez"
  };
  
  console.log("Nombres de los usuarios:");
  for (let documento in usuarios) {
    console.log(usuarios[documento]);
  }