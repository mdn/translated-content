---
title: HTMLMediaElement.captureStream()
slug: Web/API/HTMLMediaElement/captureStream
tags:
  - API
  - Audio
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Media Capture DOM Elements
  - Method
  - Reference
  - Video
  - captureStream
translation_of: Web/API/HTMLMediaElement/captureStream
---
{{APIRef("HTML Media Capture")}}

**`captureStream()`** est une méthode de l'interface {{domxref("HTMLMediaElement")}} retournant un objet {{domxref('MediaStream')}} qui diffuse en temps réel l'enregistrement d'un contenu obtenu dans un élément média.

## Syntax

    var mediaStream = mediaElement.captureStream()

### Paramètres

Aucun.

### Retours

Un objet {{domxref('MediaStream')}} pouvant être utilisé en tant que source pour des données audio et/ou vidéo par d'autres média traitant du code, ou comme source pour [WebRTC](/en-US/docs/Glossary/WebRTC).

## Exemple

Dans cet exemple, un écouteur d'événement est mise en place, permettant la capture du contenu d'un élément média avec l'ID `"playback"` dans un {{domxref("MediaStream")}} lors d'un clic sur un bouton de lancement. La flux peut être utilisée dans d'autres buts—comme une source de diffusion via WebRTC, vous permettant de partager des vidéos pré-enregistrées avec une autre personne lors d'un appel video.

```js
document.querySelector('.playAndRecord').addEventListener('click', function() {
  var playbackElement = document.getElementById("playback");
  var captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

Voir [Recording a media element](/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) pour des exemples et explications plus détaillées et complexes.

## Spécifications

| Spécification                                                                                                                                        | Status                                               | Commentaire           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------- |
| {{SpecName('Media Capture DOM Elements','#widl-HTMLMediaElement-captureStream-MediaStream','captureStream()')}} | {{Spec2('Media Capture DOM Elements')}} | Déclaration initiale. |

## Compatibilités

{{Compat("api.HTMLMediaElement.captureStream")}}

### Firefox-notes spécifiques

Avant Firefox 51, vous ne pouviez pas utiliser `captureStream()` sur un élément média dont la source était, lui-même, un objet {{domxref("MediaStream")}} (comme un élément {{HTMLElement("video")}} présentant un flux reçu à travers un {{domxref("RTCPeerConnection")}}). Au commencement de 51, ça fonctionne. ce qui veut dire que vous pouvez capturer le flux d'un élément video et utiliser {{domxref("MediaRecorder")}} pour l'enregistrer. Voir {{bug(1259788)}} pour plus de détails.

Cependant, `captureStream()` reste préfixé `mozCaptureStream()` sur Firefox pour une bonne raison: il y a quelques etrangetés dans l'implémentation actuelle qui mérite d'être soulignées :

- Actuellement, l'implémentation de Firefox fonctionne uniquement (comme décrit dans les spécifications) quand la source de l'élément média est elle-même, donc une instance {{domxref("MediaStream")}}.
- Si la source de l'élément média n'est pas un `MediaStream`, la sortie de cette méthode n'est pas compatible avec les spécifications, et si vous changez la source après avoir commencé la capture, la sortie de la capture du flux ne peut accepter les nouvelles données source suite à une incompatibilité, donc aucun  {{domxref("MediaStreamTrack")}}s sera ajouté de la nouvelle source `MediaStream` au flux capturé, résultant d'une sortie n'ayant pas capturé la source mise à jour.
- Repasser la source en `MediaStream` ajoute des pistes au flux et fonctionne de nouveau comme prévu.
- L'appel à `mozCaptureMediaStream()` sur un élément avec une source `MediaStream` retourne un flux qui contient uniquement les pistes jouées par un `MediaStream`.
- Si vous appellez `mozCaptureMediaStream()` sur un élément média sans source, son mode de compatibilité va se baser sur la première source ayant été ajoutée; Par exemple, Si c'est un `MediaStream`, alors la capture du flux va seulement fonctionner avec une source MediaStream à partir de ce moment.
- Ce comportement particulier va être supprimer un fois que le support des sources non-`MediaStream` aura atteint la spécification et que la méthode ne sera plus préfixée. Voir {{bug(1259788, "bug", 160)}} pour plus de détails.

## Voir aussi

- [Recording a media element](/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- {{domxref("HTMLCanvasElement.captureStream()")}}
- {{domxref("MediaStream")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
