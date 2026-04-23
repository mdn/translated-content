---
title: "HTMLCanvasElement : méthode captureStream()"
short-title: captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Capture and Streams")}}

La méthode **`captureStream()`** de l'interface {{DOMxRef("HTMLCanvasElement")}} retourne un objet {{DOMxRef("MediaStream")}} contenant une {{DOMxRef("CanvasCaptureMediaStreamTrack")}} qui réalise une capture vidéo en temps réel du contenu du canevas.

## Syntaxe

```js-nolint
captureStream()
captureStream(frameRate)
```

### Paramètres

- `frameRate` {{Optional_Inline}}
  - : Une valeur à virgule flottante en double précision qui indique la fréquence de capture de chaque image. Si elle n'est pas définie, une nouvelle image est capturée à chaque modification du canevas&nbsp;; si elle est définie à `0`, les images ne sont pas capturées automatiquement&nbsp;; elles ne le sont que lorsque la méthode
    {{DOMxRef("CanvasCaptureMediaStreamTrack.requestFrame", "requestFrame()")}} de la piste renvoyée est appelée.

### Valeur de retour

Une référence à un objet {{DOMxRef("MediaStream")}} contenant une seule
{{DOMxRef("CanvasCaptureMediaStreamTrack")}}.

### Exceptions

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur de `frameRate` est négative.

- `SecurityError` {{DOMxRef("DOMException")}}
  - : Levée si le bitmap du canevas n'est pas d'origine sûre&nbsp;; au moins une partie de son contenu a été, ou pourrait avoir été, chargée depuis un site différent de celui d'où provient le document.

## Exemple

```js
// Rechercher l'élément canevas à capturer
const canvasElt = document.querySelector("canvas");

// Obtient le flux
const stream = canvasElt.captureStream(25); // 25 FPS

// Traite le flux
// Par exemple : l'envoyer vers un autre ordinateur via une
// RTCPeerConnection pc est une RTCPeerConnection créée ailleurs
stream.getTracks().forEach((track) => pc.addTrack(track, stream));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLMediaElement.captureStream()")}}, qui permet de capturer un flux depuis un élément multimédia.
- L'interface {{DOMxRef("MediaStream")}}
- [L'API Media Capture et Streams](/fr/docs/Web/API/Media_Capture_and_Streams_API)
