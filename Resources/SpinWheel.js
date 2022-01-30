const roullete = document.querySelector(".roullete");
const trigger = document.querySelector(".trigger");
let bet = document.getElementById("input").value;
let value = Math.floor(Math.random() * 12);
let total_value = 7200 + value;
let active = true;
let anim = document.getElementById("trans");
let animation = [
  "rotation1 7s ease-in-out forwards",
  "rotation2 7s ease-in-out forwards",
  "rotation3 7s ease-in-out forwards",
  "rotation4 7s ease-in-out forwards",
  "rotation5 7s ease-in-out forwards",
  "rotation6 7s ease-in-out forwards",
  "rotation7 7s ease-in-out forwards",
  "rotation8 7s ease-in-out forwards",
  "rotation9 7s ease-in-out forwards",
  "rotation10 7s ease-in-out forwards",
  "rotation11 7s ease-in-out forwards",
  "rotation12 7s ease-in-out forwards",
];
function onClickTrigger() {
  if (active) {
    anim.style.animation = animation[value];
    document.getElementById("sound1").play();
    setTimeout(function () {
      info();
    }, 8000);
  }
  active = false;
}
let angle = [15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345];
function valued() {
  if (value === 0) {
    return 25;
  } else if (value === 1) {
    return 150;
  } else if (value === 2) {
    return 50;
  } else if (value === 3) {
    return 105;
  } else if (value === 4) {
    return 90;
  } else if (value === 5) {
    return 20;
  } else if (value === 6) {
    return 85;
  } else if (value === 7) {
    return 120;
  } else if (value === 8) {
    return 250;
  } else if (value === 9) {
    return 40;
  } else if (value === 10) {
    return 75;
  } else if (value === 11) {
    return 10;
  }
}
function info() {
  if (bet === valued()) {
    document.getElementById("succ").style.display = "block";
    document.getElementById("sound3").play();
  } else {
    document.getElementById("fail").style.display = "block";
    document.getElementById("sound2").play();
  }
}
