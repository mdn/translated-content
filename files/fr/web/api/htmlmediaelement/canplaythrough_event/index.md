---
title: "HTMLMediaElement: canplaythrough"
slug: Web/API/HTMLMediaElement/canplaythrough_event
---

{{APIRef("HTMLMediaElement")}}

L'événement **`canplaythrough`** est déclenché lorsque le user agent peut jouer le média et estime que suffisament de données ont été chargées pour le lire jusqu'au bout. (Sans s'arrêter afin de charger plus contenu en mémoire)

## Informations générales

- Spécification
  - : [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-canplaythrough)
- Interface
  - : Event
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : Element
- Action par défaut
  - : Aucune

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
- [`ended`](/fr/docs/Web/API/HTMLMediaElement/ended_event)
- [`loadedmetadata`](/fr/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`loadeddata`](/fr/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`canplay`](/fr/docs/Web/API/HTMLMediaElement/canplay_event)
- [`durationchange`](/fr/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`timeupdate`](/fr/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`play`](/fr/docs/Web/API/HTMLMediaElement/play_event)
- [`pause`](/fr/docs/Web/API/HTMLMediaElement/pause_event)
- [`ratechange`](/fr/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`volumechange`](/fr/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`suspend`](/fr/docs/Web/API/HTMLMediaElement/suspend_event)
- [`emptied`](/fr/docs/Web/API/HTMLMediaElement/emptied_event)
- [`stalled`](/fr/docs/Web/API/HTMLMediaElement/stalled_event)
