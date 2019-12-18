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

  if(filename == "video.html"){
    video();
  }

  if(filename == "index.html"){
    texteAccueil();
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
      <a class="nav-link dropdown-toggle" href="menu.html" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">Connexion</a>
        <a class="dropdown-item" href="#">Recherche</a>
        <a class="dropdown-item" href="#">Reservation</a>
        <a class="dropdown-item" href="#">Promotion</a>
      </div>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="service.html" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

      $('#destinations').append(`
        <div class="destination-item">
        <div class="destination-card">
          <header class="destination-card__header">
            <h1 class="destination-card__title">${data[0]}</h1>

          </header>
          <p class="destination-card__country">${data[1]}</p>

          <p class="destination-card__price">${data[2]}€</p>
          <figure class="destination-card__image"><img width="230px"height="150px" alt="islande" title="islande" src="${data[3]}"></figure>


          <div class="destination-card__tools">
            <button type="button" class="btn btn-warning" id="updateDestination">modifier</button>
            <button type="button" class="btn btn-danger" onclick="deleteDestination(this)" >supprimer</button>
          </div>
        </div>
        </div>
        `)

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
    <div class="containerCustom">
            <form id="contact">
                <fieldset>
                    <input placeholder="Votre nom" type="text" tabindex="1" required autofocus>
                </fieldset>
                <fieldset>
                    <input placeholder="Votre adresse mail" type="email" tabindex="2" required>
                </fieldset>
                <fieldset>
                    <input placeholder="Votre numéro de téléphone (facultatif)" type="tel" tabindex="3" required>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Ecrivez votre message..." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="Envoyez" type="submit" id="contact-submit" data-submit="...Envoie">Submit</button>
                </fieldset>
            </form>
        </div>
    `

      $('#contact').html(contactForm);
  }

  function video(){
    var videoDestination = [
      {Titre:"Etats-Unis",Description:"Zion",Video:"../video/usa.mp4"},
      {Titre:"Norvege",Description:"Oslo",Video:"../video/iceland.mp4"},

    ];

    videoDestination.forEach(videoDestination => {
      $("#videos").append(
        `<div class="video-item">
        <div class="video-card">
          <header class="video-card__header">
            <h1 class="video-card__titre">${videoDestination.Titre}</h1>
          </header>
          <p class="video-card__description">${videoDestination.Description}</p>
          <video controls autoplay width="230px" height="230px"src="${videoDestination.Video}">
        </div>
        </div>
        `)
      });

}

function texteAccueil(){
  texte = `      <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </blockquote>
        <p class="text-justify"><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></i>
        </article>
        <hr>

        <h3>Informations pratiques</h3>
        <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <footer>Copyright (c) 2018 Copyright Holder All Rights Reserved.</footer>
  `
    $('.Description').html(texte);
}
