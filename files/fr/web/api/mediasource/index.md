---
title: MediaSource
slug: Web/API/MediaSource
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

L'interface **`MediaSource`** de l'[API Media Source Extensions](/fr/docs/Web/API/Media_Source_Extensions_API) représente une source de données multimédia pour un objet {{domxref("HTMLMediaElement")}}. Un objet `MediaSource` peut être attaché à un {{domxref("HTMLMediaElement")}} pour être lu dans l'agent utilisateur.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : Construit et renvoie un nouvel objet `MediaSource` sans tampon source associé.

## Propriétés

- {{domxref("MediaSource.sourceBuffers")}} {{readonlyInline}}
  - : Renvoie un objet {{domxref("SourceBufferList")}} contenant la liste des objets {{domxref("SourceBuffer")}} associés à ce `MediaSource`.
- {{domxref("MediaSource.activeSourceBuffers")}} {{readonlyInline}}
  - : Renvoie un objet {{domxref("SourceBufferList")}} contenant un sous-ensemble des objets {{domxref("SourceBuffer")}} contenus dans {{domxref("MediaSource.sourceBuffers")}} — la liste des objets fournissant la piste vidéo sélectionnée, pistes audio activées et pistes de texte affichées / masquées.
- {{domxref("MediaSource.readyState")}} {{readonlyInline}}
  - : Renvoie une énumération représentant l'état de la `MediaSource` actuelle, qu'elle ne soit pas actuellement attachée à un élément multimédia (`fermé`), attachée et prête à recevoir des objets {{domxref("SourceBuffer")}} (`ouvert`), ou attachée mais le flux a été terminé via {{domxref("MediaSource.endOfStream()")}} (`terminé`).
- {{domxref("MediaSource.duration")}}
  - : Obtient et définit la durée du média actuel présenté.

### Gestionnaires d'événements

- {{domxref("MediaSource.onsourceclose")}}
  - : Le gestionnaire d'événements pour l'événement `sourceclose`.
- {{domxref("MediaSource.onsourceended")}}
  - : Le gestionnaire d'événements pour l'événement `sourceended`.
- {{domxref("MediaSource.onsourceopen")}}
  - : Le gestionnaire d'événements pour l'événement `sourceopen`.

## Méthodes

_Hérite des méthodes de son interface parente, {{domxref("EventTarget")}}._

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : Crée un nouveau {{domxref ("SourceBuffer")}} du type MIME donné et l'ajoute à la liste {{domxref ("MediaSource.sourceBuffers")}}.
- {{domxref("MediaSource.clearLiveSeekableRange()")}}
  - : Efface un ensemble privé de plage de recherche avec un appel à `setLiveSeekableRange()`.
- {{domxref("MediaSource.endOfStream()")}}
  - : Signale la fin du flux.
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : Supprime le {{domxref ("SourceBuffer")}} donné de la liste {{domxref ("MediaSource.sourceBuffers")}}.
- {{domxref("MediaSource.setLiveSeekableRange()")}}
  - : Définit la plage que l'utilisateur peut rechercher dans l'élément multimédia.

## Méthodes statiques

- {{domxref("MediaSource.isTypeSupported()")}}
  - : Renvoie une valeur {{domxref ("Boolean")}} indiquant si le type MIME donné est pris en charge par l'agent utilisateur actuel - c'est-à-dire s'il parvient à créer des objets {{domxref ("SourceBuffer")}} pour ce type MIME .

## Exemples

L'exemple simple suivant charge une vidéo avec {{domxref ("XMLHttpRequest")}} et la lit dès que possible. Cet exemple a été écrit par Nick Desaulniers et peut être [consulté en direct ici](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (vous pouvez aussi [télécharger la source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) pour une enquête plus approfondie).

```js
var video = document.querySelector("video");

var assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB(url, cb) {
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = function () {
    cb(xhr.response);
  };
  xhr.send();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
