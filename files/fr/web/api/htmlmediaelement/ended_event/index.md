---
title: "HTMLMediaElement : évènement ended"
short-title: ended
slug: Web/API/HTMLMediaElement/ended_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTMLMediaElement")}}

L'évènement **`ended`** est déclenché lorsque la lecture ou le flux en direct s'est arrêté parce que la fin du média a été atteinte ou qu'aucune donnée n'est disponible.

Cet évènement se produit lorsque les éléments HTML basés sur {{DOMxRef("HTMLMediaElement")}} ({{HTMLElement("audio")}} et {{HTMLElement("video")}}) déclenchent `ended` lorsque la lecture atteint la fin du média.

Cet évènement n'est pas annulable et ne se propage pas.

> [!NOTE]
> L'évènement `ended` ne se déclenche pas si la propriété [`loop`](/fr/docs/Web/API/HTMLMediaElement/loop) vaut `true` et [`playbackRate`](/fr/docs/Web/API/HTMLMediaElement/playbackRate) n'est pas négatif.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Ces exemples ajoutent un écouteur d'évènement pour l'évènement `ended` de `HTMLMediaElement`, puis affichent un message lorsque ce gestionnaire d'évènement a réagi au déclenchement de l'évènement.

Utiliser `addEventListener()`&nbsp;:

```js
const video = document.querySelector("video");

video.addEventListener("ended", (event) => {
  console.log(
    "La vidéo s'est arrêtée soit parce qu'elle a terminé sa lecture, soit parce qu'aucune donnée supplémentaire n'est disponible.",
  );
});
```

Utiliser la propriété de gestionnaire d'évènements `onended`&nbsp;:

```js
const video = document.querySelector("video");

video.onended = (event) => {
  console.log(
    "La vidéo s'est arrêtée soit parce qu'elle a terminé sa lecture, soit parce qu'aucune donnée supplémentaire n'est disponible.",
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
- L'évènement {{DOMxRef("HTMLMediaElement.loadedmetadata_event", "loadedmetadata")}} de HTMLMediaElement
- L'évènement {{DOMxRef("HTMLMediaElement.loadeddata_event", "loadeddata")}} de HTMLMediaElement
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
- [Média de capture et flux](/fr/docs/Web/API/Media_Capture_and_Streams_API)
  - [`MediaStreamTrack`&nbsp;: évènement `ended`](/fr/docs/Web/API/MediaStreamTrack/ended_event)
- [L'API Web Audio](/fr/docs/Web/API/Web_Audio_API)
  - [L'API Web Audio&nbsp;: évènement `ended`](/fr/docs/Web/API/AudioScheduledSourceNode/ended_event)
