import Persona from "./persona.js";
import {Dog,Cat} from "./animal.js";


let myPerson = new Persona('Juan', 'Perez', 23, 1.8);


let dog = new Dog('Paco', '15', 'Cocker');
let cat = new Cat('Chinchi', '6', 'Ni idea');


console.log(myPerson.saludar());

console.log(dog.acariciar());

console.log(cat.acariciar());