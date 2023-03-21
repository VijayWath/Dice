var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomImage1="images/dice"+randomNumber1+".png";
var change=document.querySelectorAll("img")[0];
change.setAttribute("src" , randomImage1);



var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomImage2="images/dice"+randomNumber2+".png";
var change=document.querySelectorAll("img")[1];
change.setAttribute("src" , randomImage2);

var addition=randomNumber1+ randomNumber2;

document.querySelector("h1").textContent="Move "+addition+" steps";


