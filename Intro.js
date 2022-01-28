let x = JSON.parse(localStorage.getItem("Userx"));
document.getElementById("user").textContent = "@" + x;
document.getElementById("Totalcredit").textContent =
  "Total credits= " + localStorage.getItem("totalcredit");
