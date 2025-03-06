---
title: Element.clientWidth
slug: Web/API/Element/clientWidth
---

{{ APIRef }}

La propiedad `Element.clientWidth` es cero para elementos sin CSS o cajas de diseño (layout), en caso contrario es la anchura interior de un elemento en pixels, incluyendo la anchura de relleno (padding) pero no la anchura de la barra de desplazamiento vertical (si está presente, si está dibujada), el borde o el margen.

> [!NOTE]
> El valor de esta propiedad será redondeado a un entero. Si necesita un valor fraccional, use {{ domxref("element.getBoundingClientRect()") }}.

## Sintaxis

```js
var intElemClientWidth = element.clientWidth;
```

_intElemClientWidth_ será un entero que corresponde con el **clientWidth** del elemento en pixels. **clientWidth** es de sólo-lectura.

## Ejemplo

![Image:Dimensions-client.png](dimensions-client.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining the dimensions of elements](/es/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
