---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
---

{{ APIRef("HTML DOM") }}

La propiedad de solo lectura **`HTMLElement.offsetParent`** retorna una referencia al objeto, el cual es el elemento contenedor posicionado más cercano (más cercano en la jerarquía contenedora). Si el elemento es no-posicionado, `td`, `th`, `table` o el `body` más cercano es retornado.

`offsetParent` retorna `null` cuando el elemento `style.display` tiene asignado `none`. `offsetParent` es útil porque {{domxref("HTMLElement.offsetTop","offsetTop")}} y {{domxref("HTMLElement.offsetLeft","offsetLeft")}} son relativos a su borde de relleno.

## Sintaxis

```
parentObj = element.offsetParent;
```

- _parentObj_ es una referencia de objeto al elemento en el cual el elemento actual es offset.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
