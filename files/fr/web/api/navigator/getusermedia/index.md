---
title: Navigator.getUserMedia()
slug: Web/API/Navigator/getUserMedia
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

La méthode obsolète **Navigator.getUserMedia()** demande à la personne la permission d'utiliser une entrée vidéo (par exemple une caméra ou un écran partagé) et une entrée audio (par exemple un microphone) comme source pour un flux média ([`MediaStream`](/fr/docs/Web/API/MediaStream)).

Si la permission est accordée, un objet `MediaStream` dont les pistes proviennent de ces appareils est transmis à la fonction de rappel. Si la permission est refusée, que le périphérique n'existe pas, ou qu'une erreur quelconque se produit, c'est la fonction de rappel d'erreur qui est exécutée, avec comme paramètre un objet [`MediaStreamError`](/fr/docs/Web/API/MediaStreamError) qui décrit l'erreur qui vient de se produire. Si l'utilisatrice ou l'utilisateur ne fait aucun choix, aucune des deux fonctions de rappel n'est exécutée.

> **Note :** Il s'agit d'une méthode historique, veuillez utiliser la méthode [`navigator.mediaDevices.getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) à la place. Bien qu'elle ne soit pas techniquement obsolète, l'utilisation de fonctions de rappels pour celle-ci est indiqué comme obsolète dans la spécification qui encourage l'utilisation de la nouvelle version utilisant les promesses.

## Syntaxe

```js
navigator.getUserMedia(constraints, successCallback, errorCallback);
```

### Paramètres

- `constraints`
  - : Un objet spécifiant les types de médias à récupérer, ainsi que les contraintes pour chaque type de média. Pour plus de détails, voir la section [contraintes](/fr/docs/Web/API/MediaDevices/getUserMedia#paramètres) de la méthode [`MediaDevices.getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia), ainsi que l'article [Capacités, constraintes, et configurations](/fr/docs/Web/API/Media_Streams_API/Constraints).
- `successCallback`

  - : Une fonction qui est invoquée lorsque la demande d'accès aux entrées média est acceptée. Cette fonction est appelée avec un paramètre&nbsp;: l'objet [`MediaStream`](/fr/docs/Web/API/MediaStream) qui contient les flux de médias. La fonction de rappel peut alors affecter le flux à l'objet souhaité (par exemple un élément [`<audio>`](/fr/docs/Web/HTML/Element/audio) ou [`<video>`](/fr/docs/Web/HTML/Element/video)), comme dans l'exemple suivant&nbsp;:

    ```js
    function(stream) {
       var video = document.querySelector('video');
       video.src = window.URL.createObjectURL(stream);
       video.onloadedmetadata = function(e) {
          // Faire quelque chose avec la vidéo.
       };
    }
    ```

- `errorCallback`
  - : Lorsque l'appel échoue, la fonction indiquée par cet argument est appelée, avec comme seul paramètre l'objet [`MediaStreamError`](/fr/docs/Web/API/MediaStreamError). Cet objet ressemble à [`DOMException`](/fr/docs/Web/API/DOMException).

### Valeur de retour

[`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined).

## Exemples

### Largeur et hauteur

Voici un exemple d'utilisation de `getUserMedia()` qui contient notamment les techniques pour gérer la compatibilité avec les différents préfixes des navigateurs. On notera bien que ce qui suit correspond à la façon déconseillée de procéder. Consultez [ces exemples](/fr/docs/Web/API/MediaDevices/getUserMedia#taux_dimages) de la page [`MediaDevices.getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) pour de meilleures pratiques.

```js
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: true, video: { width: 1280, height: 720 } },
    function (stream) {
      var video = document.querySelector("video");
      video.src = window.URL.createObjectURL(stream);
      video.onloadedmetadata = function (e) {
        video.play();
      };
    },
    function (err) {
      console.log("L'erreur suivante s'est produite : " + err.name);
    },
  );
} else {
  console.log("getUserMedia n'est pas pris en charge");
}
```

## Permissions

Pour utiliser `getUserMedia()` dans une application installable, vous devez spécifier un ou plusieurs des champs suivants dans le fichier de manifeste.

```js
"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}
```

Voir [`permission: audio-capture`](/fr/docs/Web/Apps/Developing/App_permissions#audio-capture) et [`permission: video-capture`](/fr/docs/Web/Apps/Developing/App_permissions#video-capture) pour plus d'informations.

## Compatibilité des navigateurs

> **Attention :** Du nouveau code devrait utiliser [`MediaDevices.getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) à la place.

{{Compat}}

## Voir aussi

- [`MediaDevices.getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) qui remplace cette méthode dépréciée.
- [La page d'introduction à l'API WebRTC](/fr/docs/Web/API/WebRTC_API)
- L'API [<i lang="en">MediaStream</i>](/fr/docs/Web/API/Media_Streams_API) pour les flux média
- [Prendre des photos avec la webcam](/fr/docs/Web/API/WebRTC_API/Taking_still_photos) - un tutoriel sur l'utilisation de `getUserMedia()` pour prendre des photos plutôt que des vidéos.
