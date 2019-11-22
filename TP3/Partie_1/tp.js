window.addEventListener("load", displayFunction);


function displayFunction(){
  //randomNumber();
  document.getElementById("bouton").addEventListener("click",country);
}


function randomNumber() {
  var numbers = Math.floor(Math.random() * 11);
  var choix = window.prompt("choisissez un chiffre entre 0 et 10", 3);
  var i =1;

  while(i!=3){
    if (resultat != numbers){
        resultat = window.prompt("c'est plus grand")
        document.getElementById('resultat').innerHTML="perdu!";

    }else {
            document.getElementById('resultat').innerHTML="Bravo!";
    }
    i = i+1

  }

}

function country(){
  var france = ["paris","grenoble","lyon","nice"];
  var allemagne = ["munich","berlin","freiburg","hannovre"];
  var usa = ["san francisco","los angeles","las vegas","dallas"];
  var espagne =["madrid","barcelone","seville", "bilbao"];

  var choix = document.getElementById('choix').value;

  if (france.includes(choix)){
    alert("bienvenue en France");
  } else if (allemagne.includes(choix)){
    alert("bienvenue en Allemagne");
  } else if (usa.includes(choix)){
    alert("bienvenue aux Etats-unis");
  } else if (espagne.includes(choix)){
    alert("bienvenue en Espagne");
  }else {
    event.preventDefault();
  }
}
