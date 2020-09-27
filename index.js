let randomNumber1=Math.floor(Math.random()*6)+1;
let imgg="dice"+randomNumber1+".png";
let ran= "images/"+imgg;
var image1=document.querySelectorAll('img')[0];
image1.setAttribute("src",ran);


let randomNumber2=Math.floor(Math.random()*6)+1;
let imagg2="dice"+randomNumber2+".png";
let ran2="images/"+imagg2;
let image2=document.querySelectorAll('img')[1];
image2.setAttribute("src", ran2);