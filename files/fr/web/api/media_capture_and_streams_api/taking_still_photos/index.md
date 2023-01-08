---
title: Prendre des photos avec la webcam
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
tags:
  - API
  - Avancé
  - WebRTC
  - getusermedia
translation_of: Web/API/WebRTC_API/Taking_still_photos
original_slug: Web/API/Media_Streams_API/Taking_still_photos
---

## Introduction et demo

Ceci est un tutoriel rapide pour apprendre comment accéder à la caméra sur votre ordinateur et prendre des photos avec. Vous pouvez voir [le code final en action dans JSFiddle](https://jsfiddle.net/BaguetteSeeker/jchezp01/).

## Les balises HTML

La première chose dont vous avez besoin pour accéder à la webcam en utilisant WebRTC est un élément {{HTMLElement("video")}} et un élément {{HTMLElement("canvas")}} dans la page. L'élément video reçoit un flux de WebRTC et l'élément canvas est nécessaire pour capturer l'image de la vidéo. Nous ajoutons aussi une image qui sera par la suite remplacée par la capture de la webcam.

```html
<video id="video"></video>
<button id="startbutton">Prendre une photo</button>
<canvas id="canvas"></canvas>
<img src="http://placekitten.com/g/320/261" id="photo" alt="photo">
```

## Le script complet

Voici le JavaScript complet en un seul morceau. Nous allons expliquer chaque section en détail ci-après.

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

  navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

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

### Obtenir la vidéo

Maintenant, nous devons récupérer le flux vidéo de la webcam:

```js
  navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
```

Dans le code ci-dessus, l'on fait appel à la méthode [MediaDevices.getUserMedia()](/fr/docs/Web/API/MediaDevices/getUserMedia) pour demander au navigateur le flux vidéo (sans le son). Cette méthode retourne une réponse de type [Promise](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) à laquelle on attache un callback de succès `then` et d'échec `catch`.

Le callback de succès reçoit un objet `stream` (flux) comme paramètre. Cet objet est ensuite assigné comme source à notre balise {{HTMLElement("video")}} via la propriété `srcObject`.

Si le navigateur échoue à acceder au flux vidéo, le callback d'échec est invoqué; ce qui se produira si aucune caméra fonctionnelle n'est accessible par le navigateur, ou si tout simplement l'utilisateur en a interdit l'accès.

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

Dans cette fonction nous re-assignons la taille du canvas à la taille de la vidéo, ce qui l'efface, et nous obtenons une image de la vidéo que nous copions sur le canvas. Ensuite nous devons transformer les données du canvas en une URI de données avec un entête PNG, et positionner l'attribut src de la photo à cette URL.

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

Vous savez désormais tout ce qu'il faut pour obtenir le flux d'une caméra et en retirer des clichés instantanés, quelque soit le navigateur !
