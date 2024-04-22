---
title: 建立Canvas並畫出
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

這是[Gamedev Canvas tutorial](/zh-TW/docs/Games/Workflows/Breakout_game_from_scratch)十個步驟的第一步。你可以這份教學的原始碼，當你完成這份教學你的程式碼應該跟[Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html)差不多。

在開始撰寫遊戲功能之前，我們先建構在遊戲中負責渲染的基礎結構。渲染可透過 HTML 的{{htmlelement("canvas")}} 元件完成。

## 遊戲的 HTML

當整個遊戲透過{{htmlelement("canvas")}} 元件渲染時，HTML 檔案結構就會相當簡單。用你最喜歡的文字編輯器打開新的 HTML 檔，將它命名為`index.html並存在適當的位置上，再將下面的的程式碼貼到index.html中`:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background: #eee;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="480" height="320"></canvas>

    <script>
      // JavaScript code goes here
    </script>
  </body>
</html>
```

在 header 中設定了文字編碼、以及{{htmlelement("title")}}和一些 CSS 樣式。在 body 中包含{{htmlelement("canvas")}}與{{htmlelement("script")}}，前者將用來渲染遊戲畫面，後者將用來撰寫 JavaScript 程式控制渲染。{{htmlelement("canvas")}} 元件有個 `id` 為 `myCanvas` 方便當作參考(reference，如許多程式語言中的變數)讓我們設定它的寬度為 480 pixels 與高度 320 pixels，這份教學中全部的 JavaScript 程式碼都會寫在 `<script>` 開始標記與 `</script>` 結束標記中間。

## Canvas 基礎

為了能夠順利渲染圖形在{{htmlelement("canvas")}}元件中，獲得{{htmlelement("canvas")}}元件的參考。請將下列的程式碼加在`<script>`開始標記的後面。

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

我們將{{htmlelement("canvas")}}元件的參考存成變數 canvas 為了未來使用。建立 ctx 變數儲存"2D 渲染環境"，ctx 變數實際拿來繪製 Canvas 的工具。

以下片段的程式範例在 canvas 上印出紅色正方形。將以下的程式加在上面 J 的 avaScript 程式碼之後，再用瀏覽器打開`index.html`測試。

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

所有的指令都介於{{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}與{{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}。我們用{{domxref("CanvasRenderingContext2D.rect()","rect()")}}定義了一個矩形，{{domxref("CanvasRenderingContext2D.rect()","rect()")}}中前兩個數值代表左上角的座標。在上面的情況中，矩形距離左邊 20 pixels，距離畫面上方 40 pixels，50 pixels 寬，50 pixels 高，形成完美的正方形。{{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}屬性所儲存的顏色會被{{domxref("CanvasRenderingContext2D.fill()","fill()")}}方法用來塗滿正方形，在此為塗上紅色。

不僅矩形— 以下的程式碼印出綠色的圓形。試著將程式碼加在 JavaScript 底部，存檔在重新整理瀏覽器中的`index.html`:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

如同你看到的我們再次使用了{{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}與{{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}。在它們中間最重要的程式碼是{{domxref("CanvasRenderingContext2D.arc()","arc()")}}。{{domxref("CanvasRenderingContext2D.arc()","arc()")}}用到六個參數(依序介紹)：

- `圓弧中心的x、y座標`
- 圓弧的半徑
- 圓弧開始和結束的角度(從開始到結束的角度, 以弧度表示)
- 繪製的方向(`false`代表順時針方向, 預設或 true 為逆時針方向) 最後一個參數並非必要

{{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}看起來與之前不同，原因就像 CSS 一樣可以用 16 進位、顏色關鍵字、`rgba()函式等其他可用的顏色指定方法。`

不但有{{domxref("CanvasRenderingContext2D.fill()","fill()")}}填滿圖形，還有 {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}} 專門為外輪廓線上色。也試著加入下面的 JavaScript 程式碼吧:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

上面的程式碼印出藍色邊框的空心矩形，由於在`rgba()函式的`alpha 通道，藍色邊框呈現半透明。

## 比較你的程式碼

這裡第一課的有全部原始碼，在 JSFiddle 上實際運行:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","370")}}

> **備註：** 練習改變物體的大小和顏色

## 下一步

現在我們已經設定基本的 HTML 並且學了一些 canvas 知識 ，讓我們接著下去第二章實做[如何在遊戲中移動球](/zh-TW/docs/Games/Workflows/Breakout_game_from_scratch/Move_the_ball)[。](/zh-TW/docs/Games/Workflows/Breakout_game_from_scratch/Move_the_ball)

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
