---
title: HTMLMediaElement.captureStream()
slug: Web/API/HTMLMediaElement/captureStream
---

{{APIRef("HTML Media Capture")}}

**`captureStream()`** est une méthode de l'interface {{domxref("HTMLMediaElement")}} retournant un objet {{domxref('MediaStream')}} qui diffuse en temps réel l'enregistrement d'un contenu obtenu dans un élément média.

## Syntaxe

```js
var mediaStream = mediaElement.captureStream();
```

### Paramètres

Aucun.

### Retours

Un objet {{domxref('MediaStream')}} pouvant être utilisé en tant que source pour des données audio et/ou vidéo par d'autres média traitant du code, ou comme source pour [WebRTC](/fr/docs/Glossary/WebRTC).

## Exemple

Dans cet exemple, un écouteur d'événement est mise en place, permettant la capture du contenu d'un élément média avec l'ID `"playback"` dans un {{domxref("MediaStream")}} lors d'un clic sur un bouton de lancement. La flux peut être utilisée dans d'autres buts—comme une source de diffusion via WebRTC, vous permettant de partager des vidéos pré-enregistrées avec une autre personne lors d'un appel video.

```js
document.querySelector(".playAndRecord").addEventListener("click", function () {
  var playbackElement = document.getElementById("playback");
  var captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

Voir [Recording a media element](/fr/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) pour des exemples et explications plus détaillées et complexes.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Recording a media element](/fr/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/fr/docs/Web/API/MediaStream_Recording_API)
- {{domxref("HTMLCanvasElement.captureStream()")}}
- {{domxref("MediaStream")}}
- [WebRTC API](/fr/docs/Web/API/WebRTC_API)
