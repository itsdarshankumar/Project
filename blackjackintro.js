function savetolocal() {
  localStorage.setItem(
    "blackjcredit",
    JSON.stringify(document.getElementById("insertcredits").value)
  );
}
