---
title: Canvas API
slug: Web/API/Canvas_API
---

{{DefaultAPISidebar("Canvas API")}}

**{{HTMLElement("canvas")}}** 是 [HTML5](/zh-TW/docs/HTML) 的新元素，可透過 Script（通常是 [JavaScript](/zh-TW/docs/JavaScript)）繪製圖形。例如，可以用來繪圖、合成圖照片、建立動畫、甚至處理即時的影片播放。

Mozilla 應用程式從 Gecko 1.8（也就是 [Firefox 1.5](/zh-TW/Firefox_1.5_for_developers)）起開始支援 `<canvas>`。這個元素最初由蘋果 OS X [Dashboard](http://www.apple.com/macosx/features/dashboard/) 和 Safari 引入。Internet Explorer 9 以上版本也有支援 `<canvas>`，但較舊的 IE 版本則須嵌入 Google [Explorer Canvas](http://excanvas.sourceforge.net/) 專案中的程式腳本，才能得到有效的支援。Opera 9 也支援 `<canvas>`。

`<canvas>` 元素通常也被 [WebGL](/zh-TW/docs/Web/WebGL) 用來在網頁上顯示使用硬體加速繪製的 3D 圖形。

## 範例

這則簡單的範例使用了{{domxref("CanvasRenderingContext2D.fillRect()")}}這個方法。

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

Edit the code below and see your changes update live in the canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);</textarea>
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

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('範例', 700, 360) }}

## 參考

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("Path2D")}} {{experimental_inline}}

這些與`WebGLRenderingContext`有關的標識，皆引用在[WebGL](/zh-TW/docs/Web/WebGL)

## 教程指南

- [Canvas tutorial](/zh-TW/docs/Web/API/Canvas_API/Tutorial)
  - : 這個全部的課程包含 `<canvas>` 基礎的使用和高階的應用。
- [Code snippets: Canvas](/zh-TW/Add-ons/Code_snippets/Canvas)
  - : 一些延伸的開發功能，包含`<canvas>`。
- [Demo: A basic ray-caster](/zh-TW/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : 使用`<canvas>`做的光線追蹤(ray-tracing )範例。
- [Drawing DOM objects into a canvas](/zh-TW/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas)
  - : 如何在 DOM`<canvas>`之中，畫個物件。例如 HTML 的元素。
- [Manipulating video using canvas](/zh-TW/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : 結合{{HTMLElement("video")}} 和 {{HTMLElement("canvas")}} 去控制影像資料的真實時間

## 資源

### Generic

- [HTML5 Canvas Deep Dive](http://joshondesign.com/p/books/canvasdeepdive/title.html)
- [Canvas Handbook](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)

### Libraries

- [Fabric.js](http://fabricjs.com) is an open-source canvas library with SVG parsing capabilities.
- [Kinetic.js](https://github.com/ericdrowell/KineticJS) is an open-source canvas library focused on interactivity for desktop and mobile applications.
- [Paper.js](http://paperjs.org/) is an open source vector graphics scripting framework that runs on top of the HTML5 Canvas.
- [Origami.js](http://origamijs.com/docs/) is an open source lightweight canvas library.
- [libCanvas](http://libcanvas.github.com/) 是一個強大且輕量化的 canvas 框架。
- [Processing.js](http://processingjs.org) 是視覺化程式語言 Processing 的移植版。
- [PlayCanvas](https://playcanvas.com/) is an open source game engine.
- [Pixi.js](http://www.pixijs.com/) is an open source game engine.
- [PlotKit](http://www.liquidx.net/plotkit/) 是一個製作圖表和圖形的函式庫。
- [Rekapi](https://github.com/jeremyckahn/rekapi) 是一個用來控制動畫影格的 Canvas API。
- [PhiloGL](http://senchalabs.github.com/philogl/) 是一個可應用在資料視覺化、遊戲開發的 WebGL 框架。
- [JavaScript InfoVis Toolkit](http://thejit.org/) 可在網頁上建立 2D 的互動式 Canvas 視覺化資料。
- [EaselJS](http://www.createjs.com/easeljs) 是一個自由 / 開放源始碼的函式庫，目的在簡化 canvas 於遊戲與美術的開發難度，類似 Flash API。
- [Scrawl-canvas](http://scrawl.rikweb.org.uk/) is another open-source javascript library for creating and manipulating 2d canvas elements

## 規範

{{Specifications}}

## 參見

- [WebGL](/zh-TW/docs/Web/WebGL)
