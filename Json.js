//Creation of json object
const person = { name: "vignesh" };//direct object.
const person1 = {}; //empty object
const person2 = new Object; //using object method.
const person3 = Object.create(null);
console.log(person);

for (const key in person) //only the key in the json file is ectracted.
{
    console.log(person[key]);
}

let output = "";
for (const key in person) //to print json without curly bracket
{
    output += `${key}:${person[key]}`;
}
console.log(output);