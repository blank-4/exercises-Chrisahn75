function exercice1(){
    var inventaire= ["salade","tomate","oignon"];
    console.log(inventaire.length);
    console.log(inventaire[0]);
    inventaire.push("sauce blanche");
    console.log(inventaire.length);
    inventaire.pop();
    console.log(exercice1);

    ingredients(inventaire);
}

exercice1();


function ingredients (tab) {
    for(var i in tab ) {
        console.log(i + " = " + tab[i]);
    }    
}



