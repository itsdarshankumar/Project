function savetolocal() {
  localStorage.setItem(
    "credit",
    JSON.stringify(document.getElementById("insertcredits").value)
  );
}
