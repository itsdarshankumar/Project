let items = ["🍐", "🍒", "🍓", "🍏", "🍋", "🍇", "🍊", "🍍"];
let points = JSON.parse(localStorage.getItem("credit"));
let result1 = document.getElementById("Inner1");
let result2 = document.getElementById("Inner2");
let result3 = document.getElementById("Inner3");
alive = true;
win = false;
document.getElementById("credits").textContent = "Credits: " + points;
function master(){if(alive===true){
  document.getElementById("sound1").play();
  setTimeout(function () {
    play();
  }, 2000);}
}
function play() {
  if (alive === true) {
    result1 = Math.floor(Math.random() * 8);
    result2 = Math.floor(Math.random() * 8);
    result3 = Math.floor(Math.random() * 8);

    Inner1.textContent = items[result1];
    Inner2.textContent = items[result2];
    Inner3.textContent = items[result3];
    if (result1 === result2 && result2 === result3) {
      message.textContent = "You won triple credits!! 🎉";
      points = 3 * points;
      document.getElementById("sound3").play();
    } else {
      message.textContent = "Better luck next time. 😊";
      points = points - 250;
    }

    playbtn.textContent = "PLAY AGAIN";
    credits.textContent = "Credits: " + points;

    if (points <= 0) {
      message.textContent = "You've exhausted all your credits. 😰";
      playbtn.textContent = "GAME OVER";
      alive = false;
      document.getElementById("sound2").play();
    }
  }
}
