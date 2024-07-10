const myArray=[];  //using array literal
const number=[1,2,3,4,5];  //using direct assignment
const colors=new Array("red","green","blue"); //using array class 

// Adding element in a array
colors.push("orange");//add at last
colors.unshift("yellow");//add at beginning

//Acessing the array element
const firstcolor=colors[0];
const lastcolor=colors[colors.length-1];
console.log(firstcolor);
console.log(lastcolor);

//traversing array element using for each loop
colors.forEach(function(col)
{
    console.log(col);
})

colors.pop();//remove at the end of array
colors.shift();//remove at the begging of array
// traversing array element using for of loop
for(const i of colors)
{
    console.log(i);
}

//traversing array element using map
const result=colors.map((i)=>
{
    console.log(i);
});

//slicing the array element
const num=[1,2,3,4,5]; 
// const sliced=num.slice(1,4);
// console.log(sliced);

//splicing the array element
const spliced=num.splice(1,2,10,30,90);
console.log(spliced);
console.log(num);

