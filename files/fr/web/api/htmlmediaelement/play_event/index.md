---
title: "HTMLMediaElement : évènement play"
short-title: play
slug: Web/API/HTMLMediaElement/play_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

L'évènement `play` est déclenché lorsque la propriété `paused` passe de `true` à `false`, à la suite de l'appel de la méthode `play` ou de l'attribut `autoplay`.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("play", (event) => { })

onplay = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Ces exemples ajoutent un écouteur d'évènement pour l'évènement `play` de `HTMLMediaElement`, puis affichent un message lorsque ce gestionnaire d'évènement a réagi au déclenchement de l'évènement.

Utiliser `addEventListener()`&nbsp;:

```js
const video = document.querySelector("video");

video.addEventListener("play", (event) => {
  console.log(
    "La propriété booléenne paused est maintenant 'false'. Soit la méthode play() a été appelée, soit l'attribut autoplay a été activé.",
  );
});
```

Utiliser la propriété de gestionnaire d'évènement `onplay`&nbsp;:

```js
const video = document.querySelector("video");

video.onplay = (event) => {
  console.log(
    "La propriété booléenne paused est maintenant 'false'. Soit la méthode play() a été appelée, soit l'attribut autoplay a été activé.",
  );
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Évènements associés

- L'évènement {{DOMxRef("HTMLMediaElement.playing_event", "playing")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.waiting_event", "waiting")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.seeking_event", "seeking")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.seeked_event", "seeked")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.ended_event", "ended")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.loadedmetadata_event", "loadedmetadata")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.loadeddata_event", "loadeddata")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.canplay_event", "canplay")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.canplaythrough_event", "canplaythrough")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.durationchange_event", "durationchange")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.timeupdate_event", "timeupdate")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.pause_event", "pause")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.ratechange_event", "ratechange")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.volumechange_event", "volumechange")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.suspend_event", "suspend")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.emptied_event", "emptied")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.stalled_event", "stalled")}} de HTMLMediaElement

## Voir aussi

- L'interface {{DOMxRef("HTMLAudioElement")}}
- L'interface {{DOMxRef("HTMLVideoElement")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
