---
title: Animation de textures en WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Dans cette démonstration, nous construisons sur l'exemple précédent en remplaçant nos textures statiques par les images d'un fichier vidéo mp4 en cours de lecture. C'est en fait assez facile à faire, mais c'est amusant à regarder, alors commençons. Un code similaire peut être réalisé pour utiliser n'importe quel type de données (comme un {{HTMLElement ("canvas")}}) comme source pour vos textures..

## Accéder à la vidéo

La première étape consiste à créer l'élément {{HTMLElement("video")}} que nous utiliserons pour récupérer les images vidéo :

```js
// sera mis à true quand la vidéo pourra être copiée dans la texture
var copierVideo = false;

function configurerVideo(url) {
  const video = document.createElement("video");

  var playing = false;
  var timeupdate = false;

  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  // Le fait d'attendre ces 2 évènements assure
  // qu'il y a des données dans la vidéo

  video.addEventListener(
    "playing",
    function () {
      playing = true;
      verifierPret();
    },
    true,
  );

  video.addEventListener(
    "timeupdate",
    function () {
      timeupdate = true;
      verifierPret();
    },
    true,
  );

  video.src = url;
  video.play();

  function verifierPret() {
    if (playing && timeupdate) {
      copierVideo = true;
    }
  }

  return video;
}
```

D'abord, nous créons un élément vidéo. Nous le mettons en lecture automatique, nous coupons le son et nous faisons tourner la vidéo en boucle. Nous configurons ensuite 2 événements pour voir que la vidéo est en cours de lecture et que le temps a été mis à jour. Nous avons besoin de ces deux vérifications, car c'est une erreur que d'essayer de télécharger sur WebGL une vidéo qui n'a pas encore de données disponibles. La vérification de ces deux événements garantit que des données sont disponibles et que l'on peut démarrer en toute sécurité le chargement de la vidéo dans une texture WebGL. Dans le code ci-dessus, nous vérifions si nous avons reçu ces deux événements et si c'est le cas, nous mettons une variable globale, `copierVideo`, à true pour nous dire qu'il est possible de commencer à copier la vidéo dans une texture.

Et enfin, nous définissons l'attribut `src` pour commencer, et nous appelons `play` pour démarrer le chargement et la lecture de la vidéo.

## Utilisation des images vidéo comme texture

La prochaine modification porte sur `initTexture()`, qui devient beaucoup plus simple, car elle n'a plus besoin de charger un fichier image. A la place, tout ce qu'elle fait est de créer un objet texture vide, d'y mettre un unique pixel et de définir son filtrage pour une utilisation ultérieure :

```js
function initTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Parce que la vidéo doit être téléchargée depuis sur Internet,
  // cela peut prendre un certain temps jusqu'à ce qu'elle soit prête, donc
  // mettre un seul pixel dans la texture, de façon à ce que nous puissions
  // l'utiliser immédiatement.
  const niveau = 0;
  const formatInterne = gl.RGBA;
  const largeur = 1;
  const hauteur = 1;
  const bordure = 0;
  const formatSrc = gl.RGBA;
  const typeSrc = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // bleu opaque
  gl.texImage2D(
    gl.TEXTURE_2D,
    niveau,
    formatInterne,
    largeur,
    hauteur,
    bordure,
    formatSrc,
    typeSrc,
    pixel,
  );

  // Désactiver mips et définir l'emballage comme accroché au bord afin qu'il
  // fonctionne indépendamment des dimensions de la vidéo.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return texture;
}
```

Voici à quoi ressemble la fonction `mettreAJourTexture()`&nbsp;; c'est là où le vrai travail est fait :

```js
function mettreAJourTexture(gl, texture, video) {
  const niveau = 0;
  const formatInterne = gl.RGBA;
  const formatSrc = gl.RGBA;
  const typeSrc = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    niveau,
    formatInterne,
    formatSrc,
    typeSrc,
    video,
  );
}
```

Vous avez déjà vu ce code. Il est presque identique à la fonction onload de l'image dans l'exemple précédent, sauf quand nous appellons `texImage2D()`, au lieu de passer un objet `Image`, nous passons l'élément {{HTMLElement ("video")}}. WebGL sait comment extraire l'image en cours et l'utiliser comme texture.

Si `copierVideo` est true, alors `mettreAJourTexture()` est appelé à chaque fois juste avant que nous appellions la fonction `dessinerScene()`.

```js
var alors = 0;

// Dessiner la scène répétitivement
function dessiner(maintenant) {
  maintenant *= 0.001; // convertir en seconds
  const ecartTemps = maintenant - alors;
  alors = maintenant;

  if (copierVideo) {
    mettreAJourTexture(gl, texture, video);
  }

  dessinerScene(gl, programInfo, buffers, texture, ecartTemps);

  requestAnimationFrame(dessiner);
}
requestAnimationFrame(dessiner);
```

C'est tout pour ce qu'il y a à faire pour cela !

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Ouvrir cette démo dans une nouvelle page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## Voir aussi

- [Utilisation de l'audio et de la video dans Firefox](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
