//Inheritance: example holo sob e vehicle, sobai rastai chora fera kore, sobar chaka ase, kintu kisu difference ase .jemon vehicle er body, eder speed etc.

class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("gari chole na,chole na, chole na re.");
  }
}
// const values1 = new Vehicle("Gaias", "250000");
// console.log(values1);

// eki kaj arekta class er jonno na kore, extends diea uporer class tar naam likhe dibo,
// Taile amra, ager class er property gula o pabo, tar sathe notun jei parameter gula assign korbo oigulao pabo.

class Bus extends Vehicle {
  constructor(name, price, type, color) {
    super(name, price); //ager joner thake ei value gula ana holo..
    this.type = type;
    this.color = color;
  }
  content() {
    console.log("hapi hapi");
  }
}
// const values44 = new Bus("motor-bike", "orange");
// console.log(values44);

class Truck extends Vehicle {
  constructor(name, type, load) {
    super(name, type);
    this.load = load;
  }
  talks() {
    console.log(`Truck load will be ${this.load}`);
  }
}

const output = new Truck("Ellieas", "truck", "5000kg");
output.talks();

// Ex:2
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("flying");
  }
}

let bird = new Bird(2);

bird.walk();
bird.fly();
