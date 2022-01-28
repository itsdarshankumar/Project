let cards = [];
let sum = 0;
let active = false;
let c1 = document.getElementById("card1");
let c2 = document.getElementById("card2");
let c3 = document.getElementById("card3");
let c4 = document.getElementById("card4");
let c5 = document.getElementById("card5");
let dsum = document.getElementById("dealersum");
let c6 = document.getElementById("card6");
let c7 = document.getElementById("card7");
let sumv = document.getElementById("sumview");
let msage = document.getElementById("message");
let dssum = 0;

let msg = "";
let success = false;
let newCard = 0;
let n = 2;
let begin = true;
let dealerbtn = true;

//function to distribute cards
function getCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    if (sum + 11 > 21) {
      return 1;
    } else {
      return 11;
    }
  }
  if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

//function that works on clicking start button
function Start() {
  if (begin) {
    document.getElementById("start").textContent = "Game is ON";
    active = true;
    cards[0] = getCard();
    cards[1] = getCard();
    sum = cards[0] + cards[1];
    predefinedcards();
    continueGame();
    begin = false;
  }
}
//fucntion for gameprogress
function continueGame() {
  sumview.textContent = "Sum: " + sum;
  if (n > 2) {
    information();
  }
  if (sum < 21) {
    msg = "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "You hit a Blackjack!!!";
    success = true;
    active = true;
    dealer();
  } else {
    msg = "You went over 21,tough luck! ";
    active = false;
    result();
  }
  message.textContent = msg;
}
//function for push
function moreCard() {
  if (active === true && success === false && dealerbtn === true) {
    newCard = getCard();
    sum += newCard;
    cards.push(newCard);
    n++;
    continueGame();
  }
}
//Function to show data of each cards
function information() {
  if (n === 3) {
    card5.textContent = cards[2];
  }
  if (n === 4) {
    card3.textContent = cards[3];
  }
  if (n === 5) {
    card6.textContent = cards[4];
  }
  if (n === 6) {
    card4.textContent = cards[5];
  }
  if (n === 7) {
    card7.textContent = cards[6];
  }
}

//Function to show data of first 2 cards
function predefinedcards() {
  card1.textContent = cards[0];
  card2.textContent = cards[1];
}
//dealer function definition
function dealer1() {
  if (active === true) {
    dssum = Math.floor(Math.random() * 5 + 17);
    dealersum.textContent = "Dealer's Sum: " + dssum;
  }
}
function dealer2() {
  if (active === true) {
    dssum = Math.floor(Math.random() * 9 + 22);
    dealersum.textContent = "Dealer's Sum: " + dssum;
  }
}

//Function for game in favour of dealer
var threshhold1 = 9.5;
var threshhold2 = 90.5;
function dealer() {
  if (begin === false && dealerbtn === true) {
    var randomNumber = Math.random() * 100;
    if (randomNumber < threshhold1) {
      dealer2(); //probability of 9.5%
      result();
    } else if (randomNumber < threshhold2) {
      dealer1(); //combined probability of 90.5%
      result();
    } else {
      dealer1(); //combined probability of 90.5%
      result();
    }
    dealerbtn = false;
  }
}
//function that displays result
function result() {
  if (sum <= 21 && sum > dssum) {
    document.getElementById("succ").style.display = "block";
  } else if (sum <= 21 && sum === dssum) {
    document.getElementById("same").style.display = "block";
  } else if (sum <= 21 && dssum > 21) {
    document.getElementById("succ").style.display = "block";
  } else {
    document.getElementById("fail").style.display = "block";
  }
}
