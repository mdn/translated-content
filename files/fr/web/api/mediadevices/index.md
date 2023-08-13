---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

{{APIRef("Media Capture and Streams")}}

L'interface **`MediaDevices`** permet d'accéder aux périphériques média d'entrée tels que les caméras, micros, mais aussi le partage d'écran. Autrement dit, elle fournit un accès à toute source matérielle de données média.

{{InheritanceDiagram}}

## Propriétés des instances

_Hérite des propriétés de son interface parente, [`EventTarget`](/fr/docs/Web/API/EventTarget)._

## Méthodes des instances

_Hérite des méthodes de son interface parente, [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`enumerateDevices()`](/fr/docs/Web/API/MediaDevices/enumerateDevices)
  - : Fournit un tableau d'informations sur les appareils média (en entrée et en sortie) disponibles sur le système.
- [`getSupportedConstraints()`](/fr/docs/Web/API/MediaDevices/getSupportedConstraints)
  - : Renvoie un objet dont le format respecte [`MediaTrackSupportedConstraints`](/fr/docs/Web/API/MediaTrackSupportedConstraints) et qui indique les propriétés contraintes qui sont prises en charge par l'interface [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack). Voir [l'API <i lang="en">Media Streams</i>](/fr/docs/Web/API/Media_Capture_and_Streams_API/Constraints) pour en savoir plus à propos des contraintes et leur utilisation.
- [`getDisplayMedia()`](/fr/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Demande à la personne de sélectionner un affichage ou une portion d'un affichage (par exemple une fenêtre) pour le/la capturer comme [`MediaStream`](/fr/docs/Web/API/MediaStream) à des fins de partage ou d'enregistrement. Cette méthode renvoie une promesse qui se résout en `MediaStream`.
- [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia)
  - : Après avoir demandé la permission à la personne, active la caméra ou le micro du système et fournit un flux [`MediaStream`](/fr/docs/Web/API/MediaStream) contenant une piste vidéo et/ou audio correspondante.
- [`selectedAudioOutput()`](/fr/docs/Web/API/MediaDevices/selectAudioOutput) {{Experimental_Inline}}
  - : Demande à la personne de sélectionner un appareil de sortie audio en particulier.

## Évènements

- [`devicechange`](/fr/docs/Web/API/MediaDevices/devicechange_event)
  - : Déclenché lorsqu'un média d'entrée ou de sortie de l'appareil est connecté ou débranché de l'ordinateur de la personne.

## Exemple

```js
// On place ces variables dans la portée globale afin d'y avoir
// accès dans la console du navigateur.
const video = document.querySelector("video");
const constraints = {
  audio: false,
  video: true,
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    const videoTracks = stream.getVideoTracks();
    console.log("Flux obtenu avec des contraintes :", constraints);
    console.log(`Utilisation de l'appareil vidéo : ${videoTracks[0].label}`);
    stream.onremovetrack = () => {
      console.log("Flux terminé");
    };
    video.srcObject = stream;
  })
  .catch((error) => {
    if (error.name === "ConstraintNotSatisfiedError") {
      console.error(
        `La résolution ${constraints.video.width.exact}x${constraints.video.height.exact} px n'est pas prise en charge par votre appareil.`,
      );
    } else if (error.name === "PermissionDeniedError") {
      console.error(
        "Les permissions nécessaires pour utiliser votre caméra ou votre micro " +
          "n'ont pas été fournies. Vous devez autoriser l'accès à vos appareils " +
          "depuis cette page afin que la démonstration fonctionne.",
      );
    } else {
      console.error(`Erreur getUserMedia : ${error.name}`, error);
    }
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API de capture et des flux multimédia](/fr/docs/Web/API/Media_Capture_and_Streams_API)&nbsp;: l'API à laquelle appartient cette interface.
- [L'API de capture d'écran](/fr/docs/Web/API/Screen_Capture_API)&nbsp;: l'API qui définit la méthode [`getDisplayMedia()`](/fr/docs/Web/API/MediaDevices/getDisplayMedia).
- [L'API WebRTC](/fr/docs/Web/API/WebRTC_API)
- [`Navigator.mediaDevices`](/fr/docs/Web/API/Navigator/mediaDevices) qui fournit une référence à un objet `MediaDevices` permettant d'accéder aux appareils.
