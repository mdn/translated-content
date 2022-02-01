---
title: NavigatorUserMedia.getUserMedia()
slug: Web/API/Navigator/getUserMedia
tags:
  - API
  - Deprecated
  - Media
  - WebRTC
  - getusermedia
translation_of: Web/API/Navigator/getUserMedia
original_slug: NavigatorUserMedia.getUserMedia
---
{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

La fonction obsolète **Navigator.getUserMedia()** demande à l'utilisateur la permission d'utiliser une entrée vidéo (ex: une webcam ou un écran partagé) ou audio (ex: un microphone) de l'utilisateur.

Si ce dernier l'autorise, un {{domxref("MediaStream")}} est transmis au callback spécifié, il contient les pistes audio et/ou vidéo des entrées autorisées. Si l'utilisateur refuse l'accès, que le périphérique n'existe pas, ou qu'une erreur quelconque se produit, le callback d'erreur est alors exécuté avec comme paramètre un objet {{domxref("MediaStreamError")}}, il décrit l'erreur qui vient de se produire. Si l'utilisateur ne fait aucun choix, aucun callback n'est exécuté.

> **Note :** Il s'agit d'une ancienne méthode, veuillez utiliser la méthode {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} à la place. Bien qu'elle ne soit pas techniquement obsolète, l'utilisation de callbacks l'est, les spécifications encouragent fortamment l'utilisation de la nouvelle version avec {{jsxref("promise", "promesses")}}.

## Syntaxe

    navigator.getUserMedia(constraints, successCallback, errorCallback);

### Paramètres

- constraints
  - : Un objet {{domxref("MediaStreamConstraints")}} spécifiant les types de médias que vous souhaitez recevoir, ainsi que les contraintes pour chaque type de média. Pour plus de détails, voir la section [constraints](/fr/docs/Web/API/MediaDevices/getUserMedia#Syntaxe) de la méthode {{domxref("MediaDevices.getUserMedia()")}}, ainsi que l'article [Capacités, constraintes, et configurations](/fr/docs/Web/API/Media_Streams_API/Constraints).
- successCallback

  - : Une fonction qui est invoquée lorsque la demande d'accès aux entrées média est acceptée. Cette fonction est appellée avec un paramètre: l'objet {{domxref("MediaStream")}} qui contient les flux de médias. Votre callback peut assigner le stream l'objet que vous désirez (ex: un élément {{HTMLElement("audio")}} ou {{HTMLElement("video")}}), comme dans l'exemple suivant:

    ```js
    function(stream) {
       var video = document.querySelector('video');
       video.src = window.URL.createObjectURL(stream);
       video.onloadedmetadata = function(e) {
          // Do something with the video here.
       };
    }
    ```

- errorCallback
  - : Lorsque l'appel échoue, la fonction spécifiée dans `errorCallback` est appelée avec comme seul argument l'objet {{domxref("MediaStreamError")}}. Cet objet ressemble à {{domxref("DOMException")}}. Voir {anch("Erreurs")}} plus bas sur cette page pour voir quelle erreur peut arriver.

### Valeur de retour

{{domxref("undefined")}}.

### Erreurs

{{page("/fr/docs/Web/API/MediaDevices/getUserMedia", "Errors")}}

## **Exemples**

### Largeur et hauteur

Voici un exemple de l'utilisation de `getUserMedia()`, avec les différentes mises en oeuvres pour couvrir les préfixes navigateurs. Remarquez que ceci est la façon dépréciée de procéder. Regardez les [exemples](/en-US/docs/Web/API/MediaDevices/getUserMedia#Frame_rate) sous la section {{domxref("MediaDevices.getUserMedia()")}} pour les exemples modernes.

```js
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
      function(stream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(stream);
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.log("The following error occurred: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}
```

## Permissions

Pour utiliser `getUserMedia()` dans une application installable (par exemple une application Firefox OS), vous devez spécifier un ou plusieurs des champs suivants dans le fichier de manifest.

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

See [permission: audio-capture](/en-US/Apps/Developing/App_permissions#audio-capture) and [permission: video-capture](/en-US/Apps/Developing/App_permissions#video-capture) for more information.

## Spécifications

| Spécifications                                                                                                                       | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Media Capture', '#navigatorusermedia-interface-extensions', 'navigator.getUserMedia')}} | {{Spec2('Media Capture')}} | Définition initiale. |

## Compatibilité des navigateurs

> **Attention :** Le nouveau code doit utiliser {{domxref("Navigator.mediaDevices.getUserMedia()")}} à la place.

{{Compat("api.Navigator.getUserMedia")}}

## Voir aussi

- {{domxref("MediaDevices.getUserMedia()")}} qui remplace cette méthode dépréciée.
- [WebRTC](/en-US/docs/WebRTC) - page d'introduction aux APIS
- [MediaStream API](/en-US/docs/WebRTC/MediaStream_API) - L'API des Media Streams Objects
- [Taking webcam photos](/en-US/docs/WebRTC/taking_webcam_photos) - un tutoriel à propos de l'utilisation de  `getUserMedia()` pour prendre des photos plutôt que des vidéos.
