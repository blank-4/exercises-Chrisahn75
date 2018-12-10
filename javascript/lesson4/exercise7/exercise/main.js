var jourParMois = [31,28,31,30,31,30,31,31,30,31,30,31];
var nbreJourFinal = 0;

function nombreDeJour (month,year) {
    var isBissextile = isAnneeBissextile(year);
    if (isBissextile) {
        if (month == 2) {
            nbreJourFinal = jourParMois [month - 1] + 1;
        }
        else {
            nbreJourFinal = jourParMois [month - 1];
        }
    }
    else {
       nbreJourFinal = jourParMois [month - 1];
    }
    return nbreJourFinal;
}

function isAnneeBissextile (annee) {
    if (annee % 4 == 0 && annee % 100 != 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(nombreDeJour(2,2000));
