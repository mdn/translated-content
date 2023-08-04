---
title: 套用樣式與顏色
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

在[繪畫圖形](/zh-TW/docs//zh-TW/docs/Web/Guide/HTML/Canvas_tutorial/Drawing_shapes)章節中，我們只用了預設的線條與填滿樣式，而在本章，我們將進一步看看所有可用的樣式選項，畫出更吸引人的圖。

## 顏色

U 截至目前為止我們只有看到繪圖環境的方法(methods)，如果我們想要設定圖形的顏色，我們有兩個屬性能用: `fillStyle`與`storkeStyle.`

- `fillStyle = color`
  - : 設定填滿圖形時用的顏色.
- `strokeStyle = color`
  - : 設定勾勒圖形時用的顏色.

其中`color`可以是 CSS{{cssxref("&lt;color&gt;")}}表示字串、漸層色物件(gradient color)或是模式物件(pattern object)，現在先看一下 CSS{\<color>}表示字串，稍後再看另外兩個項目.

預設上勾勒和填滿色是黑色(CSS 顏色值為#000000).

> **備註：** 一旦改變了 strokeStyle 的顏色值，那麼之後圖形勾勒顏色都會變成新顏色，同樣狀況一樣適用於 fillStyle.

合格的顏色值請參照 CSS3{{cssxref("&lt;color&gt;")}}規範，下面範例所標示的顏色都指向同一個顏色.

```js
// these all set the fillStyle to 'orange'

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```

> **備註：** 目前 Gecko 引擎並不支援 CSS3 全部的顏色值，例如 hsl(100%,25%,0)和 rgb(0,100%,0)就不被支援.

### `fillStyle` 範例

這裡我們利用兩個 for 迴圈來畫出一個矩形陣列，而且陣列中每一個矩形的顏色都不相同。下面程式碼透過改變 i 和 j 兩個變數來分別變換 RGB 中的紅色值和綠色值，然後為每一個矩形產生自己專屬的顏色值。透過改變 RGB 的各顏色值，我們可以產生各式各樣的調色盤，像是逐步調整顏色值，你也可以做出像 Photoshop 內建一樣的調色盤。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle =
        "rgb(" +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ",0)";
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

結果如下:

{{EmbedLiveSample("fillStyle 範例", 160, 160, "canvas_fillstyle.png")}}

### `strokeStyle` 範例

本例和前例相當類似，不同的是我們改用 arc()方法畫圓形而不是矩形、改設定 strokeStyle 變換圖形輪廓顏色。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle =
        "rgb(0," +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ")";
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

結果如下:

{{EmbedLiveSample("strokeStyle 範例", "180", "180", "canvas_strokestyle.png")}}

## 透明度

透過設定 globalAlpha 屬性或是以半透明顏色值設定 strokeStyle 與 fillStyle 屬性，除了畫不透明的圖形，我們還可以畫半透明的圖形。

- `globalAlpha = transparencyValue`
  - : 允許值介於 0.0(全透明)到 1.0(不透明)。一旦設定後，之後畫布上畫的所有圖形的不透明度都會套用此設定值。預設值為 1.0。

當我們想畫一系列相同不透明度的圖，設定 globalAlpha 值是一個方便的作法。

由 CSS3 顏色值能夠指定不透明度，我們也可以如下面一般，設定 strokeStyle 以及 fillStyle 來變更不透明度。

```js
// Assigning transparent colors to stroke and fill style

ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

rgba()函數比 rgb()函數多出一個不透明度參數，允許值介於 0.0(全透明)到 1.0(不透明).

### `globalAlpha` 範例

下面我們將在四個方格色塊背景上畫一系列半透明圓形。對於所有圓形，我們藉由設置 globalAlpha 屬性值為 0.2 使得圓形變成半透明，然後 for 迴圈裡我們逐一增加圓形繪圖半徑，最終結果看起來便像是輻射狀漸層圖案，而且圓形相互疊加在彼此之上後，又加深了重疊區域的不透明度，只要我們不斷增加圓形數量，最後圖片中央將被完全遮蓋，看不到背後的背景。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  // draw background
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 150, 150);
  ctx.fillStyle = "#FFF";

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("globalAlpha 範例", "180", "180", "canvas_globalalpha.png")}}

### `rgba()` 使用範例

這個範例類似於上面的範例，但不同的是我們改畫半透明的矩形。rgba()在使用上會多一點彈性，因為我們可以分別設置勾勒和填滿圖形的不透明度。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Draw background
  ctx.fillStyle = "rgb(255,221,0)";
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = "rgb(102,204,0)";
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = "rgb(0,153,255)";
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = "rgb(255,51,0)";
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Draw semi transparent rectangles
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = "rgba(255,255,255," + (i + 1) / 10 + ")";
    for (var j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("rgba_使用範例", "180", "180", "canvas_rgba.png")}}

## 線條樣式

有數種屬性可以讓我們設定線條樣式.

- `lineWidth = value`
  - : 設定線條寬度。
- `lineCap = type`
  - : 設定線條結尾的樣式。
- `lineJoin = type`
  - : 設定線條和線條間接合處的樣式。
- `miterLimit = value`
  - : 限制當兩條線相交時交接處最大長度；所謂交接處長度(miter length)是指線條交接處內角頂點到外角頂點的長度。

底下我們將一一示範這些屬性的用途。

### `lineWidth` 範例

此屬性決定線條寬度，必須為正數，預設值為 1.0 單位。

線條寬度的起算點是從繪圖路徑中央開始往兩旁各延伸一半設定寬度，由於畫布座標不直接對應到像素(pixel)，所以要比較小心設定好取得清晰的直線。

由下方例子可以明顯看到，畫布上有 10 條直線，由左至右，從最小的 1.0 單位寬開始逐漸加寬，請注意奇數寬度直線會因為繪圖路徑位置關係而比較模糊。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  for (var i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("lineWidth 範例", "180", "180", "canvas_linewidth.png")}}

為了畫出清晰的直線，我們需要了解繪圖路徑是如何產生；如下方圖示，網格代表畫布座標軸，網格所框出的方格則代表螢幕上的像素，第一張圖片填滿了座標(2,1)到(5,5)的紅色區域，而這個紅色區域的邊際正好符合像素間的邊際，所以會產生出清晰的影像。

![](canvas-grid.png)

第二張圖片中，有一條寬 1.0 單位的直線從座標(3,1)到(3,5)被畫在畫布上，不過由於線條寬度的起算點是從繪圖路徑中央開始往兩旁各延伸一半設定寬度，所以當勾勒線條時，繪圖路徑兩旁的像素格只有一半會被填滿暗藍色，至於另外一半則會經由計算填入近似色(淡藍色)，結果就是整格像素並非全部填入相同的暗藍色，進而產生出邊緣較為模糊的線條，上面程式碼範例中的奇數寬度直線就是因此而產生不清晰的線條。

為了避免劃出邊緣模糊直線，我們必須精準設定繪圖路徑位置，就本範例而言，如果我們的直線繪圖路徑是從座標(3.5, 1)到(3.5, 5)的話(如第三張圖)，那麼 1.0 單位寬的直線將剛好填滿像素格，所以我們將可以畫出清晰的直線。

> **備註：** 請注意本範例的 Y 軸座標都是整數點，若非如此，一樣會導致線條端點的像素格無法剛好被填滿的現象，而且同時最後產生的結果也會被 lineCap 給影響；倘若 lineCap 值為預設 butt 時，我們會需要為奇數寬度直線計算一下非整數的座標點，倘若 lineCap 樣式為 square，那麼線段端點的像素格將自動被完整填滿。還有一點需要注意，只要繪圖路徑被 closePath()函數閉合起來，這樣便沒有了線條端點，所有的線條端點都會依據 lineJoin 樣式全部前後互相連接起來，這會自動延伸端點邊緣到線段接合處，如果此時接合端點是水平或垂直的話，位於中央的像素格將會被完整填滿。後面的說明會介紹 lineCap 和 lineJoin 樣式。

至於本例中偶數寬度的直線，為了避免模糊，繪圖路徑最好是落在整數座標點上。

雖然處裡 2D 繪圖縮放有些麻煩，但只要仔細計算像素格和繪圖路徑位置，縱使進行圖像縮放或變形，圖像輸出還是可以保持正確。一條寬 1.0 單位的直線，只要位置計算正確，放大兩倍後會變成一條 2 個像素寬的清晰直線，而且還是會保持正確位置。

### `lineCap` 範例

這個屬性決定線條端點的樣式，總共有三種樣式可選:

![](canvas_linecap.png)

- `butt`
  - : 線條端點樣式為方形
- `round`
  - : 線條端點樣式為圓形
- `square`
  - : 增加寬同線條寬度、高線條寬度一半的的方塊於線條端點

下面程式碼會畫出三條線，每條線的 lineCap 值皆不同。然後為了看清差異點，我們加上了兩條淡藍色的輔助線，線條的繪圖起始點和終點都剛好落在輔助線上。

最左邊的線條其 lineCap 為 butt，不難看出它完全介於輔助線之間；第二條線其 lineCap 為 round，端點樣式為半徑等於線條寬度一半的半圓；最右邊的線條其 lineCap 為 square，端點樣式為寬同線條寬度、高線條寬度一半的的方塊。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var lineCap = ["butt", "round", "square"];

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // Draw lines
  ctx.strokeStyle = "black";
  for (var i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("lineCap 範例", "180", "180", "canvas_linecap.png")}}

### `lineJoin` 範例

lineJoin 屬性決定兩個連接區端(如線條、弧形或曲線)如何連接(對於長度為零，亦即終點和控制點為同一點的圖形無效)。

lineJoin 屬性共有三個屬性值如下，其中 miter 為預設值，請注意一點若是兩個連接區段的繪圖方向一致，那代表不會有連接處，所以測定是無效的。

![](canvas_linejoin.png)

- `round`
  - : 代表圓弧型連接樣式。
- `bevel`
  - : 代表斜面型連接樣式。在連接區段的共同終點處填滿一個三角形區域，將原本的外接角處形成一個切面。
- `miter`
  - : 代表斜交型連接樣式。向外延伸連結區段外緣直到相交於一點，然後形成菱形區域，而 miterLimit 屬性會影響 miter 屬性。

下方程式碼和圖形輸出展示了 lineJoin 在不同屬性值下呈現的不同結果

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var lineJoin = ["round", "bevel", "miter"];
  ctx.lineWidth = 10;
  for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("lineJoin 範例", "180", "180", "canvas_linejoin.png")}}

### `miterLimit` 屬性

前面範例顯示出，當 lineJoin 值為 miter 時，兩條線的外緣會延伸相交，所以，當這兩條相交線的相交角度越小的話，他們的延伸交會點就會越遠離內緣連接點，而且隨著角度變小，距離呈指數型增長。

miterLimit 會限制延伸交會點最遠可以離內緣連接點到多遠，當延伸交會點的落點超出這個範圍，那麼便以斜面(bevel)作為交接樣式。請注意，最大 miter 長度為線寬乘於 miterLimit 值，所以 miterLimit 可以獨立於目前顯示縮放尺寸或其他變形設定。

miterLimit 預設值為 10.0。

更精確來說，miter 限制是指延伸長度(在 HTML 畫布上，這個長度是外緣相交角到連接區段的共同繪圖路經終點)相對於一半線寬的最大允許比率；也等同於，外緣距內緣相交點之距離相對於線寬的的最大允許比率；相當於，連接區最小內緣角的一半角度的餘割(cosecant)值, 小於此值則便以斜面(bevel)作為交接樣式:

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- 10.0 的預設 miterLimit 值會移除任何角度小於 11 度的相接線段的 miter 交接。
- miter 限制值如果等於根號 2(約 1.4142136)會移除銳角的 miter 交接，只有直角或鈍角的不會被移除。
- miter 限制值如果等於 1.0 會移除所有的 miter 交接。
- 小於 1.0 不是合法的限制值。

下面是一個範例，其中藍線標示出各個線條繪圖路徑的起始點與終點。

倘若設定範例程式碼中的 miterLimit 低於 4.2，所有的 miter 交接都會被移除，取而代之的是出現在藍線附近的 bevel 交接；倘若設定 miterLimit 大於 10，那麼大部分的 miter 交接都會出現，而且你會發現，由左到右，miter 長度逐漸縮短，這是由於線條相交角度逐漸加大之故；倘若設定中間值，那麼左邊會出現 bevel 交接，右邊會出現 miter 交接。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, 150, 150);

  // Draw guides
  ctx.strokeStyle = "#09f";
  ctx.lineWidth = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // Set line styles
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 10;

  // check input
  if (document.getElementById("miterLimit").value.match(/\d+(\.\d+)?/)) {
    ctx.miterLimit = parseFloat(document.getElementById("miterLimit").value);
  } else {
    alert("Value must be a positive number");
  }

  // Draw lines
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (i = 0; i < 24; i++) {
    var dy = i % 2 == 0 ? 25 : -25;
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}
```

```html hidden
<table>
  <tr>
    <td><canvas id="canvas" width="150" height="150"></canvas></td>
    <td>
      Change the <code>miterLimit</code> by entering a new value below and
      clicking the redraw button.<br /><br />
      <form onsubmit="return draw();">
        <label>Miter limit</label>
        <input type="text" size="3" id="miterLimit" />
        <input type="submit" value="Redraw" />
      </form>
    </td>
  </tr>
</table>
```

```js hidden
document.getElementById("miterLimit").value = document
  .getElementById("canvas")
  .getContext("2d").miterLimit;
draw();
```

{{EmbedLiveSample("miterLimit 屬性", "400", "180", "canvas_miterlimit.png")}}

## 漸層

如同其他繪圖軟體可以畫出線性和放射狀的漸層圖案，透過設定 fillStyle 和 strokeStyle 屬性為 canvasGradient 漸層物件，我們也可以在 canvas 上做到一樣的效果。要創造漸層物件，可以使用下面的方法:

- `createLinearGradient(x1, y1, x2, y2)`
  - : 產生一個線性漸層物件，其漸層起始點為(x1, y1)、終點為(x2, y2)。
- `createRadialGradient(x1, y1, r1, x2, y2, r2)`
  - : 產生一個放射狀漸層物件，第一個圓之圓心落在(x1, y1)、半徑為 r1，第一個圓之圓心落在(x2, y2)、半徑為 r2。

例如:

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

一旦產生了 canvasGradient 漸層物件，我們用 addColorStop()方法可以添加顏色上去。

- `gradient.addColorStop(position, color)`
  - : 於 gradient 漸層物件建立一個顏色點，其中 color 是 CSS{{cssxref("&lt;color&gt;")}}的字串表示，而 position 介於 0.0 到 1.0 之間，定義了該顏色在漸層中的相對位置。呼叫這個方法會指定當進行到設定的位置時，漸層需要完全轉變成設定的顏色。

我們可以按照需要設定無數個顏色點，下面是一個簡單的由白到黑的簡單漸層範例程式碼。

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");
```

### `createLinearGradient` 範例

本範例中，我們將建立兩種漸層，如範例所示，strokeStyle 和 fillSyle 屬性都可以接受 canvasGradient 物件作為屬性值。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, "#00ABEB");
  lingrad.addColorStop(0.5, "#fff");
  lingrad.addColorStop(0.5, "#26C000");
  lingrad.addColorStop(1, "#fff");

  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, "#000");
  lingrad2.addColorStop(1, "rgba(0,0,0,0)");

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // draw shapes
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

第一個漸層為背景漸層，範例中我們在一個位置上指定了兩種顏色(白色到綠色)，這樣做會產生非常突然的顏色轉換，一般來說，不管如何設定顏色點順序都沒關係，然而就這個例子而言，這種作法太過強烈了，但是如果這是你想要的顏色漸層順序，那其實也是可以。

第二個漸層起始位置(position 0.0)的顏色並沒有被指定，所以下一個漸層顏色會自動被設為起始位置顏色，因此即使我們沒有指定漸層起始位置顏色也沒有關係，就像本範例自動會設定起始位置的顏色等於位置 0.5 的黑色。

{{EmbedLiveSample("createLinearGradient 範例", "180", "180", "canvas_lineargradient.png")}}

### `createRadialGradient` 範例

這邊我們定義了四種放射狀漸層，相較於一般在 Photoshop 看到的「經典」放射狀漸層圖案(漸層從一個圖案中心點向外呈圓心狀延伸)，因為我們可以控制漸層起始和終止點，我們可以做到更好的效果。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // Create gradients
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, "#A7D30C");
  radgrad.addColorStop(0.9, "#019F62");
  radgrad.addColorStop(1, "rgba(1,159,98,0)");

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, "#FF5F98");
  radgrad2.addColorStop(0.75, "#FF0188");
  radgrad2.addColorStop(1, "rgba(255,1,136,0)");

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, "#00C9FF");
  radgrad3.addColorStop(0.8, "#00B5E2");
  radgrad3.addColorStop(1, "rgba(0,201,255,0)");

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, "#F4F201");
  radgrad4.addColorStop(0.8, "#E4C700");
  radgrad4.addColorStop(1, "rgba(228,199,0,0)");

  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

程式碼範例中，為了營造出 3D 效果，我們讓起始點和終止點位於不同位置，請注意，最好不要讓內外圈相重疊，以避免難以預測的奇怪效果。

每一個漸層圖案最後一個漸層色都是全透明的，如果希望倒數第二個漸層色能夠平順地轉換到這個最後一個漸層色，那麼兩者應該設定一樣的顏色值，像是程式碼範例中的漸層色 #019F62 其實就等於 rgba(1,159,98,1)。

{{EmbedLiveSample("createRadialGradient 範例", "180", "180", "canvas_radialgradient.png")}}

## 樣式(Patterns)

先前的範例中，我們都是藉由迴圈來重複產生影像樣式，不過其實有一條更簡單的方法，那就是呼叫 createPattern 方法。

- `createPattern(image, type)`
  - : 呼叫 createPattern()會產一個畫布樣式物件，然後回傳出來。
    其中 image 是[CanvasImageSource](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#image-sources-for-2d-rendering-contexts)類別物件(像是{{domxref("HTMLImageElement")}},、\<canvas>元素、{{HTMLElement("video")}} 元素等)

Type 是一串字串，定義了如何產生樣式，允許的值有:

- `repeat`
  - : 沿垂直與水平方向重複排列影像
- `repeat-x`
  - : 只沿水平方向重複排列影像
- `repeat-y`
  - : 只沿垂直方向重複排列影像
- `no-repeat`
  - : 不重複排列影像，只使用一次

> **備註：** Firefox 現在只支援 repeat，所以其他值都是無效的

> **備註：** 傳入尺寸為 0x0 像素的畫布會引起錯誤

利用 createPattern()的方法和前面利用漸層的方法十分類似，我們呼叫 createPattern()產生{{domxref("CanvasPattern")}}物件，然後將{CanvasPattern}物件設成 fillStyle 或 strokeStyle 的屬性值，例如:

```js
var img = new Image();
img.src = "someimage.png";
var ptrn = ctx.createPattern(img, "repeat");
```

> **備註：** 不像 drawImage()方法，呼叫 createPattern()方法前影像必須要先載入完成，否則可能圖像的程生會有問題。

### `createPattern` 範例

這個範例中我們把 fillStyle 屬性值存為樣式物件，比較值得注意的是影像 onload 事件處理器，這是為了確保影像載入完成後再進行。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  // create new image object to use as pattern
  var img = new Image();
  img.src = "/files/222/Canvas_createpattern.png";
  img.onload = function () {
    // create pattern
    var ptrn = ctx.createPattern(img, "repeat");
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  };
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

結果如下 :

{{EmbedLiveSample("createPattern 範例", "180", "180", "canvas_createpattern.png")}}

## 陰影

要產生陰影只需要四個屬性:

- `shadowOffsetX = float`
  - : 代表陰影從物件延伸出來的水平距離，預設為 0，不受變形矩陣影響。
- `shadowOffsetY = float`
  - : 代表陰影從物件延伸出來的垂直距離，預設為 0，不受變形矩陣影響。
- `shadowBlur = float`
  - : 代表陰影模糊大小範圍，預設為 0，不受變形矩陣影響，不等同於像素值。
- `shadowColor = {{cssxref("&lt;color&gt;")}}`
  - : CSS 顏色值，代表陰影顏色，預設為全透明。

`shadowOffsetX和shadowOffsetY會決定陰影延伸大小，若是為正值，則陰影會往右(沿X軸)和往下(沿Y軸)延伸，若是為負值，則會往正值相反方向延伸。`

> **備註：** 基於 HTML5 提議規格變更，從 開始，陰影只會在 source-over 的[構圖排列](/zh-TW/docs/Web/Guide/HTML/Canvas_tutorial/Compositing)下產生

### 文字陰影範例

本程式碼範例會產生一串帶有陰影的文字。

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```

```html hidden
<canvas id="canvas" width="150" height="80"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("文字陰影範例", "180", "100", "shadowed-string.png")}}

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Using_images", "Web/Guide/HTML/Canvas_tutorial/Transformations")}}
