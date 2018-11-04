var cards = ["king", "queen", "king", "queen"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardTwo);
cardsInPlay.push(cardOne);

console.log("user flipped" + ' ' + cardOne)

if ((cardsInPlay.length === 2) && (cardsInPlay[cardOne] === cardsInPlay[cardTwo])){alert("You Found A Match");}
else {alert("Sorry Try Again");}

console.log(cardsInPlay.length);
