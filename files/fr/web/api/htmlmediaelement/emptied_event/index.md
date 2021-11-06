---
title: 'HTMLMediaElement: emptied'
slug: Web/API/HTMLMediaElement/emptied_event
translation_of: Web/API/HTMLMediaElement/emptied_event
---
L'événement **`emptied`** est déclenché lorsqu'un média est devenu vide. Par exemple, cet événement est envoyé si le média a déjà été chargé (complètement ou partiellement), et que la méthode _load()_ est appelé pour le recharger.

## Informations générales

- Spécification
  - : [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-emptied)
- Interface
  - : {{domxref("Event")}}
- propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : {{domxref("Element")}}
- Action par défaut
  - : Aucune

## Propriétés

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Evénements liés

- {{event("playing")}}
- {{event("waiting")}}
- {{event("seeking")}}
- {{event("seeked")}}
- {{event("ended")}}
- {{event("loadedmetadata")}}
- {{event("loadeddata")}}
- {{event("canplay")}}
- {{event("canplaythrough")}}
- {{event("durationchange")}}
- {{event("timeupdate")}}
- {{event("play")}}
- {{event("pause")}}
- {{event("ratechange")}}
- {{event("volumechange")}}
- {{event("suspend")}}
- {{event("emptied")}}
- {{event("stalled")}}
