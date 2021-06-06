/**
 * class definition
 */
export class Person {
  constructor(name = "") {
    this.name = name;
  }
  greet() {
    console.log("hello:" + this.name);
  }
}

const me = new Person("mamad");
me.greet();
