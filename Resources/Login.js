function savetolocal2() {
  localStorage.setItem(
    "Userx",
    JSON.stringify(document.getElementById("Username").value)
  );
}
