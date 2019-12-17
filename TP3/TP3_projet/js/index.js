$(document).ready(function(){
  var locationArray = document.location.pathname.split('/');
  var filename = locationArray[locationArray.length -1];
  menu();
  if(filename == "destination.html"){
    destination();
    form();
    addDestination();
    deleteDestination();
  }

});


//Navbar//////////////////
function menu(){
navbar = `
      <li><a href="index.html">Accueil</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="service.html">Services</a>
        <ul class= sous-menu>
          <li>Informations</li>
          <li>Locations</li>
          <li>Assistance</li>
        </ul>
      </li>
      <li><a href="destination.html">Destinations</a></li>
      <li><a href="audio.html">Voyage virtuel: audio</a></li>
      <li><a href="video.html">Voyage virtuel: vidéo</a></li>
      <li><a href="contact.html">Contact</a></li>`;

  $('#menu').html(navbar);
}

// formulaire add destination
function form(){
  formulaire = `
        <div>
            <label for="input-country">Pays</label>
            <input type="text" id="input-country">
        </div>
        <div>
            <label for="input-circuit">Circuit</label>
            <input type="text" id="input-circuit">
        </div>
        <div>
            <label for="input-image">Image</label>
            <input type="text" id="input-image" placeholder="../img/norvege.jpg">
        </div>
        <div>
            <label for="input-price">Prix</label>
            <input type="number" id="input-price">
        </div>
        <div>
          <button type="button" class="btn btn-info" id="saveDestination">valider</button>
        </div>
    `;

    $('#AddForm').html(formulaire);
  }

//Page Destination ///////////////////////////////////
function destination(){

  var destinations = [
    {Pays:"Etats-Unis",Circuit:"Zion",Prix:1500, Images:"../img/usa.jpg"},
    {Pays:"Norvege",Circuit:"Oslo",Prix:1800,Images:"../img/norvege.jpg"},
    {Pays:"Islande",Circuit:"Reykjavik",Prix:2000,Images:"../img/islande.jpg"},
    {Pays:"Ecosse",Circuit:"Glasgow",Prix:1000,Images:"../img/ecosse.jpg"},
  ];

  destinations.forEach(destinations => {
    $("#destinations").append(
      `<tr>
      <td>${destinations.Pays}</td>
      <td>${destinations.Circuit}</td>
      <td>${destinations.Prix}€</td>
      <td><img width="230px"height="150px" alt="islande" title="islande" src="${destinations.Images}"></td>
      <td><button type="button" class="btn btn-warning" id="updateDestination">modifier</button>
      <button type="button" class="btn btn-danger" onclick="deleteDestination(this)" >supprimer</button></td>
      </tr>`)
    })
  }

//////////// AJout d'une destination /////////////////////////////
  function addDestination(){
    $('#saveDestination').click(function() {
      event.preventDefault();
      data = [ $('#input-country').val(),
        $('#input-circuit').val(),
        $('#input-price').val(),
        $('#input-image').val()
      ];
      $('#destinations').append( `<tr><td>${data[0]}</td><td>${data[1]}</td><td>${data[2]}€</td><td><img width="230px"height="150px" alt="islande" title="islande" src="${data[3]}"></td><td>
        <button type="button" class="btn btn-warning" id="updateDestination">modifier</button>
        <button type="button" class="btn btn-danger" id="deleteDestination" onclick="deleteDestination(this)" >supprimer</button></td></tr>`
      )

     });
  }

//////////////// Supprimer une destination //////////////////////////////
  function deleteDestination(btn){
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

/////////// Modifier une destination //////////////////////////////
  function updateDestination(){
    $('#updateDestination').click(function(){
      $('destinations').val("#input-country")
      $("#input_country").html()



    })

  }
