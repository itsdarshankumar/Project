function savetolocal3() {
  localStorage.setItem(
    "credit",
    JSON.stringify(document.getElementById("insertcredits").value)
  );
}
