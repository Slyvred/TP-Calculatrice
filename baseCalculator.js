class BaseCalculator {
  constructor() {
    this.liste = [];
    this.prec = [];
    this.allNumber = "";
    this.start, this.end, this.time;
  }

  // Ajoute l'input à la liste et à l'écran
  addToList(arg) {
    // Dès que l'utilisateur commence à écrire, on commence à mesurer
    if (this.liste.length == 0) {
      this.start = performance.now();
    }
    // Si l'input n'est pas un chiffre
    if (!isFinite(arg)) {
      this.liste.push(" " + arg + " "); // " " est notre séparateur
    } else {
      this.liste.push(arg); // juste notre chiffre
    }
    document.getElementById("result").innerHTML = this.liste.join(""); // Affiche l'opération à l'écran
  }

  // Vérifie que notre syntaxe est correcte e.g. pas 1..1 / 2
  secureEval(expression) {
    try {
      return eval(expression);
    } catch (error) {
      return new Error("Syntaxe");
    }
  }

  joinList() {
    this.allNumber = this.liste.join("");
  }

  calc() {
    this.joinList();
    document.getElementById("result").innerHTML = this.secureEval(this.allNumber); // Affiche le résultat
    document.getElementById("calcul").innerHTML = this.allNumber; // Affiche le calcul qu'on vient de faire
    this.prec = []; // On supprime l'opération précédente
    this.prec = this.liste; // On sauvegarde notre opération qui devient la précédente
    this.liste = []; // On vide la liste pour pouvoir faire un nouveau calcul

    // L'opération est terminée, on peut calculer le temps qu'elle a prit
    this.end = performance.now();
    this.time = (this.end - this.start) / 1000;
    console.log(`Temps d'opération: ${this.time}s`);
    document.title = `Temps d'opération: ${this.time}s`;
  }

  // Supprime l'input qui vient d'être fait
  del() {
    this.liste.pop();
    document.getElementById("result").innerHTML = this.liste.join("");
  }

  // Clear la liste et l'écran
  reset() {
    this.liste = [];
    document.getElementById("result").innerHTML = "";
    document.getElementById("calcul").innerHTML = "";
  }
}

var calculator = new BaseCalculator();