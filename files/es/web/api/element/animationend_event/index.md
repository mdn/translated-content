---
title: animationend
slug: Web/API/Element/animationend_event
---

{{ APIRef }}

El evento `animationend` es lanzado cuando una animación CSS se ha completado.

## Información General

- Especificación
  - : [CSS Animations](https://www.w3.org/TR/css3-animations/#animation-events)
- Interface
  - : AnimationEvent
- Bubbles
  - : Si
- Cancelable
  - : No
- Target
  - : Document, Element
- Acción por defecto
  - : None

## Propiedades

| Propiedad                          | Tipo                       | Descripción                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{ReadOnlyInline}}        | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                         |
| `type` {{ReadOnlyInline}}          | {{domxref("DOMString")}}   | The type of event.                                                                                                                                                                                                                                                                                                             |
| `bubbles` {{ReadOnlyInline}}       | `boolean`                  | Does the event normally bubble?                                                                                                                                                                                                                                                                                                |
| `cancelable` {{ReadOnlyInline}}    | `boolean`                  | Is it possible to cancel the event?                                                                                                                                                                                                                                                                                            |
| `animationName` {{ReadOnlyInline}} | {{domxref("DOMString")}}   | The name of the CSS property associated with the transition.                                                                                                                                                                                                                                                                   |
| `elapsedTime` {{ReadOnlyInline}}   | Float                      | The amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an "animationstart" event, the elapsedTime is zero unless there was a negative value for `animation-delay`, in which case the event will be fired with an elapsedTime of (-1 \* delay). |

## Eventos relacionados

- [`animationstart`](/es/docs/Web/Reference/Events/animationstart)
- [`animationend`](/es/docs/Web/Reference/Events/animationend)
- [`animationiteration`](/es/docs/Web/Reference/Events/animationiteration)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Using CSS Animations](/es/docs/CSS/Using_CSS_animations)
