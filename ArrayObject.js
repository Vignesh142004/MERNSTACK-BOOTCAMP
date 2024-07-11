const arr=[1,2,3,4,5,6];
console.log(typeof(arr));  // it work based on memory allocation.
console.log(Array.isArray(arr)); //it is used to check wheather it is an array or not.

const person={name:"vignesh" ,name:"shivan"};//the shivan value is replaced by vignesh.
let output="";
for(const key in person) //to print json without curly bracket
{
    output+=`${key}:${person[key]}`;
}
console.log(output);

const color={bright:"red" ,light:"powderblue", gradient:"mixedcolor"};
console.log(Object.keys(color));//print keys in the JSON Object.
console.log(Object.values(color));//print values inthe JSON Object.
console.log(Object.entries(color));// print both key value pair in JSON Object.

const result=Object.entries(color).map(([key,value])=> 
    `${key}:${value}`
)
console.log(result);
const person1={fname:"vignesh" ,lname:"shivan"};
person1.fname="shanker";
person1["lname"]="parvathi";
console.log(person1);

const people1={fname:"vinoth",lname:"kumar"};
const people2={...people1,age:20}; //spread property it will spread the object yo other.
console.log(people1);
console.log(people2);

const{fname,...rest}=people2; // rest will copy the remaining value to an new object ,here the value expect the fname is printed.
console.log(rest); //both rest and spread are represented in ...operator.

const fruit={green:"apple",yellow:"lemon",pink:"grapes"};
const jsonstring=JSON.stringify(fruit); //convret the object to string.
console.log(jsonstring);
const jsonobj=JSON.parse(jsonstring); //convert the string to object.
console.log(jsonobjobj);

