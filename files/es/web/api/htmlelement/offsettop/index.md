---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
---

{{ APIRef("HTML DOM") }}

La propiedad de sólo lectura **`HTMLElement.offsetTop`** retorna la distancia del elemento actual respecto al borde superior del nodo {{domxref("HTMLelement.offsetParent","offsetParent")}}.

## Sintaxis

```
topPos = element.offsetTop;
```

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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

De conformidad con la especificación, esta propiedad devolverá el valor `null` en Webkit si el elemento está oculto (`style.display` de este elemento o de cualquier padre es `"none"`) o si `style.position` del elemento en sí está configurada como `"fixed"`.

Esta propiedad devolverá `null` en Internet Explorer (9) si `style.position` del elemento en sí se establece en `"fixed"`. (Tener `display:none` no afecta a este navegador).
