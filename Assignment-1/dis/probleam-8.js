"use strict";
const validateKeys = (obj, keys) => keys.every(key => key in obj);
// Sample Input
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"])); // Output: true
console.log(validateKeys(person, ["name", "address"]));
