var randomNumber=Math.floor(Math.random()*6)+1;

var randomImage="dice"+randomNumber+".png";

var ImageSource="images/"+randomImage;

var ImageRandom=document.querySelectorAll("img")[0];

ImageRandom.setAttribute("src",ImageSource);

var r1=Math.floor(Math.random()*6)+1;
var r2="dice"+r1+".png";
var r3="images/"+r2;
var r4=document.querySelectorAll("img")[1];
r4.setAttribute("src",r3);

if(r1>randomNumber){
    document.querySelector("h1").innerHTML="🚩Player2 wins!";
}else if(randomNumber>r1){
    document.querySelector("h1").innerHTML="🚩player1 wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!!!!!";
}