let liste = [];
let allNumber = "";
let start, end, time;

// Ajoute l'input à la liste et à l'écran
function addToList(arg) {
  // Dès que l'utilisateur commence à écrire, on commence à mesurer
  if (liste.length == 0) {
    start = performance.now();
  }
  // Si l'input n'est pas un chiffre
  if (!isFinite(arg)) {
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
  document.getElementById("result").innerHTML = secureEval(allNumber); // Affiche le résultat
  document.getElementById("calcul").innerHTML = allNumber; // Affiche le calcul qu'on vient de faire
  liste = []; // On vide la liste pour pouvoir faire un nouveau calcul

  // L'opération est terminée, on peut calculer le temps qu'elle a prit
  end = performance.now();
  time = (end - start) / 1000;
  console.log(`Temps d'opération: ${time}s`);
  document.title = `Temps d'opération: ${time}s`;
}

// Supprime l'input qui vient d'être fait
function del() {
  liste.pop();
  document.getElementById("result").innerHTML = liste.join("");
}

// Clear la liste et l'écran
function reset() {
  liste = [];
  document.getElementById("result").innerHTML = "";
  document.getElementById("calcul").innerHTML = "";
}
