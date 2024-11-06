---
title: transitioncancel
slug: Web/API/Element/transitioncancel_event
---

{{ APIRef }}{{SeeCompatTable}}

El evento `transitioncancel` es lanzado cuando una [transición CSS](/es/docs/CSS/Using_CSS_transitions) es cancelada.

Véase {{domxref("GlobalEventHandlers.ontransitioncancel")}} para mas información y ejemplos.

## Información general

- Interfaz
  - : {{domxref("TransitionEvent")}}
- Burbuja
  - : Sí
- Cancelable
  - : No
- Objetivo
  - : {{domxref("document")}}, {{domxref("element")}}
- Acción por defecto
  - : Ninguna

## Propiedades

| Propiedad                         | Tipo                       | Descripción                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyinline}}       | {{domxref("EventTarget")}} | El objetivo del evento (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                             |
| `type` {{readonlyinline}}         | {{domxref("DOMString")}}   | El tipo de evento.                                                                                                                                                                                                                                                                                                                       |
| `bubbles` {{readonlyinline}}      | {{domxref("Boolean")}}     | Si el evento normalmente se propaga o no                                                                                                                                                                                                                                                                                                 |
| `cancelable` {{readonlyinline}}   | {{domxref("Boolean")}}     | Si el evento es cancelable o no                                                                                                                                                                                                                                                                                                          |
| `propertyName`{{readonlyinline}}  | {{domxref("DOMString")}}   | El nombre de la propiedad CSS asociada con la transición.                                                                                                                                                                                                                                                                                |
| `elapsedTime`{{readonlyinline}}   | {{domxref("Float")}}       | La cantidad de tiempo que ha durado la transición, en segundos, desde el momento en que el evento fué generado. Este valor no se ve afectado por el valor de `transition-delay`.                                                                                                                                                         |
| `pseudoElement`{{readonlyinline}} | {{domxref("DOMString")}}   | El nombre (empezando con dos "dos puntos") del pseudo-elemento CSS en el que ha ocurrido la transición (en caso de que el objetivo del evento sea dicho pseudo-elemento correspondiente al elemento), o una cadena vacía si la transición ha ocurrido en un elemento (lo que quiere decir que el objetivo del evento es dicho elemento). |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- El manejador {{domxref("GlobalEventHandlers.ontransitioncancel")}}
- La interfaz {{domxref("TransitionEvent")}}
- [`transitionstart`](/es/docs/Web/Reference/Events/transitionstart), [`transitionend`](/es/docs/Web/Reference/Events/transitionend)
- Propiedades CSS: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}.
