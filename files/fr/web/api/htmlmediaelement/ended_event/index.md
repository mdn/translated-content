---
title: "HTMLMediaElement: ended"
slug: Web/API/HTMLMediaElement/ended_event
---

L'événement **ended** est déclenché lorsque la lecture ou le streaming s'est arrêté parce que la fin du média a été atteinte ou qu'aucune donnée n'est disponible.

L'événement se produit dans deux contextes liés mais unique:

- Les éléments basés sur {{domxref("HTMLMediaElement")}} ({{HTMLElement("audio")}} et {{HTMLElement("video")}}) déclenchent **ended** lorsque la lecture du média atteint la fin.
- Les pistes de flux média, qui sont basées sur l'interface {{domxref("MediaStreamTrack")}}, déclenchent **`ended`** lorsque la source de la piste interrompt définitivement l'envoi de données sur le flux. Il y'a différentes manières d'y arriver:

  - il n'y a plus de données à envoyer.
  - L'utilisateur a révoqué les autorisations nécessaires pour que les données soient envoyées.
  - Le matériel générant les données source a été supprimé ou éjecté.
  - Un peer distant a définitivement cessé d'envoyer des données. La mise en pause des médias ne génère pas l'événement **ended**.

## Informations générales

- Spécification
  - : [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-ended) et [Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams/#event-mediastreamtrack-ended)
- Interface
  - : {{domxref("Event")}}
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : {{domxref("Element")}}
- Action par défaut
  - : Aucune

> **Note :** Bien que cet événement soit défini dans deux spécifications, à ce moment-là, les deux spécifient cet événement de manière identique, nous avons donc documenté comme si elles ne faisaient qu'une. Si à un moment donné, cela change, la documentation sera révisée.

## Propriétés

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Evénements liés

- [`playing`](/fr/docs/Web/API/HTMLMediaElement/playing_event)
- [`waiting`](/fr/docs/Web/API/HTMLMediaElement/waiting_event)
- [`seeking`](/fr/docs/Web/API/HTMLMediaElement/seeking_event)
- [`seeked`](/fr/docs/Web/API/HTMLMediaElement/seeked_event)
- [`loadedmetadata`](/fr/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`loadeddata`](/fr/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`canplay`](/fr/docs/Web/API/HTMLMediaElement/canplay_event)
- [`canplaythrough`](/fr/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`durationchange`](/fr/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`timeupdate`](/fr/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`play`](/fr/docs/Web/API/HTMLMediaElement/play_event)
- [`pause`](/fr/docs/Web/API/HTMLMediaElement/pause_event)
- [`ratechange`](/fr/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`volumechange`](/fr/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`suspend`](/fr/docs/Web/API/HTMLMediaElement/suspend_event)
- [`emptied`](/fr/docs/Web/API/HTMLMediaElement/emptied_event)
- [`stalled`](/fr/docs/Web/API/HTMLMediaElement/stalled_event)
