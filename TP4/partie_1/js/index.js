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

  if(filename == "contact.html"){
    contact();
  }

});


//Navbar//////////////////
function menu(){
navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">ATR</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item"><a href="index.html" class="nav-link">Accueil</a></li>
      <li class="nav-item"><a href="menu.html" class="nav-link">Menu</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Informations</a>
          <a class="dropdown-item" href="#">Locations</a>
          <a class="dropdown-item" href="#">Assistance</a>
        </div>
      </li>
      <li class="nav-item"><a href="destination.html" class="nav-link">Destinations</a></li>
      <li class="nav-item"><a href="audio.html" class="nav-link">Voyage virtuel: audio</a></li>
      <li class="nav-item"><a href="video.html" class="nav-link">Voyage virtuel: vidéo</a></li>
      <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>

    </ul>
  </div>
</nav>
`;

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
      `<div class="destination-item">
      <div class="destination-card">
        <header class="destination-card__header">
          <h1 class="destination-card__title">${destinations.Circuit}</h1>

        </header>
        <p class="destination-card__country">${destinations.Pays}</p>

        <p class="destination-card__price">${destinations.Prix}€</p>
        <figure class="destination-card__image"><img width="230px"height="150px" alt="islande" title="islande" src="${destinations.Images}"></figure>


        <div class="destination-card__tools">
          <button type="button" class="btn btn-warning" id="updateDestination">modifier</button>
          <button type="button" class="btn btn-danger" onclick="deleteDestination(this)" >supprimer</button>
        </div>
      </div>
      </div>`)
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


  function contact(){
    contactForm = `
    <div class="formulaire">
    <form action="/form-page" method="post">
      <div>
        <label for="name">Nom :</label>
        <input type="text" id="name" name="user_name"required>
      </div><br>
      <div>
        <label for="name">Prenom :</label>
        <input type="text" id="prenom" name="user_firstname">
      </div><br>
      <div>
        <label for="mail">e-mail :</label>
        <input type="email" id="mail" name="user_mail" pattern=".+@globex.com" size="30">
      </div><br>
      <div>
        <label for="mail">telephone:</label>
        <input type="tel" id="telephone" name="user_phone" pattern="[0-9]{10}" maxlength="10">
      </div><br>
      <div>
        <label for="msg">Message :</label>
        <textarea id="msg" name="user_message"required></textarea>
      </div><br>
      <div class="button">
          <button type="submit">Envoyer le message</button>
      </div>
    </form>
    `

      $('#contact').html(contactForm);
  }
