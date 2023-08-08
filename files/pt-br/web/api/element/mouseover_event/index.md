---
title: mouseover
slug: Web/API/Element/mouseover_event
---

O evento `mouseover` é acionado quando um dispositivo ponteiro é movido para o elemento que esteja escutando ou para um de seus filhos.

## Informações Gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseover)
- Interface
  - : {{domxref("MouseEvent")}}
- Bubbles
  - : Sim
- Cancelable
  - : Sim
- Alvo
  - : Element
- Ação Padrão
  - : None

## Propriedades

| Property                           | Type                       | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | O evento alvo(o mais alto alvo na arvore do DOM).                                                                                                                                                                                                                                                                                                                                                                       |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}   | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                      |
| `bubbles` {{readonlyInline}}       | Boolean                    | Whether the event normally bubbles or not                                                                                                                                                                                                                                                                                                                                                                               |
| `cancelable` {{readonlyInline}}    | `Boolean`                  | Whether the event is cancellable or not                                                                                                                                                                                                                                                                                                                                                                                 |
| `view` {{readonlyInline}}          | {{domxref("WindowProxy")}} | {{domxref("document.defaultView")}} (`window` of the document)                                                                                                                                                                                                                                                                                                                                                          |
| `detail` {{readonlyInline}}        | `long` (`float`)           | 0.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `currentTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | The node that had the event listener attached.                                                                                                                                                                                                                                                                                                                                                                          |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                               |
| `screenX` {{readonlyInline}}       | long                       | The X coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `screenY` {{readonlyInline}}       | long                       | The Y coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `clientX` {{readonlyInline}}       | long                       | The X coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `clientY` {{readonlyInline}}       | long                       | The Y coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `button` {{readonlyInline}}        | unsigned short             | This is always 0 as no button presses trigger this event (mouse movement does).                                                                                                                                                                                                                                                                                                                                         |
| `buttons` {{readonlyInline}}       | unsigned short             | The buttons depressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are depressed, returns the logical sum of the values. E.g., if Left button and Right button are depressed, returns 3 (=1 \| 2). [More info](/pt-BR/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                      | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                          |
| `ctrlKey` {{readonlyInline}}       | boolean                    | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |
| `shiftKey` {{readonlyInline}}      | boolean                    | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                           |
| `altKey` {{readonlyInline}}        | boolean                    | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                             |
| `metaKey` {{readonlyInline}}       | boolean                    | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                            |

## Example

The following example illustrates the difference between `mouseover` and [`mouseenter`](/pt-BR/docs/Web/Events/mouseenter) events.

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

<script>
  var test = document.getElementById("test");

  // this handler will be executed only once when the cursor moves over the unordered list
  test.addEventListener(
    "mouseenter",
    function (event) {
      // highlight the mouseenter target
      event.target.style.color = "purple";

      // reset the color after a short delay
      setTimeout(function () {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );

  // this handler will be executed every time the cursor is moved over a different list item
  test.addEventListener(
    "mouseover",
    function (event) {
      // highlight the mouseover target
      event.target.style.color = "orange";

      // reset the color after a short delay
      setTimeout(function () {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );
</script>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{Event("mousedown")}}
- {{Event("mouseup")}}
- {{Event("mousemove")}}
- {{Event("click")}}
- {{Event("dblclick")}}
- {{Event("mouseover")}}
- {{Event("mouseout")}}
- {{Event("mouseenter")}}
- {{Event("mouseleave")}}
- {{Event("contextmenu")}}
