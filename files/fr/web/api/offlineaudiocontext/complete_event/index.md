---
title: complete
slug: Web/API/OfflineAudioContext/complete_event
---

L'événement **complete** est déclenché lorsque le rendu d'un {{domxref("OfflineAudioContext")}} est terminé.

## Informations générales

- Interface
  - : {{domxref("OfflineAudioCompletionEvent")}}
- Propagation
  - : ?
- Annulable
  - : ?
- Cible
  - : {{domxref("OfflineAudioContext")}}
- Action par défaut
  - : Aucune

## Propriétés

| Property                            | Type                       | Description                                                                                  |
| ----------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}         | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                       |
| `type` {{readonlyInline}}           | {{domxref("DOMString")}}   | The type of event.                                                                           |
| `bubbles` {{readonlyInline}}        | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.                                                   |
| `cancelable` {{readonlyInline}}     | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.                                                     |
| `renderedBuffer` {{readonlyInline}} | {{domxref("AudioBuffer")}} | The buffer containing the result of the processing of an {{domxref("OfflineAudioContext")}}. |

## Evénements liés

_Aucun_

## Spécifications

{{Specifications}}

## Voir aussi

- [Web Audio API](/fr/docs/Web_Audio_API)
