---
title: Canvas API
slug: Web/API/Canvas_API
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{DefaultAPISidebar("Canvas API")}}

**Canvas API** 提供了一種透過 [JavaScript](/zh-TW/docs/Web/JavaScript) 和 [HTML](/zh-TW/docs/Web/HTML) {{HtmlElement("canvas")}} 元素繪製圖形的方法。除此之外，它還可用於動畫、遊戲圖形、資料視覺化、照片處理以及即時視訊處理等。

Canvas API 主要專注於 2D 圖形。而 [WebGL API](/zh-TW/docs/Web/API/WebGL_API) 也使用 `<canvas>` 元素，用於繪製硬體加速的 2D 和 3D 圖形。

## 基本範例

這個簡單的範例會在畫布上繪製一個綠色的矩形。

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

{{domxref("Document.getElementById()")}} 方法取得 HTML `<canvas>` 元素的參考。接著，{{domxref("HTMLCanvasElement.getContext()")}} 方法取得該元素的上下文——繪製將會算繪到此處。

實際的繪製是透過 {{domxref("CanvasRenderingContext2D")}} 介面完成的。{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 屬性將矩形設為綠色。{{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} 方法將矩形的左上角放置在 (10, 10)，並設定其寬度為 150 單位，高度為 100 單位。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

### 結果

{{ EmbedLiveSample('基本範例', 700, 180) }}

## 參考

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("Path2D")}} {{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}} {{experimental_inline}}

> [!NOTE]
> 與 `WebGLRenderingContext` 相關的介面可參考 [WebGL](/zh-TW/docs/Web/API/WebGL_API)。

> [!NOTE]
> {{domxref("OffscreenCanvas")}} 也可以在 Web Worker 中使用。

{{domxref("CanvasCaptureMediaStreamTrack")}} 是一個相關的介面。

## 指南與教學

- [Canvas 教學](/zh-TW/docs/Web/API/Canvas_API/Tutorial)
  - : 一個全面的教學，涵蓋 Canvas API 的基本用法及其進階功能。
- [HTML5 Canvas 深入探討](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : 一本實作導向的書籍，介紹 Canvas API 和 WebGL。
- [Canvas 手冊](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Canvas API 的便利參考手冊。
- [使用 canvas 操作視訊](/zh-TW/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : 結合 {{HTMLElement("video")}} 和 {{HTMLElement("canvas")}} 即時操作視訊資料。

## 函式庫

Canvas API 功能非常強大，但並不總是容易使用。以下列出的函式庫可以讓基於 Canvas 的專案創建更快速、更簡單。

- [EaselJS](https://createjs.com/easeljs) 是一個開源的 Canvas 函式庫，讓創建遊戲、生成藝術和其他高度圖形化的體驗變得簡單。
- [Fabric.js](https://fabricjs.com/) 是一個具有 SVG 解析能力的開源 Canvas 函式庫。
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) 是一個用於創建基於 Canvas 的資料熱圖的開源函式庫。
- [JavaScript InfoVis Toolkit](https://philogb.github.io/jit/) 用於創建互動式資料視覺化。
- [Konva.js](https://konvajs.org/) 是一個用於桌面和行動應用的 2D Canvas 函式庫。
- [p5.js](https://p5js.org/) 提供完整的 Canvas 繪圖功能，適合藝術家、設計師、教育者和初學者。
- [Paper.js](http://paperjs.org/) 是一個運行於 HTML Canvas 之上的開源向量圖形腳本框架。
- [Phaser](https://phaser.io/) 是一個快速、免費且有趣的開源框架，用於基於 Canvas 和 WebGL 的瀏覽器遊戲。
- [Pts.js](https://ptsjs.org/) 是一個用於 Canvas 和 SVG 的創意編碼與視覺化函式庫。
- [Rekapi](https://github.com/jeremyckahn/rekapi) 是一個用於 Canvas 的動畫關鍵幀 API。
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/) 是一個開源 JavaScript 函式庫，用於創建和操作 2D Canvas 元素。
- [ZIM](https://zimjs.com/) 框架提供了便利性、元件和控制項，用於 Canvas 上的創意編碼——包括無障礙功能和數百個彩色教學。
- [Sprig](https://github.com/hackclub/sprig) 是一個適合初學者的開源基於 Canvas 的圖塊遊戲開發函式庫。

> [!NOTE]
> 有關使用 WebGL 的 2D 和 3D 函式庫，請參見 [WebGL API](/zh-TW/docs/Web/API/WebGL_API)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [WebGL](/zh-TW/docs/Web/API/WebGL_API)
