function Usuario(nombre, genero, edad) {
 this.nombre = nombre;
 this.genero = genero;
 this.edad = edad;

 this.describir = function () {
  return `Hola, mi nombre es ${this.nombre}, mi edad es ${this.edad}`;
 };
}

const maria = new Usuario("María", "femenino", 34);
const pedro = new Usuario("Pedro", "masculino", 45);

console.log(maria.describir());
console.log(pedro.edad);
console.log(pedro instanceof Usuario);
