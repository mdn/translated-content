---
title: touchend
slug: Web/API/Document/touchend_event
tags:
  - Tactile
  - TouchEvent
  - events
translation_of: Web/API/Document/touchend_event
---
{{APIRef}}

L'événement `touchend` est déclenché quand un point de contact est retiré de la surface.

## Informations générales

- Spécification
  - : [Touch Events](http://w3c.github.io/touch-events/#event-touchend)
- Interface
  - : {{domxref("TouchEvent")}}
- Bubbles
  - : Oui
- Cancelable
  - : Oui
- Target
  - : Document, Element
- Default Action
  - : indéfinie

## Propriétés

| Property                                  | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}         | EventTarget  | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                                                                                                                                                       |
| `type` {{readonlyInline}}           | DOMString    | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `bubbles` {{readonlyInline}}        | Boolean      | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `cancelable` {{readonlyInline}}     | Boolean      | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `view` {{readonlyInline}}           | WindowProxy  | [`document.defaultView`](/en-US/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                                                                |
| `detail` {{readonlyInline}}         | long (float) | 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `touches` {{readonlyInline}}        | TouchList    | A list of [`Touch`](/en/DOM/Touch)es for every point of contact currently touching the surface.                                                                                                                                                                                                                                                                                                                                                              |
| `targetTouches` {{readonlyInline}}  | TouchList    | A list of [`Touch`](/en/DOM/Touch)es for every point of contact that is touching the surface and started on the element that is the target of the current event.                                                                                                                                                                                                                                                                                             |
| `changedTouches` {{readonlyInline}} | TouchList    | A list of [`Touch`](/en-US/docs/DOM/Touch)es for every point of contact which contributed to the event. For the touchstart event this must be a list of the touch points that just became active with the current event. For the touchmove event this must be a list of the touch points that have moved since the last event. For the touchend and touchcancel events this must be a list of the touch points that have just been removed from the surface. |
| `ctrlKey` {{readonlyInline}}        | boolean      | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                              |
| `shiftKey` {{readonlyInline}}       | boolean      | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                |
| `altKey` {{readonlyInline}}         | boolean      | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                  |
| `metaKey` {{readonlyInline}}        | boolean      | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                 |

## Exemples

Des exemples d'implémentation de cet événement sont disponibles : [Touch events](/en-US/docs/DOM/Touch_events).

## Compatibilité des navigateurs

{{Compat("api.Document.touchend_event")}}

## Voir aussi

- {{ domxref("GlobalEventHandlers.ontouchleave","ontouchleave")}}
- {{ domxref("GlobalEventHandlers.ontouchstart","ontouchstart")}}
- {{ domxref("GlobalEventHandlers.ontouchmove","ontouchmove")}}
