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

(function(){console.log("hi")})() /*immediate invoked function (IIF)*/
 
const outerfunction=()=>{  /*closure*/
    const a="outer function is called";
    const innerfunction=()=>{
       console.log("a",a);
    }
    return innerfunction;
}
const anotherfunction=outerfunction()
console.log(anotherfunction);
console.log(anotherfunction())

myfunc();
myfunc2();
myfunc3();