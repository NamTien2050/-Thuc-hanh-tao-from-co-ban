let year = parseInt(prompt("Enter a year"));
let one = "ket qua la";
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      document.getElementById("one").innerHTML = year + " is a leap year";
    } else {
      document.getElementById("one").innerHTML = year + " is NOT a leap year";
    }
  } else {
    document.getElementById("one").innerHTML = year + " is Not a leap year";
  }
}


