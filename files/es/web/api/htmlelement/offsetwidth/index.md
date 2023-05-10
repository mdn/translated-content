---
title: HTMLElement.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
---

{{ APIRef("HTML DOM") }}

La propiedad de solo lectura **`HTMLElement.offsetWidth`** devuelve el ancho del layout del elemento. Esta medida incluye los bordes del elemento asignados al mismo en los estilos CSS.

## Sintáxis

```
var offsetWidth =element.offsetWidth;
```

**`offsetWidth`** es una propiedad de solo lectura.

> **Nota:** Esta propiedad redondeará el valor a un entero. Si necesitas un valor fraccional usa: {{ domxref("element.getBoundingClientRect()") }}.

## Ejemplo

![Image:Dimensions-offset.png](dimensions-offset.png)

## Especificaciones

{{Specifications}}

### Notas

`offsetWidth` es una propiedad del DHTML "object model" que fue inicialmente introducido por MSIE. A veces es referido como box-width.

## Compatibilidad con navegadores

{{Compat}}

## Links Relacionados

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining the dimensions of elements](/es/docs/Determining_the_dimensions_of_elements)
- [MSDN Measuring Element Dimension and Locati](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
