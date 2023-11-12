---
title: HTMLElement.offsetLeft
slug: Web/API/HTMLElement/offsetLeft
---

{{ APIRef("HTML DOM") }}

La propiedad de solo lectura **`HTMLElement.offsetLeft`** devuelve el número de _píxeles a la izquierda_ del elemento actual con respecto al nodo {{domxref("HTMLElement.offsetParent")}} .

Para los elementos de bloque, `offsetTop`, `offsetLeft`, `offsetWidth`, y `offsetHeight` determina el borde de la caja del elemento relativo al `offsetParent.`

Sin embargo, para los elementos inline (por ejemplo **span**), que puede ser cortado de un línea a otra, `offsetTop,` and `offsetLeft` describe la posición de la primer borde de la caja (usar {{domxref("Element.getClientRects()")}} para obtener el ancho y el alto), mientras que `offsetWidth` y `offsetHeight` describen las dimensiones de los límites (usar {{domxref("Element.getBoundingClientRect()")}} para obtener su posición). Por lo tanto, una caja con left, top, width y height del `offsetLeft`, `offsetTop`, `offsetWidth`, `offsetHeight`, no definirá los límites para un span con texto que continúa en otra línea.

## Sintaxis

```
left = element.offsetLeft;
```

`left` es un entero que representa la posición de la izquierda del elemento actual con respecto al padre.

## Ejemplo

```
var colorTable = document.getElementById("t1");
var tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // posición izquierda muy larga: hacer algo
}
```

This example shows a 'long' sentence that wraps within a div with a blue border, and a red box that one might think should describe the boundaries of the span.

![Image:offsetLeft.jpg](offsetleft.jpg)

```
<div style="width: 300px; border-color:blue;
  border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="long">Long span that wraps within this div.</span>
</div>

<div id="box" style="position: absolute; border-color: red;
  border-width: 1; border-style: solid; z-index: 10">
</div>

<script>
  var box = document.getElementById("box");
  var long = document.getElementById("long");
  box.style.left = long.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = long.offsetTop + document.body.scrollTop + "px";
  box.style.width = long.offsetWidth + "px";
  box.style.height = long.offsetHeight + "px";
</script>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{domxref("HTMLElement.offsetParent")}}, {{domxref("HTMLElement.offsetTop")}}, {{domxref("HTMLElement.offsetWidth")}}, {{domxref("HTMLElement.offsetHeight")}}
