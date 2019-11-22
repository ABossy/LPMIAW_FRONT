$(document).ready(function(){
var destinations = [
  {Pays:"Etats-Unis",Circuit:"Zion",Prix:1500, Images:"../img/usa.jpg"},
  {Pays:"Norvege",Circuit:"Oslo",Prix:1800,Images:"../img/norvege.jpg"},
  {Pays:"Islande",Circuit:"Reykjavik",Prix:2000,Images:"../img/islande.jpg"},
  {Pays:"Ecosse",Circuit:"Glasgow",Prix:1000,Images:"../img/ecosse.jpg"},
];

  destinations.forEach(destinations => {
      console.log(destinations)
$("#destinations").append(
      `<tr>
        <td>${destinations.Pays}</td>
        <td>${destinations.Circuit}</td>
        <td>${destinations.Prix}€</td>
        <td><img width="330px"height="230px" alt="islande" title="islande" src="${destinations.Images}"></td>
        <td><button>reservation</button></td>
      </tr>`)
  })





















});
