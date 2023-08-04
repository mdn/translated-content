---
title: MediaSource.MediaSource()
slug: Web/API/MediaSource/MediaSource
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

Le constructeur **`MediaSource()`** de l'interface {{domxref("MediaSource")}} construit et retourne un nouvel object `MediaSource` sans buffer associé

## Syntaxe

```js
var mediaSource = new MediaSource();
```

### Paramèteres

Aucun.

## Example

Le fragement de code suivant est tiré d'un exemple simple écrit par par Nick Desaulniers ([voir la démonstration complète](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html), ou [télécharger les sources](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) pour une meilleure compréhention.)

```js
var video = document.querySelector('video');

var assetURL = 'frag_bunny.mp4';
// A besoin d'être spécifique, Blink (moteur de rendu Chrome) demande le codec
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource;
  //console.log(mediaSource.readyState); // "closed"
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

...
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
