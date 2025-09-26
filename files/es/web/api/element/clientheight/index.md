---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
---

{{ APIRef }}

La propiedad de sólo lectura `Element.clientHeight` devuelve la altura de un elemento en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen.

`clientHeight` puede ser calculado como CSS `height` + CSS `padding` - alto de la barra horizontal (si existe).

> [!NOTE]
> Esta propiedad redondeará el valor a un entero. Si necesitas un valor fraccional usa {{ domxref("element.getBoundingClientRect()") }}.

## Sintaxis

```js
var h = element.clientHeight;
```

`h` es un entero que representa el alto de _element_ en píxeles.

## Ejemplo

![Image:Dimensions-client.png](dimensions-client.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [Determining the dimensions of elements](/es/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN: Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
