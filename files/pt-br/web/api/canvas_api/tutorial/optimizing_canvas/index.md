---
title: Otimizando canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}

O elemento {{HTMLElement("canvas")}} é um dos padrões mais largamente utilizados para renderização de gráficos 2D na Web. É muito usado em jogos e em visualizações complexas. Porém, quando sítios web e aplicativos utilizam canvas até seus limites, começam a surgir problemas de perda de performance. Este artigo tem o objetivo de prover sugestões de otimização de seu elemento canvas e garantir que seu site ou aplicativo funcione melhor.

## Dicas de performance

O que segue é uma coleção de dicas para melhorar a performance.

### Pre-render similar primitives or repeating objects on an off-screen canvas

If you find yourself with complex drawing operations on each frame, consider creating an offscreen canvas, draw to it once (or whenever it changes) on the offscreen canvas, then on each frame draw the offscreen canvas.

```js
myEntity.offscreenCanvas = document.createElement("canvas");
myEntity.offscreenCanvas.width = myEntity.width;
myEntity.offscreenCanvas.height = myEntity.height;
myEntity.offscreenContext = myEntity.offscreenCanvas.getContext("2d");

myEntity.render(myEntity.offscreenContext);
```

### Avoid floating-point coordinates and use integers instead

Sub-pixel rendering occurs when you render objects on a canvas without whole values.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

This causes the browser to do extra calculations to create the anti-aliasing effect. To avoid this, make sure to round all co-ordinates used in calls to {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} using {{jsxref("Math.floor()")}}, for example.

### Don't scale images in `drawImage`

Cache various sizes of your images on an offscreen canvas when loading as opposed to constantly scaling them in {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}.

### Use multiple layered canvases for complex scenes

You may find you have some elements that are frequently changing and moving around whereas other things (like UI) never change. An optimization in this situation is to create layers using multiple canvas elements.

For example you could create a UI layer that sits on top of everything and is only drawn during user input. You could create game layer where the frequently updating entities exist and a background layer for entities that rarely update.

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }
  canvas {
    position: absolute;
  }
  #ui-layer {
    z-index: 3;
  }
  #game-layer {
    z-index: 2;
  }
  #background-layer {
    z-index: 1;
  }
</style>
```

### CSS for large background images

If like most games you have a static background image, use a plain {{HTMLElement("div")}} element with a CSS {{cssxref("background")}} property and position it under the canvas. This will avoid drawing a large image to the canvas on every tick.

### Scaling canvas using CSS transforms

[CSS transforms](/pt-BR/docs/Web/Guide/CSS/Using_CSS_transforms) are faster by using the GPU. Best case is to not scale the canvas or have a smaller canvas and scale up rather than a bigger canvas and scale down. For Firefox OS, target 480 x 320 px.

```js
var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; //scale from top left
stage.style.transform = "scale(" + scaleToFit + ")";
```

### Turn off transparency

If your game uses canvas and doesn't need to be transparent, set the `alpha` option to `false` when creating a drawing context with [`HTMLCanvasElement.getContext()`](/pt-BR/docs/Web/API/HTMLCanvasElement/getContext). This information can be used internally to optimize rendering.

```js
var ctx = canvas.getContext("2d", { alpha: false });
```

### More tips

- Batch canvas calls together (for example, draw a poly-line instead of multiple separate lines).
- Avoid unnecessary canvas state changes.
- Render screen differences only, not the whole new state.
- Avoid the {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} property whenever possible.
- Avoid [text rendering](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_text) whenever possible.
- Try different ways to clear the canvas ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} vs. {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} vs. resizing the canvas)
- With animations, use {{domxref("window.requestAnimationFrame()")}} instead of {{domxref("window.setInterval()")}} .
- Be careful with heavy physics libraries

## See also

- [Improving HTML5 Canvas Performance – HTML5 Rocks](http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref)
- [Optimizing your JavaScript game for Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}
