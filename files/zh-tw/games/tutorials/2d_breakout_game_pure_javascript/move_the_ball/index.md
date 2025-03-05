---
title: 讓球移動
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

這一篇是[Gamedev Canvas tutorial](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)十個步驟中的第二步。當完成此步驟你的程式碼應該會與[Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html)差不多

完成上一個步驟，你已經知道如何畫出一顆球，現在讓他動起來吧。藉由繪製球在螢幕上然後再清除，然後在每個影格中繪製球在偏移一點點的位置上（如果在同一個位置上就等於沒動），造成物體移動的感覺，就如同電影中物體移動的方式。

## 定義一個繪製用的迴圈

為了固定更新 canvas 繪圖區域的每一個影格，我們需要定義一個繪製函式（drawing function），它將會重複執行，用不同的變數改變球的位置或其他物的位置。重複執行一個函式，其中使用 JavaScript timing function，像是 {{domxref("Window.setInterval()", "setInterval()")}} 或是 {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}。

除了前兩行的 JavaScript，其餘的都刪除，並將以下的程式碼加入在前兩行之後。draw()函數每十毫秒會被 setInterval 執行一次:

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

因為 `setInterval` 無限循環的特性， `draw()` 函數將會每 10 毫秒被呼叫一次除非我們將它停止。 現在，讓我們來把球畫出來 — 將以下程式碼加入到 `draw()` 函數內:

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

現在將你的程式碼更新 — 球將會在每個影格被重新繪製.

## 讓球動起來

由於球並沒有移動，你沒有辦法察覺到它正不斷的被重新繪製。讓我們稍作修改。首先，取代掉原本寫死的位置(50,50)，我們宣告變數 x 和 y 讓球從 Canvas 正中央的底部出發，接著利用 x 和 y 來定義球應該被畫在哪裡。

首先將下面兩行程式碼加到你的 `draw()` 函數用以定義 `x` 和 `y`:

```js
var x = canvas.width / 2;
var y = canvas.height - 30;
```

接著修改 `draw()` 函數，在 {{domxref("CanvasRenderingContext2D.arc()","arc()")}} 方法裡使用了變數 x 和 y，就像下面被強調的那行程式碼：

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

再來是最重要的部分: 在每個影格被繪製出來後，我們想要對 x 和 y 增加一數值，讓球看起來好像在移動一樣。讓我們來定義這個數值為 dx 以及 dy，並且分別設為 2 以及 -2。將以下程式碼添加到你定義 x 和 y 的地方:

```js
var dx = 2;
var dy = -2;
```

最後，在每個影格中我們利用 dx 和 dy 來更新 x 和 y 的數值，球就會在每次更新後被畫到不同的位置。將最後兩行程式碼加到你的 draw()函數內:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

儲存你的程式碼並在瀏覽器重新整理。程式正常運作，雖然球似乎留下的他的蹤跡:

![](ball-trail.png)

## 在每個影格開始前清除 canvas

由於我們在每個影格繪製新的球之前並沒有把舊的清除掉，讓他看起來像留下了一條痕跡。別擔心，其實是有方法可以把 canvas 清除掉: {{domxref("CanvasRenderingContext2D.clearRect()","clearRect()")}}. 這個方法需要 4 個參數: 前兩個參數代表了長方形左上角的 x 和 y 座標，後兩個參數代表了長方形右下角的 x 和 y 座標。之前在這長方形範圍內所繪製的東西將會被清除掉。

將以下強調的程式碼加到 `draw()` 函數內:

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

將程式碼儲存並重新整理瀏覽器，這次球沒有再留下痕跡了。每 10 毫秒 canvas 會被清除，球將會被畫在指定的位置上，且 x 和 y 會更新以用在下一個影格.

## 整理程式碼

再接續幾個章節我們會持續增加 `draw()` 函數內的指令，讓我們儘可能的維持程式的簡潔度。讓我們把繪製球的程式碼獨立為一個函數。

將原本的 draw() 函數拆成以下兩個函數:

```js
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
```

## 比較你的程式碼

以下為到目前為止完整的程式碼，你可以核對並試著操作以幫助你更瞭解他的運作方式:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3x5foxb1/","","415")}}

Exercise: 練習改變球的移動速度或行進方向。

## 下一步

我們繪製了球並且讓他可以移動，但他仍會消失在 canvas 的邊緣。在第三章我們將會實作 [讓球碰到牆壁後反彈](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
