var randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var randomDiceImage1 = `./images/dice${randomNumber1}.png`;
var randomDiceImage2 = `./images/dice${randomNumber2}.png`;
var diceImageElement=document.querySelectorAll(".dice img ");
console.log(diceImageElement);

diceImageElement[0].setAttribute("src",randomDiceImage1);
diceImageElement[1].setAttribute("src",randomDiceImage2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}