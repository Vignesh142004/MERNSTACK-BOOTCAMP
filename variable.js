let a=10;
{
    let b=20;/*block scope*/
    console.log("inner",b);/*the let is more preferable than var*/
    
}
console.log("outer",a);/* In the API variable we use const type decalartion*/
const c=20;
{
    
    console.log("inner",c);
    console.log("type",typeof(c));
}
console.log("outer",c);
var str="vignesh";
console.log("type",typeof(str));
var big=20999999999999999999999999n;/*bigint should be end with n*/
console.log(big);
console.log("type",typeof(big));