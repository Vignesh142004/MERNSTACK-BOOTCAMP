let a=10;
if(a=="10") /*lossy equility*/
{
    console.log("true");
}
else{
    console.log("false");
}
if(a==="10") /*There is a difference between === ans ==*/
{
    console.log("true");
}
else
{
    console.log("false");
}
