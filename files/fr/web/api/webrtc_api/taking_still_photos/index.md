---
title: Prendre des photos avec la webcam
slug: Web/API/WebRTC_API/Taking_still_photos
tags:
  - API
  - Avancé
  - WebRTC
  - getusermedia
translation_of: Web/API/WebRTC_API/Taking_still_photos
original_slug: WebRTC/Prendre_des_photos_avec_la_webcam
---
## Introduction et demo

Ceci est un tutoriel rapide pour apprendre comment accéder à la caméra sur votre ordinateur et prendre des photos avec. Vous pouvez voir [le code final en action dans JSFiddle](http://jsfiddle.net/codepo8/agaRe/4/). Il y a aussi une version plus avancée pour charger des photos sur **imgur** en JavaScript, disponible en [code source sur GitHub](https://github.com/codepo8/interaction-cam/) ou [en demo](http://codepo8.github.com/interaction-cam/).

## Les balises HTML

La première chose dont vous avez besoin pour accéder à la webcam en utilisant WebRTC est un élément {{HTMLElement("video")}} et un élément {{HTMLElement("canvas")}} dans la page. L'élément video reçoit un flux de WebRTC et l'élément canvas est nécessaire pour capture l'image de la vidéo. Nous ajoutons aussi une image qui sera par la suite remplacée par la capture de la webcam.

```html
<video id="video"></video>
<button id="startbutton">Prendre une photo</button>
<canvas id="canvas"></canvas>
<img src="http://placekitten.com/g/320/261" id="photo" alt="photo">
```

## Le script complet

Voice le JavaScript complet en un seul morceau. Nous allons expliquer chaque section en détail ci-après.

```js
(function() {

  var streaming = false,
      video        = document.querySelector('#video'),
      cover        = document.querySelector('#cover'),
      canvas       = document.querySelector('#canvas'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#startbutton'),
      width = 320,
      height = 0;

  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);

  navigator.getMedia(
    {
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    function(err) {
      console.log("An error occured! " + err);
    }
  );

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  startbutton.addEventListener('click', function(ev){
      takepicture();
    ev.preventDefault();
  }, false);

})();
```

## Les explications pas à pas.

Voici ce qui se passe.

### Fonction anonyme

```js
(function() {

  var streaming = false,
      video        = document.querySelector('#video'),
      cover        = document.querySelector('#cover'),
      canvas       = document.querySelector('#canvas'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#startbutton'),
      width = 320,
      height = 0;
```

Afin d'éviter les variables globales, on encapsule le script dans une fonction anonyme. Nous capturons les éléments du HTML dont nous avons besoin et nous définissons une largeur de vidéo à 320 et une hauteur à 0. La hauteur appropriée sera calculée plus tard.

> **Attention :** À l'heure actuelle, il y a une différence dans les tailles de vidéo offertes par getUserMedia. Firefox Nightly utilise une résolution de 352x288 alors que Opera et Chrome utilisent une résolution de 640x400. Celà changera dans le futur, mais redimensionner avec le rapport comme nous le faisons nous épargnera des mauvaises surprises.

### Obtenir la vidéo

Maintenant, nous devons récupérer la vidéo de la webcam. Pour l'instant c'est préfixé par les différents navigateurs, nous devons donc tester quelle forme est supportée:

```js
  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);
```

Nous demandons au navigateur de nous donner la vidéo sans le son et de récupérer le flux dans une fonction callback:

```js
  navigator.getMedia(
    {
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    function(err) {
      console.log("An error occured! " + err);
    }
  );
```

Firefox Nightly nécessite de définir la propriété `mozSrcObject` de l'élément vidéo pour pouvoir le jouer; pour les autres navigateurs, définissez l'attribut `src`. Alors que Firefox peut utiliser les flux directement, Webkit et Opera ont besoin de créer un objet URL. Cela sera standardisé dans un futur proche.

### Redimensionner la vidéo

Ensuite nous devons redimensionner la vidéo aux bonnes dimensions.

```js
  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);
```

Nous nous abonnons à l'évènement `canplay` de la vidéo et lisons ses dimensions en utilisant `videoHeight` et `videoWidth`. Elles ne sont pas disponibles de manière fiable avant que l'évènement ne soit déclenché. Nous positionnons `streaming` à true pour faire cette vérification une seule fois vu que l'évènement `canplay` se déclenchera à répétition.

C'est tout ce qu'il faut pour jouer la vidéo.

### Prendre une photo

Maintenant nous devons capturer la photo en utilisant le canvas. Nous assignons un gestionaire d'événements au bouton de démarrage pour appeler la fonction `takepicture` function.

```js
  startbutton.addEventListener('click', function(ev){
      takepicture();
    ev.preventDefault();
  }, false);
```

Dans cette fonction nous re-assignons la taille du canvas à la taille de la vidéo, ce qui l'efface,  et nous obtenons une image de la vidéo que nous copions sur le canvas. Ensuite nous devons transformer les données du canvas en une URI de données avec un entête PNG, et positionner l'attribut src de la photo à cette URL.

```js
  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

})();
```

C'est tout ce qu'il faut pour afficher un flux de la webcam et en prendre une photo, que ce soit sur Chrome, Opera ou Firefox.

## Support

Actuellement, l'accès à la caméra via WebRTC est supporté dans Chrome, Opera et Firefox Nightly 18. Activer WebRTC dans Firefox Nightly demande que vous positionnez une valeur dans la configuration:

- Entrez "about:config" dans la barre d'adresse et confirmez les changements
- Trouver l'entrée "media.navigator.enabled" et positionnez la à true
