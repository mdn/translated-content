---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
tags:
  - Propiedad
translation_of: Web/API/HTMLCanvasElement/height
---
{{APIRef("Canvas API")}}

La propiedad **`HTMLCanvasElement.height es un entero positivo que refleja el atributo `**{{htmlattrxref("height", "canvas")}} del elemento {{HTMLElement("canvas")}} interpretado en pixeles CSS. Cuando el atributo no esta especificado o esta puesto en un valor invalido(ej. Número negativo), es usado el valor por defecto de 150.

Esta es una de de las dos propiedades que controlan el tamaño del canvas, siendo la otra {{domxref("HTMLCanvasElement.width")}}.

## Syntax

    var pxl = canvas.height;
    canvas.height = pxl;

## Ejemplos

Dado el siguiente elemento {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Puedes obtener la altura del canvas con el siguiente codigo:

```js
var canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Especificaciones

| Especificación                                                                                                               | Status                           | Comentarios                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#attr-canvas-height", "HTMLCanvasElement.height")}} | {{Spec2('HTML WHATWG')}} | No hay cambios desde la ultima foto {{SpecName('HTML5 W3C')}}          |
| {{SpecName('HTML5.1', "scripting-1.html#attr-canvas-height", "HTMLCanvasElement.height")}}     | {{Spec2('HTML5.1')}}     |                                                                               |
| {{SpecName('HTML5 W3C', "scripting-1.html#attr-canvas-height", "HTMLCanvasElement.height")}} | {{Spec2('HTML5 W3C')}}     | Foto que contiene la definición inicial {{SpecName('HTML WHATWG')}}. |

## Compatibilidad de Navegadores

{{Compat("api.HTMLCanvasElement.height")}}

## Ver también

- La interfaz que lo define, {{domxref("HTMLCanvasElement")}}.
- La otra propiedad que controla el tamaño del canvas, {{domxref("HTMLCanvasElement.width")}}.
