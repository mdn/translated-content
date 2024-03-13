---
title: HTMLTableElement.align
slug: Web/API/HTMLTableElement/align
---

{{APIRef("HTML DOM")}}{{deprecated_header()}}

La propiedad **`HTMLTableElement.align`** representa la alineación de la tabla.

## Sintaxis

```
HTMLTableElement.align =alignment;
varalignment =HTMLTableElement.align;
```

### Parámetros

- `alignment` {{deprecated_inline}}

  - : `alignment` es una cadena con uno de los siguientes valores:

    - left
    - center
    - right

## Ejemplo

```js
// Establecer la alineación de una tabla
var t = document.getElementById("TableA");
t.align = "center";
```

## Especificación

- Especificación W3C DOM 2 HTML [_HTMLTableElement_ .align](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-23180977).
