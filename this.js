/* 
this:
// this: current jeta use kortesi seta k bujai.
// kono ekta class er modde this use kora mane sei class er method ba property k bujai.
// this keyword ta besi use hoi class related kaje . 
*/
// class theke object banaite amra this keyword use kori.
// Normally, class er modde kisu property thake, jegula amra constructor er modde toiri kori.
// class theke object banaite chaile amra new keyword use kori.
// class k call kora mane tar constructor k call kora.
// this diye kono ekta class er property set kora hoi.
// ekane friend holo ekta object

class Person {
  // property
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  line() {
    console.log(`${this.name} is playing cricket at the age of ${this.age}`);
  }

  activity() {
    this.name;
  }
}
const friend = new Person("kafil", 40);
console.log(friend);
friend.line();

//
const values11 = new Person("Jamil", 66);
values11.line();

/*
// bejal
const res = friend.line; //call kori nai, set korsi.
res();
*/
