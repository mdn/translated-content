---
title: click
slug: Web/API/Element/click_event
translation_of: Web/API/Element/click_event
---
El evento "click" se dispara cuando se presiona el botón de un dispositivo de entrada (Mouse o Mousepad) sobre un elemento.

## Información General

- Especificación
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-click)
- Interfaz
  - : {{domxref("MouseEvent")}}
- Bubbles
  - : Yes
- Cancelable
  - : Yes
- Target
  - : Element
- Default Action
  - : Varies

## Propiedades

| Property                                 | Type                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/es/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                                                                                                               |
| `type` {{readonlyInline}}          | [`DOMString`](/es/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/es/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event normally bubbles or not                                                                                                                                                                                                                                                                                                                                                                            |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/es/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event is cancellable or not?                                                                                                                                                                                                                                                                                                                                                                             |
| `view` {{readonlyInline}}          | [`WindowProxy`](/es/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/es/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` of the document)                                                                                                                                                                                                   |
| `detail` {{readonlyInline}}        | `long` (`float`)                                                                                                                                             | A count of consecutive clicks that happened in a short amount of time, incremented by one.                                                                                                                                                                                                                                                                                                                           |
| `currentTarget` {{readonlyInline}} | EventTarget                                                                                                                                                  | The node that had the event listener attached.                                                                                                                                                                                                                                                                                                                                                                       |
| `relatedTarget` {{readonlyInline}} | EventTarget                                                                                                                                                  | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                            |
| `screenX` {{readonlyInline}}       | long                                                                                                                                                         | The X coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                |
| `screenY` {{readonlyInline}}       | long                                                                                                                                                         | The Y coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                |
| `clientX` {{readonlyInline}}       | long                                                                                                                                                         | The X coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                            |
| `clientY` {{readonlyInline}}       | long                                                                                                                                                         | The Y coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                            |
| `button` {{readonlyInline}}        | unsigned short                                                                                                                                               | The button number that was pressed when the mouse event was fired: Left button=0, middle button=1 (if present), right button=2. For mice configured for left handed use in which the button actions are reversed the values are instead read from right to left.                                                                                                                                                     |
| `buttons` {{readonlyInline}}       | unsigned short                                                                                                                                               | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/es/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                                                                                                                                        | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                       |
| `ctrlKey` {{readonlyInline}}       | boolean                                                                                                                                                      | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                      |
| `shiftKey` {{readonlyInline}}      | boolean                                                                                                                                                      | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                        |
| `altKey` {{readonlyInline}}        | boolean                                                                                                                                                      | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                          |
| `metaKey` {{readonlyInline}}       | boolean                                                                                                                                                      | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |

## Ejemplo

```js
<div id="prueba"></div>

<script>
  document.getElementById("prueba").addEventListener("click", function( event ) {
    // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
    event.target.innerHTML = "Conteo de Clicks: " + event.detail;
  }, false);
</script>
```

## Compatibilidad con Navegadores

### Internet Explorer

Internet Explorer 8 & 9 tiene problemas con elementos con un valor {{cssxref("background-color")}} de `transparent que es sobrepuesto a los demas elementos por lo que no les permite recibir el evento.`

Un ejemplo [aqui](http://jsfiddle.net/YUKma/show/)

¿Cómo evitarlo?

- Para IE9 only:

  - Asignar `{{cssxref("background-color")}}: rgba(0,0,0,0)`
  - Asignar `{{cssxref("opacity")}}: 0` y asignar explicitamente {{cssxref("background-color")}} un valor diferente a [`transparent`](/es/docs/Web/CSS/color_value#transparent_keyword)

- Para IE8 and IE9:

  - Asignar `filter: alpha(opacity=0);` y asignar explicitamente {{cssxref("background-color")}} un valor diferente a [`transparent`](/es/docs/Web/CSS/color_value#transparent_keyword)

### Safari Mobile

En Safari Mobile 7.0+ ( también algunas versiones anteriores) [presenta un problema](https://bugs.webkit.org/show_bug.cgi?id=153887) cuando se da click sobre elementos que no son tipicamente interactivos como es el caso de un div.

¿Cómo evitarlo?

- Asignar {{cssxref("cursor")}}`: pointer;` en el elemento o uno de sus contendores.
- Ubicar un attributo `onclick="void(0)"` al elemento o cualquiera de sus elementos contenedores, menos {{HTMLElement("body")}}.
- Usar elementos interactivos (e.g. {{HTMLElement("a")}}) en lugar de no interactivos (e.g. {{HTMLElement("div")}}).
- No usar [delegacion del evento](http://davidwalsh.name/event-delegate) click.

Lo siguientes elementos son considerados por Safari típicamente interactivos

- {{HTMLElement("a")}} (but it must have an `href`)
- {{HTMLElement("area")}} (but it must have an `href`)
- {{HTMLElement("button")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}} (but it must be associated with a form control)
- {{HTMLElement("textarea")}}
- _This list is incomplete; you can help MDN by doing further testing/research and expanding it._

{{Compat("api.Element.click_event")}}

## Véase también

- {{event("mousedown")}}
- {{event("mouseup")}}
- {{event("mousemove")}}
- {{event("click")}}
- {{event("dblclick")}}
- {{event("mouseover")}}
- {{event("mouseout")}}
- {{event("mouseenter")}}
- {{event("mouseleave")}}
- {{event("contextmenu")}}
