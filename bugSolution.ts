function greeter(person: string): string {
  return "Hello, "+ person +"!";
}

function greeterArray(persons: string[]): string {
  return "Hello, "+ persons.join(" ") +"!";
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //This will fix the error by joining the array elements into a string.
console.log(greeter(user[0])); //This will also fix the error by accessing the first element of the array.