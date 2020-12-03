window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})

let dealer = document.getElementById('dealer-hand');
let hand = document.getElementById('player-hand');
let deal = document.getElementById('deal-button');
let hit = document.getElementById('hit-button');
let stand = document.getElementById('stand-button');
let pPoints = document.getElementById('player-points');
let dPoints = document.getElementById('dealer-points');
let playerHand = [];
let dealerHand = [];
let playerPoints = 0;
let dealerPoints = 0;

const suits = [ "clubs", 'dimonds', 'hearts', 'spades']; 
const values = [ 'ace', 2,3,4,5,6,7,8,9,10,'jack','queen','king']; 


class Card {
  constructor(points, suit) {
      this.points = points;
      this.suit = suit;
      this.imageUrl = '<img src = "images/' + points + '_of_' + suit + '.png">';
  }
}

let deck = [];
function buildDeck() {
  for (let i = 0; i < suits.length; i++) {     
    for (let x = 0; x < values.length; x++) {     
     deck.push(new Card(values[x], suits[i]));     
    } 
  }
}

 
buildDeck();
console.log(deck);
deal.addEventListener('click', (e) => {
    e.preventDefault()
    dealer.innerHTML = '<img src = "images/' + 9 + '_of_' + "clubs" + '.png">'
    dealer.innerHTML = ""
    dealer.innerHTML += deck[Math.floor(Math.random() * 51)].imageUrl 
    dealer.innerHTML += deck[Math.floor(Math.random() * 51)].imageUrl
    player.innerHTML = ""
    player.innerHTML += deck[Math.floor(Math.random() * 51)].imageUrl
    player.innerHTML += deck[Math.floor(Math.random() * 51)].imageUrl


}) 

hit.addEventListener('click', (e) => {
  e.preventDefault() 
  player.innerHTML += deck[Math.floor(Math.random() * 51)].imageUrl
  playerHand.push( deck[Math.floor(Math.random() * 51)] )
  domUpdater ()
})
stand.addEventListener('click', (e) => {
e.preventDefault()
console.log (countPoints (playerHand) )
console.log (countPoints (dealerHand) )
})

let countPoints = function(hand){
  let total = 0
  for (i= 0; i< hand.length; i++){
    switch (hand[i].points) {
      case "king": 
      case "queen":
      case "jack":
        total += 10
        break;
      case "ace":
        total += 11
        break;
      default:
        total += hand[i].points
        break;
    }
    // total += hand[i].points
  }
  return total
}

const dealHand = function (){
  playerHand = []
  dealerHand = []
  playerHand.push(deck[Math.floor(Math.random() * 51)])
  playerHand.push(deck[Math.floor(Math.random() * 51)])
  dealerHand.push(deck[Math.floor(Math.random() * 51)])
  dealerHand.push(deck[Math.floor(Math.random() * 51)])
  domUpdater ()
}
const domUpdater = function (){
  player.innerHTML = ""
  playerHand.forEach (cardobj => {
    player.innerHTML += cardobj.imageUrl
  })
  dealer.innerHTML = ""
    for (i = 0; i<dealerHand.length; i++){
      if (gameState == "active" && i==0 ){
        dealer.innerHTML += '<img src= “images/’ + ‘back’ + ‘_of_’ + ‘card’ + ‘.png”>'
      }
      else {
        dealer.innerHTML += dealerHand[i].imageUrl
     }
   }
}