---
title: Canvas 基本用途
slug: Web/API/Canvas_API/Tutorial/Basic_usage
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Let's start this tutorial by looking at the {{HTMLElement("canvas")}} {{Glossary("HTML")}} element itself. At the end of this page, you will know how to set up a canvas 2D context and have drawn a first example in your browser.

## `<canvas>` 元素

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

首先，先來看看 {{HTMLElement("canvas")}}，它看起來有點像 {{HTMLElement("img")}} 元素，其中的差異點在於 `<canvas>` 沒有 `src` 和 `alt` 屬性，`<canvas>` 只有 [`width`](/zh-TW/docs/Web/HTML/Element/canvas#width) 與 [`height`](/zh-TW/docs/Web/HTML/Element/canvas#height) 這兩個屬性，這兩個屬性皆為非必須、能透過 [DOM](/zh-TW/docs/DOM) 屬性設定；若是沒有設定 `width` 和 `height` 屬性，畫布寬預設值為 **300 pixels**、高預設值為 **150 pixels**，我們可以用 [CSS](/zh-TW/docs/Web/CSS) 強制設定元素尺寸，但當渲染時，影像會縮放以符合元素的尺寸。

> **備註：** 如果繪圖結果看起來有些扭曲，可以改試著用\<canvas>自身的 width 和 height 屬性而不要用 CSS 來設定寬高。

幾乎所有 HTML 元素都有 id 屬性，\<canvas>也不例外，為了方便於程式碼腳本找到需要的\<canvas>，每次都設定 id 是一項不錯的作法。

如同一般的影像可以設定如邊界(margin)、邊框(border)、背景(background)等等，\<canvas>元素一樣可以設定這些樣式，然而，這些樣式規則不會影響 canvas 實際繪圖，稍後我們會看到相關範例。當沒有套用樣式規定時，\<canvas>會被初始成全透明。

### 錯誤替代內容(Fallback content)

因為舊版瀏覽器(特別是 IE9 之前的 IE)不支援{\<canvas>}元素，我們應該為這些瀏覽器準備錯誤替代內容。

當不支援\<canvas>的瀏覽器看到不認識的\<canvas>時會忽略\<canvas>，而此時在\<canvas>下瀏覽器認識的替代內容則會被瀏覽器解析顯示，至於支援\<canvas>的瀏覽器則是會正常解析\<canvas>，忽略替代內容。

例如，我們可以準備一段 canvas 內容的說明文字或 canvas 繪圖完成後的靜態圖片，如下所示:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="" />
</canvas>
```

## 需要\</canvas>標籤

不像{{HTMLElement("img")}}元素，{{HTMLElement("canvas")}}元素必須要有\</canvas>結束標籤。

> **備註：** 縱使早期 Apple 的 Safari 瀏覽器不需要結束標籤，但是基於規範，這是必須的，所以，為了相容性考量，應該要有結束標籤。Safari 2.0 以前的版本會同時解析 canvas 以及替代內容，除非我們用 CSS 去遮蓋內容，不過幸運的是，現在已經沒有甚麼人在用這些舊版 Safari。

如果不需要錯誤替代內容，簡單的\<canvas id="foo" ...>\</canvas>便可以完全相容於所有支援的瀏覽器。

## 渲染環境(rendering context)

{{HTMLElement("canvas")}}產生一個固定大小的繪圖畫布，這個畫布上有一或多個渲染環境(rendering context)，我們可以用渲染環境來產生或操作顯示內容的渲染環境(rendering context)。不同環境(context)可能會提供不同型態的渲染方式，好比說[WebGL](/zh-TW/docs/Web/WebGL)使用[OpenGL ES](http://www.khronos.org/opengles/)的 3D 環境(context)，而這裡我們主要將討論 2D 渲染環境(rendering context)。

一開始 canvas 為空白，程式碼腳本需要先存取渲染環境，在上面繪圖，然後才會顯現影像。{{HTMLElement("canvas")}} 素有一個[方法](/zh-TW/docs/Web/API/HTMLCanvasElement#Methods)叫 getContext()，透過此方法可以取得渲染環境及其繪圖函數（function）；getContext() 輸入參數只有渲染環境類型一項，像本教學所討論的 2D 繪圖，就是輸入「2d」。

```js
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");
```

上面第一行先呼叫{{domxref("document.getElementById()")}}來取得{{HTMLElement("canvas")}}元素，一旦取得元素後，便可以用其 getContext()取得渲染環境。

## 支援性檢查

替代內容會被不支援{{HTMLElement("canvas")}}.的瀏覽器所顯示。程式碼腳本也可以利用檢查 getContext()方法是否存在來檢查是否支援\<canvas>，我們可以修改上面例子成如下:

```js
var canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## 一個範本

這裡是一個最簡單的範本，之後就是我們範例的起始點。

```html
<html>
  <head>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
        }
      }
    </script>
    <style type="text/css">
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

一旦網頁載入完成後，程式碼會呼叫 draw()函數(這是利用 document 上的 load 事件完成)，這類 draw()函數也可以透過{{domxref("window.setTimeout()")}}, {{domxref("window.setInterval()")}}或其他事件處理函數來呼叫，只要呼叫的時間點是在網頁載入完後。

這是我們的範本實際看起來的樣子:

{{EmbedLiveSample("一個範本", 160, 160)}}

## 一個簡單的範例

首先，讓我們先來畫兩個相交的正方形，其中一個正方形有 alpha 透明值，之後我們會說明這是如何達成的。

```html
<html>
  <head>
    <script type="application/javascript">
      function draw() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect(10, 10, 55, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 55, 50);
        }
      }
    </script>
  </head>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

本範例的結果如下:

{{EmbedLiveSample("一個簡單的範例", 160, 160, "canvas_ex1.png")}}

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial", "Web/Guide/HTML/Canvas_tutorial/Drawing_shapes")}}
