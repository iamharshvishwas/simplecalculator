function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
function del() {
  let value = document.getElementById("result").value;
  value = parseInt(value);
  let ans = parseInt(value / 10);
  console.log(typeof value);
  document.getElementById("result").value = ans;
}
