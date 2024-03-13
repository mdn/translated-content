---
title: document.alinkColor
slug: Web/API/Document/alinkColor
---

{{APIRef("DOM")}}{{ Deprecated_header() }}

Devuelve o define el color que tendrán los vínculos activos en el cuerpo (elemento `body` del documento. Un vínculo está activo durante el tiempo entre los eventos `mousedown` (cuando se presiona el botón izquierdo del "mouse" sobre el vínculo) y `mouseup` (cuando se deja de presionar el vínculo al soltar el botón izquierdo del "mouse").

## Sintaxis

```js
color = document.alinkColor;
document.alinkColor = color;
```

`color` es un texto que deberá llevar el nombre del color en inglés(e.g., `"blue"`, `"darkblue"`, etc.) o el valor hexadecimal del color (e.g., `#0000FF`)

## Notas

El valor por defecto de esta propiedad en Mozilla es rojo (`#ee0000` en hexadecimal).

`document.alinkColor` es obsoleto en [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). Una alternativa es el selector CSS {{ Cssxref(":active") }}.

Otra alternativa es `document.body.aLink`, sin embargo éste es [desaprobado en HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-alink) a favor de la alternativa CSS.

[Gecko](/es/Gecko) soporta tanto `alinkColor`/`:active` como {{ Cssxref(":focus") }}. Internet Explorer 6 y 7 soportan `alinkColor`/`:active` sólo para [vínculos de ancla (\<a>) HTML](/es/HTML/Element/a) y el comportamiento es el mismo que `:focus` bajo Gecko. En IE (Internet Explorer) no hay soporte para `:focus`.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
