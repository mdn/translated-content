---
title: "HTMLMediaElement : évènement canplaythrough"
short-title: canplaythrough
slug: Web/API/HTMLMediaElement/canplaythrough_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

L'évènement **`canplaythrough`** est déclenché lorsque l'agent utilisateur peut jouer le média et estime que suffisamment de données ont été chargées pour le lire jusqu'à la fin sans avoir à s'arrêter pour charger davantage de contenu dans la mémoire tampon (<i lang="en">buffer</i> en anglais).

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("canplaythrough", (event) => { })

oncanplaythrough = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Ces exemples ajoutent un écouteur d'évènement pour l'évènement `canplaythrough` de HTMLMediaElement, puis affichent un message lorsque ce gestionnaire d'évènement a réagi au déclenchement de l'évènement.

Utiliser `addEventListener()`&nbsp;:

```js
const video = document.querySelector("video");

video.addEventListener("canplaythrough", (event) => {
  console.log(
    "Je pense pouvoir lire la vidéo entière sans avoir à m'arrêter pour mettre en mémoire tampon.",
  );
});
```

Utiliser la propriété de gestionnaire d'évènement `oncanplaythrough`&nbsp;:

```js
const video = document.querySelector("video");

video.oncanplaythrough = (event) => {
  console.log(
    "Je pense pouvoir lire la vidéo entière sans avoir à m'arrêter pour mettre en mémoire tampon.",
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
- L'évènement {{DOMxRef("HTMLMediaElement.durationchange_event", "durationchange")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.timeupdate_event", "timeupdate")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.play_event", "play")}} de HTMLMediaElement
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
