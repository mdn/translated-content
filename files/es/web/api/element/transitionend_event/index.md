---
title: transitionend
slug: Web/API/Element/transitionend_event
---

{{ APIRef }}

El evento `transitionend` es lanzado cuando una [transición CSS](/es/docs/CSS/Using_CSS_transitions) se ha completado. Si la transición es eliminada antes de haberse completado, como cuando {{cssxref("transition-property")}} es eliminado o {{cssxref("display")}} se establece a `"none"`, entonces el evento no será generado.

## Información general

- Especificación
  - : [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- Interfaz
  - : {{domxref("TransitionEvent")}}
- Burbuja
  - : Sí
- Cancelable
  - : Sí
- Objetivo
  - : {{domxref("Element")}}, {{domxref("Document")}}, {{domxref("Window")}}
- Acción
  - : undefined

## Propiedades

| Property                           | Type                       | Description                                                                                                                                                                                                                                                                                                |
| ---------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                     |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}   | The type of event.                                                                                                                                                                                                                                                                                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                 |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                   |
| `propertyName` {{readonlyInline}}  | {{domxref("DOMString")}}   | The name of the CSS property associated with the transition.                                                                                                                                                                                                                                               |
| `elapsedTime` {{readonlyInline}}   | Float                      | The amount of time the transition has been running, in seconds, as of the time the event was generated. This value is not affected by the value of `transition-delay`.                                                                                                                                     |
| `pseudoElement` {{readonlyInline}} | {{domxref("DOMString")}}   | The name (beginning with two colons) of the CSS pseudo-element on which the transition occured (in which case the target of the event is that pseudo-element's corresponding element), or the empty string if the transition occurred on an element (which means the target of the event is that element). |

## Ejemplo

Este ejemplo establece un manejador de evento para detectar el evento `transitionend`, y así cambiar el texto que se muestra dentro del elemento cuando la transición se completa.

```js
let element = document.getElementById("slidingMenu");
element.addEventListener(
  "transitionend",
  function (event) {
    element.innerHTML = "Done!";
  },
  false,
);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

La interfaz {{domxref("TransitionEvent")}}

- [`transitionstart`](/es/docs/Web/Reference/Events/transitionstart), [`transitioncancel`](/es/docs/Web/Reference/Events/transitioncancel)
- Propiedades CSS: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}.
