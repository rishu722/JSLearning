function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculateResult() {
  const expression = document.getElementById("result").value;
  const result = eval(expression);
  document.getElementById("result").value = result;
}

function clearResult() {
  document.getElementById("result").value = "";
}

let valeInBox = document.getElementById("result");