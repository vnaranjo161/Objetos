class Perro {
  constructor(nombre) {
  this.nombre = nombre;
  }
  ladrar() {
    console.log(`¡Woof! ${this.nombre}`);
  }
}
  
const miPerro = new Perro("Nicky");
miPerro.ladrar();