const supermercado = {
  Papa: 2.5,
  Arroz: 1.8,
  Lentejas: 3.2,
  Aceite: 4.5
};

for (let producto in supermercado) {
  console.log(`${producto} : ${supermercado[producto]}`);
}