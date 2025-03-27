class Usuario {
 constructor(nombre, genero, edad) {
  this.nombre = nombre;
  this.genero = genero;
  this.edad = edad;
 }

 describir() {
  return `Hola, mi nombre es ${this.nombre}, mi edad es ${this.edad}`;
 }
}
