
let nombre1 = parseInt(window.prompt("Saisissez un nombre "));
let multi = parseInt(window.prompt("Saisissez un multiplicateur"));


function cube(nombre){
var carre = nombre1*nombre1;
var produit = nombre1*multi;
document.write("<br>")
document.write("Le cube de "+ nombre1 + " est égal à "+ carre);
document.write("<br>");
document.write("Le produit de "+ nombre1 + " x " +multi+ " est égal à "+ produit);
return nombre ;
} 

cube(nombre1);


function afficheImg(image) 
{
   document.getElementById("papillon").innerHTML = "<img src='"+image+"'>";
   //document.write ("<img src='"+image+"'>");
}
chemin_image="/Exercice1/img/papillon.jpg";

afficheImg(chemin_image);

/*
function afficherImg(src, width, height, alt) {
   var a = document.createElement("img");
   a.src = src;
   a.width = width;
   a.height = height;
   a.alt = alt;
   document.body.appendChild(a);
}
afficherImg('/Exercice1/img/papillon.jpg',
200,200,'papillon');
*/
