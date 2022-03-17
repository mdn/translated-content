---
title: 'HTMLMediaElement: canplay'
slug: Web/API/HTMLMediaElement/canplay_event
translation_of: Web/API/HTMLMediaElement/canplay_event
---
L'événement `canplay` est déclenché lorsque l'[agent utilisateur](/fr/docs/Glossaire/User_agent) peut jouer le média, mais estime que trop peu de données ont été chargées pour le jouer jusqu'à la fin sans avoir à l'arrêter pour charger d'avantage de contenu dans la mémoire tampon (buffer).

## Informations Générales

- Spécification
  - : [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-canplay)
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
