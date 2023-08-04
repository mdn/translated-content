---
title: blur (evento)
slug: Web/API/Element/blur_event
---

{{ APIRef }}

El evento `blur` es disparado cuando un elemento ha perdido su foco. La diferencia principal entre este evento y [`focusout`](/es/docs/Mozilla_event_reference/focusout) es que sólo el último se propaga (bubbles).

## Información General

- Especificación
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-blur)
- Interfaz
  - : {{domxref("FocusEvent")}}
- Burbujas
  - : No
- Cancelable
  - : No
- Objetivo
  - : Element
- Acción por defecto
  - : Ninguna.

> **Nota:** El valor de {{domxref("Document.activeElement")}} varía a traves de navegadores mientras este evento está siendo manejado ([Error 452307 en Firefox](https://bugzil.la/452307)): IE10 lo agrega al elemento al cual el foco se movera, mientras Firefox y Chrome muy seguido lo agregan al cuerpo del documento.

## Propiedades

| Propiedad                          | Tipo                                     | Descripción                                 |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Objetivo del evento (elemento DOM)          |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | El tipo de evento.                          |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Si el elemento normalmente se propaga o no. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Si el evento es cancelable o no.            |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | null                                        |

## Delegación de eventos

Hay dos maneras de implementar la delegación de eventos para este evento: usando el evento `focusout` en exploradores que lo soporten, o cambiando el parámetro "useCapture" de [`addEventListener`](/es/docs/DOM/element.addEventListener) a `true`:

### Contenido HTML

```html
<form id="form">
  <input type="text" placeholder="text input" />
  <input type="password" placeholder="password" />
</form>
```

### Contenido JavaScript

```js
var form = document.getElementById("form");
form.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
  },
  true,
);
form.addEventListener(
  "blur",
  function (event) {
    event.target.style.background = "";
  },
  true,
);
```

{{EmbedLiveSample('Delegación_de_eventos')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Eventos relacionados

- [`focus`](/es/docs/Web/Reference/Events/focus)
- [`blur`](/es/docs/Web/Reference/Events/blur)
- [`focusin`](/es/docs/Web/Reference/Events/focusin)
- [`focusout`](/es/docs/Web/Reference/Events/focusout)
