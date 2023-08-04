---
title: 基礎動畫
slug: Web/API/Canvas_API/Tutorial/Basic_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}

控制{{HTMLElement("canvas")}}元素來產生互動式動畫不是一件難事，當然，如果產生的動畫越複雜越需要多費一些力氣，未來如果有機會我們將說明這一塊。

由於圖形一但產生後便靜止不動，所以我們必須重新繪圖好移動圖案，產生動畫效果，所以如果繪圖越複雜，繪圖運算也需要消耗越多運算資源和時間，換句話說，電腦效能的好壞將大大影響動畫順暢度，或許這也是畫布動畫最大的限制。

## 動畫基本步驟

產生一個畫面基本上需要以下步驟：

1. **清除畫布**
   除了不變的背景畫面，所有先前畫的圖案都要先清除，這個步驟可以透過 `clearRect()` 方法達成。
2. **儲存畫布狀態**
   若是想要每一次重新繪圖時畫布起始狀態都是原始狀態，那麼就需要先行儲存畫布原始狀態。
3. **畫出畫面**
   畫出需要畫面。
4. **復原畫布狀態**
   復原畫布狀態以備下次繪圖使用。

## 控制動畫

一般來說當程式碼執行完畢後我們才會看到繪圖結果，所以說我們無法靠執行 for 迴圈來產生動畫，我們得靠每隔一段時間繪圖來產生動畫，下面將介紹兩種作法。

### 排程更新

第一種作法是利用 {{domxref("window.setInterval()")}} 與 {{domxref("window.setTimeout()")}} 方法。

> **備註：** 針對新版瀏覽器建議採用 {{domxref("window.requestAnimationFrame()")}} 方法。

- `setInterval(function, delay)`
  - : 每隔 delay 毫秒，執行輸入 function(函數)
- `setTimeout(function, delay)`
  - : 過 delay 毫秒後，執行輸入 function(函數)
- requestAnimationFrame(callback)
  - : 告訴瀏覽器你希望執行動畫的時候，要求瀏覽器在重繪下一張畫面之前，呼叫 callback 函數來更新動畫

如果希望不要有任何的使用者互動影響，請使用 setInterval()，因為它會確實地每隔一段時間就執行程式碼。如果你想製作遊戲，我們能夠使用 keyboard 或是 mouse event 來控制動畫，並使用 setTimeout() 函數一起。藉由設定 EventListeners，我們能夠捕捉任何使用者的動作，並執行我們的動畫函數。

> **備註：** 在下面的範例,我們將使用 **`window.requestAnimationFrame()`** 方法來控制動畫，**`window.requestAnimationFrame()`** 方法為動畫提供更順暢更有效率的方式來執行,當系統準備好繪製畫面時，藉由呼叫動畫 andmation frame() 的 callback 函數。callback 通常每秒鐘執行 60 次，當執行 background tab 時，執行次數會更低，想知道更多關於動畫迴圈(animation loop)的資訊，尤其是遊戲的應用，請查看我們在 [Game development zone](/zh-TW/docs/Games) 的主題 [Anatomy of a video game](/zh-TW/docs/Games/Anatomy)。

### 從使用者輸入操作控制動畫

我們也可以從使用者輸入操作控制動畫，就像是電玩遊戲一般；像是在鍵盤上設置事件處理器 {{domxref("EventListener")}} 捕捉使用者輸入並執行對應動畫。

你可以利用我們的[次要版](/zh-TW/docs/DOM/window.setInterval#A_little_framework)或[主要版動畫框架](/zh-TW/docs/JavaScript/Timers/Daemons)。

```js
var myAnimation = new MiniDaemon(null, animateShape, 500, Infinity);
```

或

```js
var myAnimation = new Daemon(null, animateShape, 500, Infinity);
```

在後面的範例我們主要將使用 window\.setInterval()方法控制動畫，然後於本頁底部是一些使用 widnow\.setTimeout()的範例連結。

#### 太陽系動畫

本例會產生一個小型太陽系運行動畫。

```js
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  setInterval(draw, 100);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.strokeStyle = "rgba(0,153,255,0.4)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);
}
```

```html hidden
<canvas id="canvas" width="300" height="300"></canvas>
```

```js hidden
init();
```

{{EmbedLiveSample("太陽系動畫", "310", "340")}}

#### 時鐘動畫

本例會產生一個時鐘指向現在時間。

```js
function init() {
  clock();
  setInterval(clock, 1000);
}

function clock() {
  var now = new Date();
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
init();
```

{{EmbedLiveSample("時鐘動畫", "180", "200")}}

#### 循環景色

本例會產一個由左到右循環捲動[美國優勝美地國家公園](http://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg)景色，你也可以自行替換其他比畫布還大的圖片。

```js
var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = "/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg";
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function () {
  imgW = img.width * scale;
  imgH = img.height * scale;
  if (imgW > CanvasXSize) {
    x = CanvasXSize - imgW;
  } // image larger than canvas
  if (imgW > CanvasXSize) {
    clearX = imgW;
  } // image larger than canvas
  else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    clearY = imgH;
  } // image larger than canvas
  else {
    clearY = CanvasYSize;
  }
  //Get Canvas Element
  ctx = document.getElementById("canvas").getContext("2d");
  //Set Refresh Rate
  return setInterval(draw, speed);
};

function draw() {
  //Clear Canvas
  ctx.clearRect(0, 0, clearX, clearY);
  //If image is <= Canvas Size
  if (imgW <= CanvasXSize) {
    //reset, start from beginning
    if (x > CanvasXSize) {
      x = 0;
    }
    //draw aditional image
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
    }
  }
  //If image is > Canvas Size
  else {
    //reset, start from beginning
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    //draw aditional image
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  //draw image
  ctx.drawImage(img, x, y, imgW, imgH);
  //amount to move
  x += dx;
}
```

循環景色就是在下方的{{HTMLElement("canvas")}}中捲動，請注意其中的 width 和 height 和程式碼中的 CanvasXZSize 與 CanvasYSize 一樣。

```html
<canvas id="canvas" width="800" height="200"></canvas>
```

**Live sample**

{{EmbedLiveSample("循環景色", "830", "230")}}

## 其他範例

- [Gartic](http://www.gartic.net/)
  - : 多人繪圖遊戲
- [Canvascape](http://www.abrahamjoffe.com.au/ben/canvascape/)
  - : 第一人稱 3D 冒險遊戲
- [A basic ray-caster](/zh-TW/docs/Web/Guide/HTML/A_basic_ray-caster)
  - : 透過鍵盤控制動畫範例
- [canvas adventure](http://andrewwooldridge.com/canvas/canvasgame001/canvasgame002.html)
  - : 另一個透過鍵盤控制動畫範例
- [An interactive Blob](http://www.blobsallad.se/)
  - : 和 Blob 遊戲
- [Flying through a starfield](http://arapehlivanian.com/wp-content/uploads/2007/02/canvas.html)
  - : 飛越星河
- [iGrapher](http://igrapher.com/)
  - : 股票市場圖

## See also

- [JavaScript timers](/zh-TW/docs/JavaScript/Timers)
- [`setInterval` – A little framework](/zh-TW/docs/DOM/window.setInterval#A_little_framework)
- [JavaScript Daemons Management](/zh-TW/docs/JavaScript/Timers/Daemons)
- [HTMLCanvasElement](/zh-TW/docs/DOM/HTMLCanvasElement)

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Compositing", "Web/Guide/HTML/Canvas_tutorial/Optimizing_canvas")}}
