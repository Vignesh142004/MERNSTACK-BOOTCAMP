const element=document.createElement("input");//create input in html page
document.body.appendChild(element);

const element1=document.createElement("img");//craete img in html
element1.src="assets/image.png"; //the image target to be displayed
document.body.appendChild(element1);

const element2=document.getElementById("mydiv");  //accessing html element by html id attributes.
element2.textContent="The content is written by DOM property in javascript";

const element3=document.getElementsByClassName("myclass");
element3.textContent="The content is added by attribute getElementByClassName";


