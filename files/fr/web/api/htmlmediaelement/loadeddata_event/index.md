---
title: "HTMLMediaElement : évènement loadeddata"
short-title: loadeddata
slug: Web/API/HTMLMediaElement/loadeddata_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

L'évènement **`loadeddata`** est déclenché lorsque l'image à la position de lecture actuelle du média a fini de se charger&nbsp;; souvent la première image.

> [!NOTE]
> Cet évènement ne sera pas déclenché sur les appareils mobiles/tablettes si l'option d'économie de données est activée dans les paramètres du navigateur.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("loadeddata", (event) => { })

onloadeddata = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Ces exemples ajoutent un écouteur d'évènement pour l'évènement `loadeddata` de `HTMLMediaElement`, puis affichent un message lorsque ce gestionnaire d'évènement a réagi au déclenchement de l'évènement.

Utiliser `addEventListener()`&nbsp;:

```js
const video = document.querySelector("video");

video.addEventListener("loadeddata", (event) => {
  console.log(
    "Youpi ! L'état de préparation vient de passer à " +
      "HAVE_CURRENT_DATA ou plus pour la première fois.",
  );
});
```

Utiliser la propriété de gestionnaire d'évènement `onloadeddata`&nbsp;:

```js
const video = document.querySelector("video");

video.onloadeddata = (event) => {
  console.log(
    "Youpi ! L'état de préparation vient de passer à " +
      "HAVE_CURRENT_DATA ou plus pour la première fois.",
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
- L'évènement {{DOMxRef("HTMLMediaElement.canplay_event", "canplay")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.canplaythrough_event", "canplaythrough")}} de HTMLMediaElement
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
