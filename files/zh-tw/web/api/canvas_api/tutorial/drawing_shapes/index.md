---
title: 繪製圖形
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

網格(Grid)

![](canvas_default_grid.png)在開始繪圖前，我們必須先了解畫布 (canvas) 網格，或著是說座標空間。在前一頁教學中的 HTML 範本有一個寬 150 pixels (像素)、高 150 pixels 的畫布。如右圖，你在畫布預設網格上繪圖，網格上 1 單位相當於畫布上 1 pixel，網格的原點 (座標 (0, 0) ) 坐落於左上角，所有元素定位皆相對於此左上角原點，所以藍色方塊的位置為從左往右推 x pixels、從上往下推 y pixels (亦即座標 (x, y) )。現在我們先專注在預設設定上，之後我們會看到如何轉換原點位置、旋轉網格以及縮放網格。

## 畫矩形

不同於[SVG](/zh-TW/docs/SVG)，{{HTMLElement("canvas")}}只支援一種原始圖形，矩形。所有的圖形都必須由一或多個繪圖路徑構成，而我們正好有一些繪圖路徑函數可以讓我們畫出複雜的圖形。

首先來看看矩形，共有三個矩形繪圖函數:

- `fillRect(x, y, width, height)`
  - : 畫出一個填滿的矩形。
- `strokeRect(x, y, width, height)`
  - : 畫出一個矩形的邊框
- `clearRect(x, y, width, height)`
  - : 清除指定矩形區域內的內容，使其變為全透明。

這三個函數都接受一樣的參數: x, y 代表從原點出發的座標位置，width, height 代表矩形的寬高。

### 矩形範例

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

本例結果如下:

{{EmbedLiveSample("矩形範例", 160, 160)}}

fillRect()函數畫出一個寬高都 100 pixels 的矩形，clearRect()函數清除中央 60 x 60 pixels 大的正方形區域，接著 strokeRect()在被清除區域內畫上一個 50 x 50 pixels 的矩形邊框。

之後我們會看到另外兩種代替 clearRect()的方法，還有如何改變圖形顏色與筆畫樣式。

不像之後會看到的路徑繪圖函數，這三個函數會立即在畫布上畫出矩形。

## 路徑繪製

使用路徑 (path) 來畫圖形需要多一點步驟，一開始先產生路徑，然後用繪圖指令畫出路徑，然後再結束路徑，一旦路徑產生後便可以用畫筆或填滿方式來渲染生成，這裡是一些可用函數:

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}
  - : 產生一個新路徑，產生後再使用繪圖指令來設定路徑。
- {{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}
  - : 閉合路徑好讓新的繪圖指令來設定路徑。
- [路徑 API](/zh-TW/docs/Web/API/CanvasRenderingContext2D#Paths)
  - : 路徑 API，這些 API 便是繪圖指令
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}
  - : 畫出圖形的邊框。
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}
  - : 填滿路徑內容區域來產生圖形。

第一步呼叫 beginPath() 產生一個路徑，表面下，路徑會被存在一個次路徑 (sub-path) 清單中，例如直線、曲線等，這些次路徑集合起來就形成一塊圖形。每一次呼叫這個方法，次路徑清單就會被重設，然後我們便能夠畫另一個新圖形。

> [!NOTE]
> 當目前路徑為空(例如接著呼叫 beginPath()完後)或是在一個新畫布上，不論為何，第一個路徑繪圖指令總是 moveTo()；因為每當重設路徑後，你幾乎都會需要設定繪圖起始點。

第二步是呼叫各式方法來實際設定繪圖路徑，稍後我們將會介紹這部分。

第三步，也是非必要的一步，就是呼叫 closePath()。這個方法會在現在所在點到起始點間畫一條直線以閉合圖形，如果圖形已經閉合或是只含一個點，這個方法不會有任何效果。

> [!NOTE]
> 當呼叫 fill()，任何開放的圖形都會自動閉合，所以不需要再呼叫 closePath()，但是 stroke()並非如此。

### 畫一個三角形

這是一個畫出三角形的程式碼範例。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

結果如下:

{{EmbedLiveSample("畫一個三角形", 110, 110)}}

### 移動畫筆

moveTo()是一個很有用的函數，moveTo()不會畫任何圖形，但卻是上述路徑清單的一部分，這大概有點像是把筆從紙上一點提起來，然後放到另一個點。

- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}
  - : 移動畫筆到指定的(x, y)座標點

當初始化畫布或是呼叫 beginPath()，通常會想要使用 moveTo()來指定起始點，我們可以用 moveTo()畫不連結的路徑，看一下笑臉圖範例，圖中紅線即為使用到 moveTo()的位置。

你可以拿下面的程式碼，放進先前的 draw()函數，自己試試看效果。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
  }
}
```

結果如下:

{{EmbedLiveSample("移動畫筆", 160, 160)}}

移除 moveTo() 便可以看到線條連結起來。

> [!NOTE]
> 有關 arc()，請參照下方[弧形](#弧形)。

### 線條

用 lineTo() 方法畫直線。

- {{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}
  - : 從目前繪圖點畫一條直線到指定的(x, y)座標點。

本方法接受 x, y 參數作為線條結束點的座標位置，至於起始點則視前一個繪圖路徑，由前一個繪圖路徑的結束點作為起始點，當然，起始點也可以用 moveTo()方法來變更。

下面畫兩個三角形，一個填滿，一個空心。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

從呼叫 beginPath()起始一個新圖形路徑，然後用 moveTo()移到我們想要的起始點，然後再畫兩條線形成三角形的兩邊。

{{EmbedLiveSample("線條", 160, 160)}}

我們可以看到填滿(fill)三角形和勾勒(stroke)三角形的區別；當填滿時，圖形會自動閉合，不過勾勒則不會，所以如果沒有呼叫 closePaht()的話，只會畫出兩條線而非三角形。

### 弧形

用 arc()方法來畫弧形或圓形。雖然也可以用 arcTo()，但這個方法比較不可靠，所以這裡我們不討論 arcTo()。

- {{domxref("CanvasRenderingContext2D.arc", "arc(x, y, radius, startAngle, endAngle, anticlockwise)")}}
  - : 畫一個弧形

本方法接受五個參數: x, y 代表圓心座標點，radius 代表半徑，startAngle, endAngle 分別代表沿著弧形曲線上的起始點與結束點的弧度，弧度測量是相對於 x 軸，anticlockwise 為 true 代表逆時針作圖、false 代表順時針作圖。

> [!NOTE]
> arc()方法用的是弧度(radians)而非角度(degrees)，如果要在弧度與角度間換算，可以利用以下 javascript 程式碼: radians = (Math.PI/180) \* degrees.

以下例子比較複雜，它會畫出 12 個不同的弧形。

兩個 for 迴圈走一遍弧形圖列的列跟行，每一個弧形由呼叫 beginPath()開始新的繪圖路徑，為了清楚，我們在程式範例中用變數儲存參數，你不一定要這麼做。

x, y 座標點的部分應該相當淺顯，radius 和 startAngle 是定值，endAngle 從 180 度(半圓)開始，然後每一行增加 90 度，最後一行便會形成一個完整的圓。

第 1, 3 列的 anticlockwise 為 false，所以會順時針作圖，2, 4 列的 anticlockwise 為 true，所以會逆時針作圖。最後的 if 決定下半部是用填滿圖形，上半部是勾勒圖形。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x coordinate
        var y = 25 + i * 50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```

{{EmbedLiveSample("弧形", 160, 210)}}

### 貝茲曲線與二次曲線

二次與三次[貝茲曲線](https://zh.wikipedia.org/wiki/貝茲曲線)是另一種可用來構成複雜有機圖形的路徑。

- {{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}
  - : 從目前起始點畫一條二次貝茲曲線到 x, y 指定的終點，控制點由 cp1x, cp1y 指定。
- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}
  - : 從目前起始點畫一條三次貝茲曲線到 x, y 指定的終點，控制點由(cp1x, cp1y)和(cp2x, cp2y)指定。

![](canvas_curves.png)二次和三次的差別可以從右圖看出；貝茲曲線的起始和終點以藍點標示，其中二次貝茲曲線只有一個控制點(如紅點標示)而三次貝茲曲線有兩個控制點。

二次和三次貝茲曲線都用 x, y 參數定義終點座標，然後用 cp1x, xp1y 定義第一個控制點座標、cp2x, xp2y 定義第二個控制點座標。

用二次和三次貝茲曲線作圖相當具有挑戰性，因為不像使用 Adobe illustrator 的向量繪圖軟體，我們在繪圖時無法即時看到繪圖狀況，所以畫複雜的圖形十分困難。下面的範例我們畫了一些圖形，如果你有時間與耐心，可以畫出更複雜的圖形。

#### 二次貝茲曲線

本例用了數個二次貝茲曲線畫了一個會話框。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```

{{EmbedLiveSample("二次貝茲曲線", 160, 160)}}

#### 三次貝茲曲線

這個範例畫了一個愛心。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```

{{EmbedLiveSample("三次貝茲曲線", 160, 160)}}

### 矩形

除了在{畫矩形}段落中提到的三個方法，還有 rect()方法能夠在畫布上畫矩形；rect()方法會在目前路徑下加入一個矩形繪圖路徑。

- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "rect(x, y, width, height)")}}
  - : 畫一個左上角位於(x, y)、寬 width、高 height 的矩形。

呼叫這個方法，moveTo()方法會以(0, 0)參數被自動呼叫，所以目前的下筆點跟者自動被設為預設座標。

### 多樣組合

截至目前為止，我們都只用一種路徑函數在各個範例裡作圖，不過，其實繪圖時並沒有任何使用數量或種類上的路徑函數限制，所以最後我們來試著組合各樣路徑繪圖函數來畫一些十分有名的遊戲角色。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.stroke();
}
```

結果如下:

{{EmbedLiveSample("多樣組合", 160, 160)}}

畫出這樣的圖其實沒有想像中的困難，所以我們就不再描述細節了，其中比較需要注意的是，我們在繪圖環境上用了 fillStyle 屬性以及一個自定義的效用函數(roundedRect())，利用效用函數來執行時常重複的繪圖工作可以幫忙減少程式碼數量與複雜度。

稍後我們會更進一步介紹 fillStyle 屬性，這個範例我們所做是的透過 fillStyle 屬性來改變路徑填滿色為白色，然後再改回預設黑色，來變換填滿顏色，。

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Basic_usage", "Web/Guide/HTML/Canvas_tutorial/Using_images")}}

## Path2D objects

如同前面的範例，canvas 上常常會畫上一連串的繪圖路徑，為了簡化程式碼還有改善效能，我們可以利用 {{domxref("Path2D")}} 物件 (目前在較先進的瀏覽器上已經有提供了)。Path2D 讓我們可以快取和記錄繪圖指令，方便快速重複地繪圖，底下我就來看看如何使用 Path2D :

{{domxref("Path2D.Path2D", "Path2D()")}}

Path2D 的建構子，可接受的參數有無參數、另一個 Path2D 物件、 字元表式的 [SVG path](/zh-TW/docs/Web/SVG/Tutorial/Paths):

```js
new Path2D(); // 不傳入參數會回傳一個空的 Path2D 物件
new Path2D(path); // 複製傳入的 Path2D 物件，然後以之建立 Path2D 物件
new Path2D(d); // 以傳入的 SVG 路徑建立 Path2D 物件
```

所有已知的 [路徑 API](/zh-TW/docs/Web/API/CanvasRenderingContext2D#Paths)，如 rect, arc 等等，都可以在 Path2D 上找到。

Path2D 物件還可以加入其他 Path2D 物件，這讓我們可以很方便的組合多個物件使用。

{{domxref("Path2D.addPath", "Path2D.addPath(path [, transform])")}}

addPath 增加一個 Path2D 物件，其中的非必要參數是變形矩陣。

### Path2D example

這個例子用 Path2D 物件將矩形和圓形的繪圖路徑存起來，以供之後使用。而配合新的 Path2D API，有一些繪圖方法更接受傳入 Path2D 作為繪圖路徑使用，例如下方本例所用到的 stroke 和 fill。

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```

{{EmbedLiveSample("Path2D_example", 130, 110)}}

### 使用向量路徑 (SVG paths)

另一個強而有力的特色是在 SVG 和 Canvas 中我們都可以使用 SVG path。

下面的路徑會移到座標點 (10, 10) (M10, 10)，然後水平右移 80 點 (h 80)，垂至下移 80 點 (v 80) 水平左移 80 點 (h -80) 最後回到起始點 (z)，請到[`Path2D` 建構子頁面](/zh-TW/docs/Web/API/Path2D.Path2D#Using_SVG_paths)看繪圖範例結果。

```js
var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
