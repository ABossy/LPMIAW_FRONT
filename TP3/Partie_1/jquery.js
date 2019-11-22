$(document).ready(function(){

$( "#form" ).hide();
$('#boutonD').click(function(event){
  $("#form").show();
  $("#boutonV").hide();
});

function affichage(tab){
  tab.forEach(ville => {
    console.log(ville)
    $("#listeVille").append(`<li>${ville}</li>`);
  })
  }
var france = ["paris","grenoble","lyon","nice"];
var allemagne = ["munich","berlin","freiburg","hannovre"];
var usa = ["san francisco","los angeles","las vegas","dallas"];
var espagne =["madrid","barcelone","seville", "bilbao"];

  $('#valider').click(function(event){
    $("#ville").show();
    event.preventDefault();
    var choix= $("#destination").val();
    if (france.includes(choix)){
      affichage(france);
    } else if (allemagne.includes(choix)){
      affichage(allemagne);
    } else if (usa.includes(choix)){
      affichage(usa);
    } else if (espagne.includes(choix)){
      affichage(espagne);
    }else {
      $('#boutonV').show();
    }
    });







})
