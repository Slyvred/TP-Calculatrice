let liste = [];
let allNumber = "";

function addToList(arg) {
  if (arg === "+" || arg === "-" || arg === "*" || arg === "/") {
    liste.push(" " + arg + " "); // " " est notre séparateur
  } else {
    liste.push(arg); // juste notre chiffre
  }
  document.getElementById("result").innerHTML = liste.join(""); // Affiche l'opération à l'écran
}

// Vérifie que notre syntaxe est correcte e.g. pas 1..1 / 2
function secureEval(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return new Error("Syntaxe");
  }
}

function joinList() {
  allNumber = liste.join("");
}

function calc(listenumber) {
  joinList(listenumber);
  document.getElementById("result").innerHTML = secureEval(allNumber);
  document.getElementById("calcul").innerHTML = allNumber;
  liste = [];
}

// Supprime l'input qui vient d'être fait
function del() {
  liste.pop();
  document.getElementById("result").innerHTML = liste.join("");
}

// Clear
function reset() {
  liste = [];
  document.getElementById("result").innerHTML = "";
  document.getElementById("calcul").innerHTML = "";
}
