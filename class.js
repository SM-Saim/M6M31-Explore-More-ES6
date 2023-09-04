// Class:
/* same typer jinish gular modde similarity mainatin korar jonno ekta jinish use kora hoi, 
jeta k bole class.
// class er variable er naam sobsomy Capital letter diea shuru hoi. 
// Prottek ta class er high level er 2 ta jinish thake. 1 
// class theke similar typer er object bananor jonno, amra special ekta function use kori.
   Seta holo constractor.
 
 // class er modde amra chaile ekta function likte pari. kintu function keyword use na kore.
//  constraction ekta special function,
// class er modde 2ta jinish thakte pare, ekta holo properties arelta holo method.


// Java script er modde class bolete kisu nai, eta k bole sintytic sugar.
// syntatic sugar:mane likte ar dekte subiva hoi eu jonno dise, vitore vitore function diye e toirikora hoise.
// ES6 asar age function diyei kora hoi to ei jinish ta.
*/

const devices = [
  { name: "lenovo", price: 66666, processor: "i7", color: "black" },
  { name: "Dell", price: 70000, processor: "i9", color: "black" },
  { name: "asus", price: 66200, processor: "i7", color: "silver" },
  { name: "mac-book", price: 16000, processor: "i5", color: "red" },
];

// similar
class Products {
  country = "Bangladeh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`We are the people of ${talk}`);
  }
}

const lenovo = new Products("naam paisi");
console.log(lenovo);
lenovo.speak("Hapi Hapi Hapi");

// Ex:2
class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is taking the class");
  }
}

const teacher = new Teacher("Shahajan Tapan", "Mordern Physics");
console.log(teacher);

const teacher2 = new Teacher("Guho", "Chemistry");
console.log(teacher2);
