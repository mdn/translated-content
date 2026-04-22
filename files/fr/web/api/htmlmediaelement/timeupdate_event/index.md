---
title: "HTMLMediaElement : évènement timeupdate"
short-title: timeupdate
slug: Web/API/HTMLMediaElement/timeupdate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

L'évènement `timeupdate` est déclenché lorsque le temps indiqué par l'attribut `currentTime` a été mis à jour.

La fréquence de l'évènement dépend de la charge du système, mais il sera déclenché entre environ 4Hz et 66Hz (en supposant que les gestionnaires d'évènements ne prennent pas plus de 250ms pour s'exécuter). Les agents utilisateurs sont encouragés à varier la fréquence de l'évènement en fonction de la charge du système et du coût moyen de traitement de l'évènement à chaque fois, afin que les mises à jour de l'interface utilisateur ne soient pas plus fréquentes que ce que l'agent utilisateur peut gérer confortablement tout en décodant la vidéo.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("timeupdate", (event) => { })

ontimeupdate = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Ces exemples ajoutent un écouteur d'évènement pour l'évènement `timeupdate` de `HTMLMediaElement`, puis affichent un message lorsque ce gestionnaire d'évènement a réagi au déclenchement de l'évènement. N'oubliez pas que la fréquence de l'évènement dépend de la charge du système.

Utiliser `addEventListener()`&nbsp;:

```js
const video = document.querySelector("video");

video.addEventListener("timeupdate", (event) => {
  console.log("L'attribut currentTime a été mis à jour. Encore.");
});
```

Utiliser la propriété de gestionnaire d'évènement `ontimeupdate`&nbsp;:

```js
const video = document.querySelector("video");

video.ontimeupdate = (event) => {
  console.log("L'attribut currentTime a été mis à jour. Encore.");
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
