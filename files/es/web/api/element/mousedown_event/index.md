---
title: mousedown
slug: Web/API/Element/mousedown_event
---

{{ APIRef }}

El evento `mousedown` se activa cuando el botón de un dispositivo apuntador (usualmente el botón de un ratón) es presionado en un elemento.

## General info

- Especificación
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-mousedown)
- Interface
  - : {{domxref("MouseEvent")}}
- Bubbles
  - : Sí
- Cancelable
  - : Sí
- Target
  - : Elemento
- Default Action
  - : Varios: Comenzar una acción de arrastrar y soltar; comenzar la selección de un texto; comenzar una interacción de desplazamiento (en combinación con el botón medio del mouse, si es soportado)

## Properties

| Property                           | Type                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/es/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                                                                                                               |
| `type` {{readonlyInline}}          | [`DOMString`](/es/docs/Web/API/DOMString)     | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/es/docs/Web/API/Boolean)         | Whether the event normally bubbles or not                                                                                                                                                                                                                                                                                                                                                                            |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/es/docs/Web/API/Boolean)         | Whether the event is cancellable or not?                                                                                                                                                                                                                                                                                                                                                                             |
| `view` {{readonlyInline}}          | [`WindowProxy`](/es/docs/Web/API/WindowProxy) | [`document.defaultView`](/es/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detail` {{readonlyInline}}        | `long` (`float`)                              | A count of consecutive clicks that happened in a short amount of time, incremented by one.                                                                                                                                                                                                                                                                                                                           |
| `currentTarget` {{readonlyInline}} | EventTarget                                   | The node that had the event listener attached.                                                                                                                                                                                                                                                                                                                                                                       |
| `relatedTarget` {{readonlyInline}} | EventTarget                                   | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                            |
| `screenX` {{readonlyInline}}       | long                                          | The X coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                |
| `screenY` {{readonlyInline}}       | long                                          | The Y coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                |
| `clientX` {{readonlyInline}}       | long                                          | The X coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                            |
| `clientY` {{readonlyInline}}       | long                                          | The Y coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                            |
| `button` {{readonlyInline}}        | unsigned short                                | The button number that was pressed when the mouse event was fired: Left button=0, middle button=1 (if present), right button=2. For mice configured for left handed use in which the button actions are reversed the values are instead read from right to left.                                                                                                                                                     |
| `buttons` {{readonlyInline}}       | unsigned short                                | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/es/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                         | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                       |
| `ctrlKey` {{readonlyInline}}       | boolean                                       | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                      |
| `shiftKey` {{readonlyInline}}      | boolean                                       | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                        |
| `altKey` {{readonlyInline}}        | boolean                                       | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                          |
| `metaKey` {{readonlyInline}}       | boolean                                       | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`mousedown`](/es/docs/Web/Reference/Events/mousedown)
- [`mouseup`](/es/docs/Web/Reference/Events/mouseup)
- [`mousemove`](/es/docs/Web/Reference/Events/mousemove)
- [`click`](/es/docs/Web/Reference/Events/click)
- [`dblclick`](/es/docs/Web/Reference/Events/dblclick)
- [`mouseover`](/es/docs/Web/Reference/Events/mouseover)
- [`mouseout`](/es/docs/Web/Reference/Events/mouseout)
- [`mouseenter`](/es/docs/Web/Reference/Events/mouseenter)
- [`mouseleave`](/es/docs/Web/Reference/Events/mouseleave)
- [`contextmenu`](/es/docs/Web/Reference/Events/contextmenu)
