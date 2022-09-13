
function strtok(str1,str2,n){
var str1 = "robert ; dupont ; amiens ; 80000";
var str2 =  ";";
var n = window.prompt("Donnez le numéro du caractere à afficher");
var words = str1.split(str2);
document.write(words[n]);
return n
}
strtok();




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
/*
function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log(`La chaine d'origine est : ${stringToSplit}`);
    console.log(`Le délimiteur est : ${separator}`);
    console.log(`Le tableau comporte ${arrayOfStrings.length} elements : `, arrayOfStrings.join(' / '));
  }
  
  var tempestString = "Oh brave new world that has such people in it.";
  var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
  
  var espace = " ";
  var virgule = ",";
  
  splitString(tempestString, espace);
  splitString(tempestString);
  splitString(monthString, virgule);*/