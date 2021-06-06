enum CustomColor {
  white = 0,
  black = 2,
}

// type aliases
type bloodGroups = "O" | "AB" | "B" | "A";
type money = string | number;

type Person = {
  name: string;
  age: number;
  gender: boolean;
  hobbies: string[];
  role: [number, string]; // tuples(fixed length and typed array)
  description: any;
  favoriteColor: CustomColor;
  score?: string | number;
  bloodGroup: bloodGroups;
  sallary: money;
  physics: "handsome" | "tender" | "muscelar";
};
const me: Person = {
  name: "mamad",
  age: 23,
  gender: true,
  hobbies: ["programming", "computer"],
  role: [1, "developer"],
  description: "this is description",
  favoriteColor: CustomColor.white,
  score: Math.random() > 0.5 ? "20" : 20,
  bloodGroup: "O",
  sallary: "20$",
  physics: "handsome",
};

/**
 * function return types
 */
function greet(): void {
  console.log("hello");
}

console.log(greet()); // undefined

function boogy(): { a: number; b: string } {
  return { a: 23, b: "mamad" };
}

function foo(): undefined {
  return; //  ok!
}
console.log(foo()); // undefined

/**
 * Function types
 */
let doer: Function; // just function type with unknown prototype
let bar: (a: number, b: number) => number; // single prototype.
type possibleFunctions =
  | ((a: number) => number)
  | ((a: number, b: number) => number);
let zoo: possibleFunctions;

function funk(a: number) {
  return a;
}
function funk2(a: number, b: number) {
  return a + b;
}

zoo = funk;
zoo = funk2;

/**
 * unknown type: it is like any with the difference that any can assign to any type but unknown should type guarded.
 * the reason is because any stop typechecking but unknown don't and typescript stil check the type.
 */

let anyType: any;
let userInputSomething: unknown;
let inputWeNeed: string;

userInputSomething = 23;
inputWeNeed = userInputSomething; // impossible to assign unknown to another type without type guard.
inputWeNeed = anyType;
userInputSomething = "23";
if (typeof userInputSomething === "string") {
  inputWeNeed = userInputSomething; // now we can assign unknown to string because it is string.
  inputWeNeed = anyType;
}

/**
 * never type is used for the times function never return a value like throw exception or infinite loops.
 */

function errorGenerator(message: string, code: string | number): never {
  throw { message: message, errorCode: code };
}

errorGenerator("some error occured!", 500);
