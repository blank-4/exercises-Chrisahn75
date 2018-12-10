var table = [3,7,8,""];
function sumArray (tab) {
    var sum = 0 ;
    for (var i = 0; i < tab.length; i++) {
       if (typeof tab[i]=== "number") {
        sum = sum + tab[i];
       }
    else {
        console.log(tab[i] + "N'est pas un nombre : ");
        }
    }
    
    return sum
}
console.log(sumArray(table));
