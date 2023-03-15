---
title: touchcancel
slug: Web/API/Element/touchcancel_event
---

`touchcancel` 이벤트는 터치포인트가 현재 구현된 방식안에서 방해 받을때 ( 예를들어 너무 많은 터치 포인트) 발생한다.

## General info

- Specification
  - : [Touch Events](http://www.w3.org/TR/touch-events/#the-touchcancel-event)
- Interface
  - : TouchEvent
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : Document, Element
- Default Action
  - : None

## Properties

| Property                                  | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}         | EventTarget  | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                                                                                                                                                    |
| `type` {{readonlyInline}}           | DOMString    | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `bubbles` {{readonlyInline}}        | Boolean      | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                                                                                                                                                                |
| `cancelable` {{readonlyInline}}     | Boolean      | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `view` {{readonlyInline}}           | WindowProxy  | [`document.defaultView`](/ko/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                        |
| `detail` {{readonlyInline}}         | long (float) | 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `touches` {{readonlyInline}}        | TouchList    | A list of [`Touch`](/en/DOM/Touch)es for every point of contact currently touching the surface.                                                                                                                                                                                                                                                                                                                                                           |
| `targetTouches` {{readonlyInline}}  | TouchList    | A list of [`Touch`](/en/DOM/Touch)es for every point of contact that is touching the surface and started on the element that is the target of the current event.                                                                                                                                                                                                                                                                                          |
| `changedTouches` {{readonlyInline}} | TouchList    | A list of [`Touch`](/ko/docs/DOM/Touch)es for every point of contact which contributed to the event. For the touchstart event this must be a list of the touch points that just became active with the current event. For the touchmove event this must be a list of the touch points that have moved since the last event. For the touchend and touchcancel events this must be a list of the touch points that have just been removed from the surface. |
| `ctrlKey` {{readonlyInline}}        | boolean      | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                           |
| `shiftKey` {{readonlyInline}}       | boolean      | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                             |
| `altKey` {{readonlyInline}}         | boolean      | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                               |
| `metaKey` {{readonlyInline}}        | boolean      | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                              |

## Examples

해당 이벤트의 샘플코드는 [Touch events](/ko/docs/DOM/Touch_events) 에서 확인할 수 있다.

## Related Events

- {{event("touchstart")}}
- {{event("touchend")}}
- {{event("touchmove")}}
- {{event("touchcancel")}}
