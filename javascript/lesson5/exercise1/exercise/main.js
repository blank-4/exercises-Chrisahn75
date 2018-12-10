var x = document.getElementById("texte");

x.innerHTML = "lorem ipsum";
function afficher () {
    document.getElementById("texte").style.display = "block";
    x.style.color = couleur();

}

function cacher (){
    x.style.display = "none";
}

function couleur (){
    var couleur = ["#9932CC","#20B2AA","#FF4500"];
    var index = Math.floor (Math.random()* couleur.length);
        console.log(index);
        console.log(couleur);
    var macolor = couleur[index];
    return macolor;
    
}