---
title: MediaDevices
slug: Web/API/MediaDevices
tags:
  - API
  - Appareils
  - Audio
  - Conference
  - Interface
  - Media
  - Partage
  - Reference
  - Video
  - WebRTC
translation_of: Web/API/MediaDevices
---
{{APIRef("Media Capture and Streams")}}

L'interface **`MediaDevices`** permet d'accéder aux périphériques d'entrée multimédia connectés tels que les caméras et les microphones, ainsi que le partage d'écran. Essentiellement, il vous permet d'accéder à n'importe quelle source matérielle de données multimédias.

## Propriétés

_Hérite des propriétés de son interface parente, {{domxref("EventTarget")}}._

## Événéments

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : Déclenché lorsqu'un périphérique d'entrée ou de sortie multimédia est connecté ou retiré de l'ordinateur de l'utilisateur.
    Egalement disponible via la propriété {{domxref("MediaDevices/ondevicechange", "ondevicechange")}}.

## Méthodes

_Hérite des méthodes de son interface parente, {{domxref("EventTarget")}}._

- {{ domxref("MediaDevices.enumerateDevices", "enumerateDevices()") }}
  - : Obtient un tableau d'informations sur les périphériques d'entrée et de sortie multimédia disponibles sur le système.
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : Renvoie un objet conforme à {{domxref("MediaTrackSupportedConstraints")}} indiquant quelles propriétés de contrainte sont prises en charge sur l'interface {{domxref("MediaStreamTrack")}}. Consultez {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API", "Capabilities and constraints")}} pour en savoir plus sur les contraintes et comment les utiliser.
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : Invite l'utilisateur à sélectionner un affichage ou une partie d'un affichage (comme une fenêtre) à capturer en tant que {{domxref("MediaStream")}} à des fins de partage ou d'enregistrement. Renvoie une promesse qui se résout en un `MediaStream`.
- {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}
  - : Avec l'autorisation de l'utilisateur via une invite, allume une caméra et / ou un microphone sur le système et fournit un {{domxref("MediaStream")}} contenant une piste vidéo et / ou une piste audio avec l'entrée.

## Exemple

```js
'use strict';

// Placez les variables dans la portée globale pour les rendre disponibles à la console du navigateur.
var video = document.querySelector('video');
var constraints = window.constraints = {
  audio: false,
  video: true
};
var errorElement = document.querySelector('#errorMsg');

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  var videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.onremovetrack = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // rendre la variable disponible dans la console du navigateur
  video.srcObject = stream;
})
.catch(function(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
        constraints.video.height.exact + ' px is not supported by your device.');
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg('getUserMedia error: ' + error.name, error);
});

function errorMsg(msg, error) {
  errorElement.innerHTML += '<p>' + msg + '</p>';
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}
```

## Spécifications

| Spécification                                                                        | Statut                               | Commentaire         |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Media Capture', '#mediadevices', 'MediaDevices')}} | {{Spec2('Media Capture')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.MediaDevices")}}

## Voir aussi

- [Media Capture et Streams API](/en-US/docs/Web/API/Media_Streams_API): l'API dont cette interface fait partie.
- [API de capture d'écran](/en-US/docs/Web/API/Screen_Capture_API): L'API définissant la méthode {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}.
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Renvoie une référence à un objet `MediaDevices` qui peut être utilisé pour accéder aux périphériques.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) Capture et lecture vidéo HTML5 à l'aide de `MediaDevices` et de l'API d'enregistrement MediaStream ([source sur GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): Application Web de laboratoire de langage vidéo HTML5 video utilisant `MediaDevices` et l'API d'enregistrement MediaStream pour l'enregistrement vidéo ([source sur GitHub](https://github.com/chrisjohndigital/OpenLang))
