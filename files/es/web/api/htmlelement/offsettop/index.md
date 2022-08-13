---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
translation_of: Web/API/HTMLElement/offsetTop
---
{{ APIRef("HTML DOM") }}

La propiedad de sólo lectura **`HTMLElement.offsetTop`** retorna la distancia del elemento actual respecto al borde superior del nodo {{domxref("HTMLelement.offsetParent","offsetParent")}}.

## Sintaxis

    topPos = element.offsetTop;

### Parámetros

- `topPos` es el número de pixels desde el borde superior del elemento padre _más cercano posicionado de forma relativa_.

## Ejemplo

```js
var d = document.getElementById("div1");
var topPos = d.offsetTop;

if (topPos > 10) {
  // objeto está posicionado a más de
  // de 10 pixels de distancia de su padre
}
```

## Especificación

| Especificación                                                                               | Estado                           | Observaciones |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| {{SpecName('CSSOM View', '#dom-htmlelement-offsettop', 'offsetTop')}} | {{Spec2('CSSOM View')}} |               |

## Compatibilidad con navegadores

{{Compat("api.HTMLElement.offsetTop")}}

In compliance with the specification, this property will return `null` on Webkit if the element is hidden (the `style.display` of this element or any ancestor is `"none"`) or if the `style.position` of the element itself is set to `"fixed"`.

This property will return `null` on Internet Explorer (9) if the `style.position` of the element itself is set to `"fixed"`. (Having `display:none` does not affect this browser.)
