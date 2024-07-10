function myfunc() /*Named Function*/
{
    console.log("This is the Named Function");
}
 
const myfunc2=function() /*Anonymous Function*/
{
    console.log("This is the anonymous function");
}

const myfunc3=()=>
{
    console.log("this is the Arrow function");
}
myfunc();
myfunc2();
myfunc3();