---
title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
---

{{APIRef}}

L'évènement **`fullscreenerror`** est déclenché lorsque le navigateur ne peut pas entrer en mode plein écran.

## Informations générales

- Spécification
  - : [Fullscreen](https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api)
- Interface
  - : {{domxref("Event")}}
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : {{domxref("Document")}}
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

- [`fullscreenchange`](/fr/docs/Web/API/Document/fullscreenchange_event)

## Voir aussi

- [Utilisation du mode plein écran](/fr/docs/Web/API/Fullscreen_API)
