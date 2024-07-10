var num=153;
var temp=num;
var sum=0;
while(num>0)
{
    var rem=num%10;
    sum+=(rem*rem*rem);
    num=parseInt(num/10);
}
if(temp===sum)
{
    console.log("It is Armstrong number");
}
else{
    console.log("Not a Armstrong");
}
