---
title: MediaDevices.getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
translation_of: Web/API/MediaDevices/getUserMedia
---
{{APIRef("WebRTC")}}

La méthode **`MediaDevices.getUserMedia()`** invite l'utilisateur à autoriser l'utilisation d'une entrée multimédia qui produit un {{domxref("MediaStream")}} avec des pistes contenant les types de médias demandés. Ce flux peut inclure, par exemple, une piste vidéo (produite par une source matérielle ou vidéo virtuelle telle qu'une caméra, un dispositif d'enregistrement vidéo, un service de partage d'écran, etc.), une piste audio (de la même manière, produite par une source physique ou Source audio virtuelle comme un microphone, convertisseur A / D ou similaire) et éventuellement d'autres types de piste.

Il renvoie un {{jsxref("Promise")}} qui est résolu avec succès si l'utilisateur donne son autorisation; {{domxref("MediaStream")}} est fourni à ce moment-là. Si l'utilisateur refuse ou si le média correspondant n'est pas disponible, le {{jsxref("Promise")}} est rejetée avec respectivement `PermissionDeniedError` ou `NotFoundError`.

> **Note :** Il est possible que le {{jsxref("Promise")}} renvoyé ne soit _ni_ résolu ni rejeté, car l'utilisateur n'est pas tenu de faire un choix. .

Généralement, vous accédez à l'objet {{domxref("MediaDevices")}} avec {{domxref("navigator.mediaDevices")}} , comme ceci:

```js
navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
  /* use the stream */
}).catch(function(err) {
  /* handle the error */
});
```

## Syntaxe

    var promise = navigator.mediaDevices.getUserMedia(constraints);

### Paramètres

- `constraints`

  - : Un objet {{domxref("MediaStreamConstraints")}} spécifiant les types de supports à demander, ainsi que toutes les exigences pour chaque type.

    Le paramètre constraints est un objet `MediaStreamConstraints` avec deux membres: `video` et `audio` , décrivant les types de média demandés. L'un ou l'autre ou les deux doivent être spécifiés. Si le navigateur ne trouve pas toutes les pistes multimédia avec les types spécifiés qui répondent aux contraintes fournies, la promesse renvoyée est rejetée avec `NotFoundError` .

    Les demandes suivantes sont audio et vidéo sans aucune exigence spécifique:

    ```js
    { audio: true, video: true }
    ```

    Si `true` est spécifié pour un type de média, le flux résultant est _requis_ pour obtenir ce type de piste. Si on ne peut pas l'obtenir pour une raison quelconque, l'appel à `getUserMedia()` entraînera une erreur.

    Alors que les informations sur les caméras et les microphones d'un utilisateur sont inaccessibles pour des raisons de confidentialité, une application peut demander les capacités de caméra et de microphone dont elle a besoin en utilisant des contraintes supplémentaires. Ce qui suit exprime une préférence pour la résolution de la caméra 1280x720:

    ```js
    {
      audio: true,
      video: { width: 1280, height: 720 }
    }
    ```

    Le navigateur essaiera d'honorer cela, mais peut renvoyer d'autres résolutions si une correspondance exacte n'est pas disponible, ou si l'utilisateur l'annule.

    Pour _exiger_ une capacité, utilisez les mots-clés `min` , `max` ou `exact` (aka `min == max` ). Ce qui suit exige une résolution minimale de 1280x720:

    ```js
    {
      audio: true,
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      }
    }
    ```

    Si aucune caméra n'existe avec cette résolution ou plus haut, le {{jsxref("Promise")}} retourné sera rejeté avec `OverconstrainedError`.

    La raison de la différence de comportement est que les mots clés `min` , `max` et `exact` sont intrinsèquement obligatoires, alors que les valeurs simples et un mot-clé appelé `ideal` ne le sont pas. Voici un exemple plus complet:

    ```js
    {
      audio: true,
      video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 776, ideal: 720, max: 1080 }
      }
    }
    ```

    Une valeur `ideal` , lorsqu'elle est utilisée, a une gravité, ce qui signifie que le navigateur essaiera de trouver le réglage (et la caméra, si vous en avez plus d'une), avec les valeurs les plus proches des valeurs idéales données.

    Les valeurs simples sont par nature idéales, ce qui signifie que le premier de nos exemples de résolution ci-dessus aurait pu être écrit comme ceci:

    ```js
    {
      audio: true,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }
    ```

    Toutes les contraintes ne sont pas des nombres. Par exemple, sur les appareils mobiles, les éléments suivants préfèrent la caméra avant (si celle-ci est disponible) sur l'arrière:

    ```js
    { audio: true, video: { facingMode: "user" } }
    ```

    Pour _exiger_ la caméra arrière, utilisez:

    ```js
    { audio: true, video: { facingMode: { exact: "environment" } } }
    ```

### Valeur de retour

Un {{jsxref("Promise")}} qui reçoit en objet {{domxref("MediaStream")}} lorsque les médias demandés ont été obtenus avec succès.

### Erreurs

Les rejets du {{jsxref("Promise")}} retourné sont effectués en passant un objet erreur [`DOMException`](https://translate.googleusercontent.com/translate_c?depth=1&hl=fr&prev=search&rurl=translate.google.fr&sl=en&sp=nmt4&u=https://developer.mozilla.org/en-US/docs/Web/API/DOMException&usg=ALkJrhgnRUAs3RQR8I7ulOitmhRQUlVEUA) au gestionnaire d'erreurs. Les erreurs possibles sont:

- `AbortError`
  - : Bien que l'utilisateur et le système d'exploitation aient tous deux accédé à l'équipement matériel, et qu'aucun problème de matériel ne causerait un `NotReadableError` , un problème s'est produit, ce qui a empêché l'utilisation du périphérique.
- `NotAllowedError`

  - : L'utilisateur a spécifié que l'instance de navigation actuelle n'a pas accès au périphérique; Ou l'utilisateur a refusé l'accès pour la session en cours; Ou l'utilisateur a refusé tout l'accès aux périphériques multimédias utilisateurs dans le monde entier.

    > **Note :** Les versions plus anciennes de la spécification ont utilisé `SecurityError` pour cela à la place; `SecurityError` a pris une nouvelle signification.

- `NotFoundError`
  - : Aucune piste multimédia du type spécifié n'a été trouvée satisfaisant les contraintes données.
- `NotReadableError`
  - : Bien que l'utilisateur ait autorisé l'utilisation des appareils correspondants, une erreur matérielle s'est produite sur le système d'exploitation, le navigateur ou le niveau de la page Web qui a empêché l'accès au périphérique.
- `OverConstrainedError`

  - : Aucun dispositif candidat répondant aux critères demandés. L'erreur est un objet de type `OverconstrainedError` et possède une propriété de `constraint` dont la valeur de chaîne est le nom d'une contrainte impossible à honorer et une propriété `message` contenant une chaîne lisible par l'homme expliquant le problème.

    > **Note :** Étant donné que cette erreur peut se produire même lorsque l'utilisateur n'a pas encore autorisé l'utilisation du périphérique sous-jacent, il peut être utilisé comme surface d'empreinte digitale.

- `SecurityError`
  - : Le support multimédia utilisateur est désactivé sur le {{domxref("Document")}} sur lequel `getUserMedia()` été appelé. Le mécanisme par lequel le support média utilisateur est activé/désactivé est laissé à la discrétion de l'utilisateur.
- `TypeError`
  - : La liste des contraintes spécifiées est vide ou toutes les contraintes sont définies comme `false` .

## **Exemple**s

### Largeur et hauteur

Cet exemple donne une préférence pour la résolution de la caméra et attribue l'objet [`MediaStream`](https://translate.googleusercontent.com/translate_c?depth=1&hl=fr&prev=search&rurl=translate.google.fr&sl=en&sp=nmt4&u=https://developer.mozilla.org/en-US/docs/Web/API/MediaStream&usg=ALkJrhipdR5n2jQ-BGrPTomESH_A7nof4g) résultant à un élément vidéo.

    // Prefer camera resolution nearest to 1280x720.
    var constraints = { audio: true, video: { width: 1280, height: 720 } };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      var video = document.querySelector('video');
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

### Utilisation de la nouvelle API dans les navigateurs plus anciens

Voici un exemple d'utilisation de `navigator.mediaDevices.getUserMedia()` , avec un adaptateur pour faire face aux navigateurs plus anciens. Notez que cet adaptater ne corrige pas les différences existantes dans la syntaxe des contraintes, ce qui signifie que les contraintes ne fonctionneront pas bien dans les navigateurs. Il est recommandé d'utiliser l'adaptateur [adapter.js](https://github.com/webrtc/adapter)  a la place, qui gère les contraintes.

```js
// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {

    // First get ahold of the legacy getUserMedia, if present
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
.then(function(stream) {
  var video = document.querySelector('video');
  // Older browsers may not have srcObject
  if ("srcObject" in video) {
    video.srcObject = stream;
  } else {
    // Avoid using this in new browsers, as it is going away.
    video.src = window.URL.createObjectURL(stream);
  }
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
```

### Taux d'images

Des cadences inférieures peuvent être souhaitables dans certains cas, comme les transmissions WebRTC avec des restrictions de bande passante.

```js
var constraints = { video: { frameRate: { ideal: 10, max: 15 } } };
```

### Caméra avant et arrière

Sur les téléphones portables.

```js
var front = false;
document.getElementById('flip-button').onclick = function() { front = !front; };

var constraints = { video: { facingMode: (front? "user" : "environment") } };
```

## Permissions

Pour utiliser `getUserMedia()` dans une application installable (par exemple, une [application Firefox OS](https://translate.googleusercontent.com/translate_c?depth=1&hl=fr&prev=search&rurl=translate.google.fr&sl=en&sp=nmt4&u=https://developer.mozilla.org/en-US/Apps/Build/Building_apps_for_Firefox_OS/Firefox_OS_app_beginners_tutorial&usg=ALkJrhjjqOGYUEn75gZx3AcoQDArrosa9Q) ), vous devez spécifier un ou les deux champs suivants dans votre fichier manifeste:

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

Voir [permission: audio-capture](/en-US/Apps/Developing/App_permissions#audio-capture) et [permission: video-capture](/en-US/Apps/Developing/App_permissions#video-capture) pour plus d'informations.

## Specifications

| Specification                                                                                                                | Status                               | Comment            |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('Media Capture', '#dom-mediadevices-getusermedia', 'MediaDevices.getUserMedia()')}} | {{Spec2('Media Capture')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.MediaDevices.getUserMedia")}}

## Voir aussi

- L'ancienne API {{domxref("navigator.getUserMedia()")}}.
- {{domxref("mediaDevices.enumerateDevices()")}} : Apprenez les types et le nombre de périphériques que l'utilisateur dispose.
- [WebRTC API](/fr/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API (Media Streams)](/fr/docs/Web/API/Media_Streams_API)
- [Taking webcam photos](/fr/docs/Web/API/WebRTC_API/Taking_still_photos) : un tutoriel sur l'utilisation de `getUserMedia()` pour prendre des photos plutôt que de la vidéo.
