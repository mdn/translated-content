---
title: API Canvas
slug: Web/API/Canvas_API
---

{{DefaultAPISidebar("Canvas API")}}

Añadido en [HTML5](/es/docs/HTML/HTML5), el **elemento HTML {{HTMLElement("canvas")}}** se puede usar para dibujar gráficos mediante scripting en [JavaScript](/es/docs/Web/JavaScript). Por ejemplo, se puede usar para hacer gráficas, composiciones fotográficas, crear animaciones, o incluso procesado o renderizado de vídeo en tiempo real.

Las aplicaciones de Mozilla soportan `<canvas>` desde Gecko 1.8 (es decir, [Firefox 1.5](/es/docs/Mozilla/Firefox/Releases/1.5)). El elemento fue inicialmenmte presentado por Apple para el Dashboard de OS X y Safari. Internet Explorer soporta `<canvas>` desde la versión 9 en adelante; para versiones anteriores de IE, se puede añadir soporte para `<canvas>` a una página incluyendo un script del proyecto de Google [Explorer Canvas](https://github.com/arv/explorercanvas). Google Chrome y Opera 9 también soportan `<canvas>`.

El elemento `<canvas>` también se usa en [WebGL](/es/docs/Web/WebGL) para dibujar gráficos 3D con aceleración por hardware en páginas web.

## Ejemplo

Esto es un trozo de código que usa el método {{domxref("CanvasRenderingContext2D.fillRect()")}}.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

Edita este código para ver tus cambios en tiempo real en este canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);</textarea
>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Código_editable', 700, 360) }}

## Referencia

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RenderingContext")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}}{{experimental_inline}}
- {{domxref("Path2D")}} {{experimental_inline}}{{domxref("ImageBitmapRenderingContext")}}{{experimental_inline}}

Las interfaces relacionadas con `WebGLRenderingContext` están en [WebGL](/es/docs/Web/WebGL).

{{domxref("CanvasCaptureMediaStream")}} está relacionado..

## Guías y tutoriales

- [Tutorial Canvas](/es/docs/Web/API/Canvas_API/Tutorial)
  - : Tutorial exhaustivo que cubre tanto el uso básico de `<canvas>` como sus características avanzadas.
- [Fragmentos de código: Canvas](/es/Add-ons/Code_snippets/Canvas)
  - : Algunos fragmentos de código orientados al desarrollador de extensiones usando `<canvas>`.
- [Demo: Un laberinto básico](/es/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : Una demo de una animación de laberinto usando canvas.
- [Dibujar objetos DOM en un canvas](/es/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas)
  - : Cómo dibujar contenido DOM, como elementos HTML, en un canvas.
- [Manipulación de vídeo usando canvas](/es/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Combinando {{HTMLElement("video")}} y {{HTMLElement("canvas")}} para manipular datos de vídeo en tiempo real.

## Recursos

### Genéricos

- [Profundizando en HTML5 Canvas](http://joshondesign.com/p/books/canvasdeepdive/title.html)
- [Manual de Canvas](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)

### Librerías

- [Fabric.js](http://fabricjs.com) es una librería open-source para canvas con capacidad de parsear SVG.
- [Kinetic.js](https://github.com/ericdrowell/KineticJS) es una librería open-source de canvas enfocada en la interactividad para aplicaciones móviles y de escritorio.
- [Paper.js](http://paperjs.org/) es un framework para gráficos vectoriales open source que funciona sobre Canvas HTML5.
- [Origami.js](http://origamijs.com/docs/) es una librería ligera open-source para canvas.
- [libCanvas](http://libcanvas.github.com/) es un framework ligero y potente para canvas.
- [Processing.js](http://processingjs.org) es un port de PVL (Processing visualization language).
- [PlayCanvas](https://playcanvas.com/) es un motor open source de juegos.
- [Pixi.js](http://www.pixijs.com/) es un motor open source de juegos.
- [PlotKit](http://www.liquidx.net/plotkit/) es una librería para hacer gráficas.
- [Rekapi](https://github.com/jeremyckahn/rekapi) es una API para animación por frames para Canvas.
- [PhiloGL](http://senchalabs.github.com/philogl/) es un framework WebGL para visualización de datos, programación creativa y desarrollo de juegos.
- [JavaScript InfoVis Toolkit](http://thejit.org/) crea visualizaciones de datos 2D interactivas para Web.
- [EaselJS](http://www.createjs.com/easeljs) es una librería open source/libre que facilita el uso de canvas para arte y juegos
- [Scrawl-canvas](http://scrawl.rikweb.org.uk/) es otra librería open-source javascript para crear y manipular elementos canvas en 2D
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) es una librería open-source para crear mapas (heatmaps)

## Especificaciones

{{Specifications}}

## Ver también

- [WebGL](/es/docs/Web/WebGL)
