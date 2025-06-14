---
title: HTMLCanvasElement.width
slug: Web/API/HTMLCanvasElement/width
---

{{APIRef("Canvas API")}}

TLa propiedad **`HTMLCanvasElement.width`** es un entero positivo que refleja el atributo [`width`](/es/docs/Web/HTML/Reference/Elements/canvas#width) del elemento {{HTMLElement("canvas")}} interpretado en pixeles CSS. Cuando el atributo no esta especificado o se define con un valor invalido (ej. Número negativo), es usado el valor por defecto de 150.

Esta es una de de las dos propiedades que controlan el tamaño del canvas, siendo la otra {{domxref("HTMLCanvasElement.height")}}, that controls the size of the canvas.

## Syntax

```
var pxl = canvas.width;
canvas.width = pxl;
```

## Ejemplos

Dado el siguiente elemento {{HTMLElement("canvas")}} :

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Puedes obtener el ancho del canvas con el siguiente codigo:

```js
var canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La interfaz que lo define, {{domxref("HTMLCanvasElement")}}.
- La otra propiedad que controla el tamaño del canvas,{{domxref("HTMLCanvasElement.height")}}.
