/**
 * var,let, const
 * their difference is their scope. var is global and (const,let) are block scoped.
 */
if (true) {
  var x = "hello";
}
console.log(x); // output: hello 

// using let
if (true) {
  let x = "hello";
  // or const x = 'hello'
}
console.log(x); // output: "ReferenceError: x is not defined

// inner and outer block scope
let x = "x";
if (true) {
  let x = "y";
  console.log(x); // output: y
}
console.log(x); //output: x

/**
 * const , let
 */
const a = [1, 2, 3];
a.push(4); // right, because array are reference and we didn't change the reference but the values of that reference

// same for object
const b = { name: "mamad" };
b.name = "mamad2"; // it is ok.

/**
 * arrays
 */
const a = [1, true, "false"]; // a valid array. array can have inhomogenous valus

/**
 * destructuring
 */
const a = [1, 2, 3];
const [b, ...c] = a; // b = 1, c = [2,3]
const [b, c] = a; // b = 1, c = 2
const [b, , c] = a; // b = 1, c = 3
const [, , , d] = a; // d = undefined (imagine array as an infinite array)
const [, , , d = "defaultValue"] = a; // d = defaultValue
const [b = "defaultValue", , , d = "defaultValue"] = a; //b = 1, d = defaultValue

// swap the value using destructuring
const a = 5;
const b = 10;
[a, b] = [b, a]; // a = 10, b = 5

// object destructuring
const a = { name: "mamad", age: 29, height: 178 , greet:()=>'hello!'};
// object are not base on order
const { name, age } = a;
const { age, name } = a;
const { name, , height } = a; // SyntaxError: Unexpected token ','  
const {name:n, greet:hello } = a;// hello works but greet is undefined and the same for name

/**
 * Fat arrow function
 */
const a = () => console.log('hello');
const a = () => { console.log('hello') }
const a = (a) => a + 1;
const a = a => a + 1;

const a = (v) => v + 5;
a(3, 3, 3); // excess arguments are ignored.

// differences between fat arrow and regular function. 1. syntax 2. arguments object in regular function is accessible 3. this ( in arrow this points to first non-arrow parent but regular function bind this to where it call.) 4. using new in regular is possible (constructable and callable) but arrow is just callable 5. duplicate arguments is allowed in regular function
const outarrow = () => {
        console.log("hello " + this); // no 'this' binding here
    }
const outfn = function(){
  console.log("hello" + this);
}

let user = {
    name: "GFG",
    gfg1: outarrow,
    gfg2: outfn
 };


const {gfg1, gfg2} = user;
user.gfg1();// window object
user.gfg2();// object object. It is called inside of object
gfg1();// window object
gfg2();// window object. Now it is called in global scope

// argument object is accessible inside regular functions
const fn = function () {
    console.log(arguments);
}
fn(1, 2, 3);// return object

const arrow = () => {
    console.log(arguments);
}
arrow(1, 2, 3);//"ReferenceError: arguments is not defined

// duplicate arguments are allowed 
const fn = function (x, x) {
    return (x * 2) + (x * 3);
}
console.log(fn(1,2));// 10
console.log(fn(2,1));// 5 

const arrow = (x, x) => {
    return (x * 2) + (x * 3);
}
arrow(1, 2);//"SyntaxError: Duplicate parameter name not allowed in this context

/**
 * Hoisting
 */
age = 27;
console.log(age);
var age;// it is ok with var but it is not working with const and let.

/**
 * object literal
 */

const me = "mamad";
const age = 29;
const obj = { me, age }; // {me: 'mamad', age: 29}

const obj = { me, age,"greet me with space"() { console.log(this.me, ',', this.age) } };
obj['greet me with space']();

// dynamic evaluation
const ageValue = 28;
const ageTag = "ageValue";
const obj = {
    name: 'mamad',
    [ageTag]: ageValue, // right
}
console.log(obj[ageTag]);// 28
console.log(obj["ageValue"]);// 28
console.log(obj.ageValue);// 28

//Note: the following syntax has an error.
const obj = {
    name: 'mamad',
    [ageTag], // "SyntaxError: Unexpected token ','
}

/**
 * template literals
 */
const me = 'mamad';
const desc = `hello this is ${me + '!!!'}`;
console.log(desc);// hello this is me !!!!

// escape the templte literal
const desc = `hello this is \${me + '!!!'}`;
console.log(desc);// hello this is ${me + '!!!'} 

/**
 * new for loop
 */
const numbers = [1, 2, 3];
for (number of numbers) {
    console.log(number); 
}
//output: 
// 1
// 2
// 3

/**
 * rest operator
 * the rest operator takes a list of values and pack them into array. It is usefull when you have an unknow number
 * of arguments (e.g. max function)
 */

const fn = function (...args) {
    console.log(args);
}

fn(1, 2, 3); // [1,2,3]
fn(true, 2, '3');//[true,2,"3"] 

/**
 * spread operator. It has reverse functionality of rest operator. 
 */
const fn = function (args) {
    console.log(...args);
}

fn([1, 2, 3]); // return list of (1\n 2\n 3\n)
fn([true, 2, "3"]); // return list of (true\n 2\n "3"\n)