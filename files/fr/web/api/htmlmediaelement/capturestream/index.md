---
title: "HTMLMediaElement : méthode captureStream()"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
l10n:
  sourceCommit: eccbe7d0f6b2f5ddd9b40f91324f4da394d1f1a0
---

{{APIRef("Media Capture and Streams")}}

La méthode **`captureStream()`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un objet {{DOMxRef("MediaStream")}} qui diffuse en temps réel l'enregistrement d'un contenu obtenu dans un élément média.

Cela peut être utilisé, par exemple, comme source pour une {{DOMxRef("RTCPeerConnection")}} dans {{Glossary("WebRTC")}}.

## Syntaxe

```js-nolint
captureStream()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef('MediaStream')}} pouvant être utilisé en tant que source pour des données audio et/ou vidéo par d'autres média traitant du code, ou comme source pour {{Glossary("WebRTC")}}.

## Exemples

### Utilisation simple

Dans cet exemple, un gestionnaire d'évènements est établi de sorte qu'un clic sur un bouton commence à capturer le contenu d'un élément média avec l'ID `"playback"` dans un {{DOMxRef("MediaStream")}}.
Le flux peut ensuite être utilisé à d'autres fins, comme un flux WebRTC pour partager des vidéos pré-enregistrées avec une autre personne lors d'un appel vidéo.

```js
document.querySelector(".playAndRecord").addEventListener("click", () => {
  const playbackElement = document.getElementById("playback");
  const captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

Voir [Enregistrer un élément média](/fr/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) pour un exemple plus long et plus complexe ainsi qu'une explication détaillée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Enregistrer un élément média](/fr/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [L'API MediaStream Recording](/fr/docs/Web/API/MediaStream_Recording_API)
- La méthode {{DOMxRef("HTMLCanvasElement.captureStream()")}}
- L'interface {{DOMxRef("MediaStream")}}
- [L'API WebRTC](/fr/docs/Web/API/WebRTC_API)
