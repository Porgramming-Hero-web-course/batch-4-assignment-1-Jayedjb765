type Person = {
    name : string;
    age : number;
    email : string;

}

const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean =>
    keys.every(key => key in obj);

// Sample Input
const person : Person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"])); // Output: true
console.log(validateKeys(person, ["name", "address"]));