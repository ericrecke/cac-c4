export default class Animal {
    constructor(name, age, raza) {
        this.name = name;
        this.age = age;
        this.raza = raza;
    }
    acariciar() {
        console.log(`Acariciando a :${this.name}`);
    }
    getAge(){
        return this.age;
    }
    getRaza() {
        return this.raza;
    }
}

export class Dog extends Animal {
    acariciar(){
        console.log(`Acariciando al perro: ${this.name}`);
    }
}

export class Cat extends Animal {
    acariciar(){
        console.log(`Acariciando al gato: ${this.name}`);
    }
}