var y = document.getElementById("texte").innerHTML = "lorem ipsum";

function afficher_cacher(texte){
    document.getElementById("texte").style.display = "block";
    /* document.getElementById("texte").innerHTML = afficher (); */
    document.getElementById('bouton_texte').innerHTML = (document.getElementById('bouton_texte').innerHTML == "Masquer le texte")? "Afficher le texte":"Masquer le texte"; 
    var elts = document.getElementsByClassName();
    var nbre_elts = elts.length;
    for( var i=0; i<nbre_elts; i++) {
      elts[i].style.visibility = (elts[i].style.visibility === "hidden" || elts[i].style.visibility === "" ) ? "visible":"hidden";
    }
}
var couleurs = new Array("#AAAAAA","#F0F8FF","#8A2BE2","#4B0082","#FF0000","#0000FF","#2E8B57","#9ACD32");
 
function randomColor()
{
 var n = couleurs.length;
 var c; 
 
 c = Math.round(Math.random()*n);
 document.getElementById("texte").style.backgroundColor = couleurs[c];
 
 c = Math.round(Math.random()*n);
 document.getElementById("texte").style.backgroundColor = couleurs[c];
 
 c = Math.round(Math.random()*n);
 document.getElementById("texte").style.backgroundColor = couleurs[c];
 
 c = Math.round(Math.random()*n);
 document.getElementById("texte").style.backgroundColor = couleurs[c];
 
}


