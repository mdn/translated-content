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

第一種作法是利用 {{domxref("Window.setInterval")}}、{{domxref("Window.setTimeout()")}} 與 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} 函數。

- {{domxref("Window.setInterval", "setInterval()")}}
  - : 每隔 `delay` 毫秒，執行輸入 `function`。
- {{domxref("setTimeout()")}}
  - : 過 `delay` 毫秒後，執行輸入 `function`。
- {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}
  - : 告訴瀏覽器你希望執行動畫的時候，要求瀏覽器在重繪下一張畫面之前，呼叫 callback 函數來更新動畫

如果希望不要有任何的使用者互動影響，請使用 `setInterval()`，因為它會確實地每隔一段時間就執行程式碼。如果你想製作遊戲，我們能夠使用 keyboard 或是 mouse event 來控制動畫，並使用 `setTimeout()` 函數一起。藉由設定 EventListeners，我們能夠捕捉任何使用者的動作，並執行我們的動畫函數。

> [!NOTE]
> 在下面的範例,我們將使用 **`window.requestAnimationFrame()`** 方法來控制動畫，**`window.requestAnimationFrame()`** 方法為動畫提供更順暢更有效率的方式來執行,當系統準備好繪製畫面時，藉由呼叫動畫 andmation frame() 的 callback 函數。callback 通常每秒鐘執行 60 次，當執行 background tab 時，執行次數會更低，想知道更多關於動畫迴圈(animation loop)的資訊，尤其是遊戲的應用，請查看我們在 [Game development zone](/zh-TW/docs/Games) 的主題 [Anatomy of a video game](/zh-TW/docs/Games/Anatomy)。

## 太陽系動畫

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

## 時鐘動畫

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

## 循環景色

本例會產一個由左到右循環捲動[美國優勝美地國家公園](https://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg)景色，你也可以自行替換其他比畫布還大的圖片。

### HTML

循環景色就是在下方的 {{HTMLElement("canvas")}} 中捲動，請注意其中的 width 和 height 和程式碼中的 `canvasXSize` 與 `canvasYSize` 一樣。

```html
<canvas id="canvas" width="800" height="200"
  >優勝美地國家公園，埃爾卡皮坦山腳下的草地</canvas
>
```

### JavaScript

```js
const img = new Image();

// 使用者變數——自訂這些變數以更改滾動的圖像、方向和速度。
img.src = "capitan_meadows_yosemite_national_park.jpg";
const canvasXSize = 800;
const canvasYSize = 200;
const speed = 30; // 越小越快
const scale = 1.05;
const y = -4.5; // 垂直偏移

// 主程式
const dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > canvasXSize) {
    // 圖像大於畫布
    x = canvasXSize - imgW;
  }

  // 檢查圖像尺寸是否大於畫布
  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  // 取得畫布上下文
  ctx = document.getElementById("canvas").getContext("2d");

  // 設定刷新率
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // 如果圖像 <= 畫布大小
  if (imgW <= canvasXSize) {
    // 重置，從頭開始
    if (x > canvasXSize) {
      x = -imgW + x;
    }

    // 繪製附加圖片1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }

    // 繪製附加圖片2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    // 圖片 > 畫布尺寸
    // 重置，從頭開始
    if (x > canvasXSize) {
      x = canvasXSize - imgW;
    }

    // 繪製附加圖片
    if (x > canvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }

  // 繪製圖片
  ctx.drawImage(img, x, y, imgW, imgH);

  // 移動量
  x += dx;
}
```

### 結果

{{EmbedLiveSample("循環景色", "830", "250")}}

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

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Compositing", "Web/Guide/HTML/Canvas_tutorial/Optimizing_canvas")}}
