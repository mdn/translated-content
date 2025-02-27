---
title: 物件建構實作
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
original_slug: Learn/JavaScript/Objects/Object_building_practice
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

我們解說完必要的 JavaScript 物件理論以及語法細節，想先幫你把根紮好。接著就透過實作範例，讓你實際建立自己有趣又多彩的 JavaScript 物件。

<table>
  <tbody>
    <tr>
      <th scope="row">必備條件：</th>
      <td>
        基礎的計算機素養、了解 HTML 與 CSS 的基本概念、熟悉 JavaScript (參閱〈<a
          href="/zh-TW/docs/Learn_web_development/Core/Scripting"
          >First steps</a
        >〉與〈<a href="/zh-TW/docs/Learn_web_development/Core/Scripting"
          >Building blocks</a
        >〉) 與 OOJS 基本概念 (參閱〈<a
          href="/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics"
          >Introduction to objects</a
        >〉)。
      </td>
    </tr>
    <tr>
      <th scope="row">要點：</th>
      <td>親手實作物件與物件導向 (OO) 技術。</td>
    </tr>
  </tbody>
</table>

## 弄一些彈跳彩球

本文將帶領你實作經典的「彈跳球」展示網頁，讓你了解物件在 JavaScript 中的用處。這些小球會在畫面上四處彈跳，而且互相碰撞時變換顏色。範例成品如下：

![](bouncing-balls.png)

此範例將透過 [Canvas API](/zh-TW/docs/Web/API/Canvas_API) 在畫面上繪製球體，[requestAnimationFrame](/zh-TW/docs/Web/API/Window/requestAnimationFrame) API 則是繪製整個動畫；而且你不需先了解此兩個 API。但我們希望在看完本文之後，能引起大家深入探究此兩個 API 的興趣。整個過程會利用某些花俏的物件，並讓你看到幾項有趣技術，像是球體從牆上回彈，並檢查球體是否互相碰撞 (也就是碰撞偵測)。

## 著手開始

先複製 [`index.html`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index.html)`、style.css`、[`main.js`](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main.js) 檔案到你的本機磁碟中。這些檔案分別具備下列：

1. 極簡的 HTML 文件，具備 1 個 {{HTMLElement("h1")}} 元素、1 個 {{HTMLElement("canvas")}} 元素可繪製彩球，以及其他元素可將 CSS 與 JavaScript 套用到 HTML 之上。
2. 一些極簡單的樣式，主要可作為 `<h1>` 的樣式風格與定位之用，並省去網頁邊緣的捲動棒或空白 (看起來更簡約)。
3. 某些 JavaScript 可用以設定 `<canvas>` 元素，另有通用函式可供我們往後使用。

指令碼第一部分就像：

```js
var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");

var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);
```

此指令碼將為 `<canvas>` 元素提供參照，接著於其上呼叫 [`getContext()`](/zh-TW/docs/Web/API/HTMLCanvasElement/getContext) 函式，藉以提供能開始繪圖的內文 (Context)。所產生的變數 (`ctx`) 也就是物件，將直接呈現 canvas 的繪圖區域，讓我們繪製 2D 圖像。

接著設定 `width` 與 `height` 共 2 個變數，也就是 canvas 元素的寬度與高度 (透過 `canvas.width` 與 `canvas.height` 屬性呈現) 即等於瀏覽器可視區的寬度與高度 (也就是網頁顯示的區域 — 可經由 {{domxref("Window.innerWidth")}} 與 {{domxref("Window.innerHeight")}} 屬性得知)。

你會看到我們在這裡串連了多個指定式，以快速設定所有變數，而且運作無虞。

剛開始的指令碼後半部如下：

```js
function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
```

此函式共有 2 組參數 (argument)，並會回傳此範圍之內的任意值。

## 在程式中設定球體的模型

我們的程式會讓一堆彩球在畫面中彈來彈去。因為這些球體的行動方式均相同，所以透過物件呈現這些彩球也合情合理。先在程式碼底部加入下列建構子：

```js
function Ball() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.velX = random(-7, 7);
  this.velY = random(-7, 7);
  this.color =
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
  this.size = random(10, 20);
}
```

這裡我們要定義某些屬性，以利彩球能在程式中動作：

- `x` 與 `y` 座標 — 每顆彩球都會先有位於畫面中的隨機水平＼垂直座標。範圍從 0 (最左上角) 到瀏覽器可視區的寬＼高度 (最右下角) 為止。
- 水平與垂直速度 (`velX` 與 `velY`) — 每顆彩球均具備隨機的速度值；在我們開始彩球動畫時，這些數值就會加上 `x`/`y` 座標值，以利在各畫格(frame)中移動彩球。
- `color` — 彩球的顏色是隨機產生。
- `size` — 各彩球大小亦為隨機，從 10 到 20 像素不等。

屬性講完了，那函式呢？程式中的彩球要實際運作才行。

### 繪製球體

先將下列 `draw()` 函式加到 `Ball()` 的 `prototype` 之中：

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

透過此函式，再呼叫我們之前定義在 2D canvas 內文(ctx)中的物件成員，就能讓球體自己在螢幕上畫出自己。此內文就像是白紙一樣，接著就用筆在紙上畫出點東西：

- 首先以 [`beginPath()`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/beginPath) 聲明我們要在紙上畫出來的形狀。
- 接著用 [`fillStyle`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/fillStyle) 定義該形狀所要呈現的顏色 — 設定為球體的 `color` 屬性。
- 再用 [`arc()`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/arc) 函式在紙上勾勒出弧形。相關參數為：

  - 弧形中心的 `x` 與 `y` 位置 — 我們指定球體的 `x` 與 `y` 屬性。
  - 弧形半徑 — 指定球體的 `size` 屬性。
  - 最後 2 項參數則指定弧形繪製時的圓圈起、終點角度。我們這裡指定 0 度與 `2 * PI` 度，這也等於半徑繞了 360 度 (你必須在半徑中指定，有點煩)。如此構成完整的圓。如果你只設定了 `1 * PI，就會只有半球體` (即 180 度)。

- 最後使用 [`fill()`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/fill) 函式，基本上是用來聲稱「完成我們以 `beginPath()` 開始的繪圖路徑，再用 `fillStyle` 中指定的色彩將之填滿」。

你已經可以開始測試自己的物件了。

1. 儲存目前的程式碼，在瀏覽器中載入此 HTML 檔案。
2. 開啟瀏覽器的 JavaScript 主控台，並在主控台開啟時重新整理網頁，讓 canvas 尺寸變更為左側較小型的可視區域。
3. 鍵入下列程式碼以建立新的球體實例：

   ```js
   var testBall = new Ball();
   ```

4. 再呼叫其成員：

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. 輸入最後一行之後，應該就能看到 canvas 上出現自己產生的球體。

### 更新球體的資料

現在可以繪製彩球了。但在讓球彈跳之前，我們必須先更新幾個函式。將下列程式碼加到 JavaScript 檔案底端，把 `update()` 函式加到 `Ball()` 的 `prototype` 之中：

```js
Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};
```

函式的前 4 個部分負責檢查球體是否碰到 canvas 邊緣。如果球體抵達邊緣，我們就反轉相對加速度的方向，讓球反方向行進。以球體向上 (正向 `velX`) 時為例，接著就會改變水平速度，球體也就反向運動。

在這 4 個情境中，我們：

- 檢查 `x` 座標是否大於 canvas 的寬度 (球體抵達右側邊緣)。
- 檢查 `x` 座標是否小於 0 (球體抵達左側邊緣)。
- 檢查 `y` 座標是否大於 canvas 的高度 (球體抵達底部邊緣)。
- 檢查 `y` 座標是否小於 0 (球體抵達頂部邊緣)。

在各情境中，因為 `x`/`y` 座標為球體的中心，所以我們把球體的 `size` 納入計算，但我們不要球體在回彈之前在半路上就跳出畫面之外。

最後 2 行則是將 `velX` 與 `velY` 值分別加入 `x＼y` 座標之中；每次只要呼叫此函式，球體就會依照應有的效果移動。

到這裡沒有問題的話，就開始弄動畫吧！

## 球體動起來

接著來玩玩吧。我們要加更多球到 canvas 中並開始動畫效果。

1. 首先要弄個地方儲存所有的彩球。將下方陣列加到現有程式碼底部即可：

   ```js
   var balls = [];
   ```

   所有可提供動畫效果的程式，一般都會採用動畫迴圈，可用以更新程式中的資訊，並接著在動畫的各個畫格上繪製產生的結果。這也是大部分遊戲或類似程式的基礎。

2. 再將下列程式碼加到現有程式碼底部：

   ```js
   function loop() {
     ctx.fillStyle = "rgba(0,0,0,0.25)";
     ctx.fillRect(0, 0, width, height);

     while (balls.length < 25) {
       var ball = new Ball();
       balls.push(ball);
     }

     for (i = 0; i < balls.length; i++) {
       balls[i].draw();
       balls[i].update();
     }

     requestAnimationFrame(loop);
   }
   ```

   我們的 `loop()` 函式可進行：

   - 設定 canvas 填滿色彩或是半透明的黑色。接著透過 `fillRect()` (共 4 個參數提供起始座標，以及繪製矩形的高度與寬度)，跨 canvas 的寬度與高度繪製整個矩型的色彩。如此可在繪製下一個畫格之前，先覆蓋前一個已存在的畫格；否則會看到許多隻長長的蛇爬來爬去。填充顏色已設定為半透明狀態：`rgba(0,0,0,0.25)` 可讓先前的畫格微微發亮，製造出球體移動時的小尾巴效果。如果將 0.25 更改為 1，就會完全消除尾巴。你可自己測試不同的數值，找出自己喜歡的效果。
   - 可對 `Ball()` 建立新的實作，接著將之 `push()` 到球體陣列的最後，且彩球數量必須少於 25 個。所以整個畫面最多顯示 25 個球。你可嘗試變更 `balls.length < 25` 中的數值，畫面中的彩球數量也會隨著變化。依你所用電腦＼瀏覽器處理效能的不同，若繪製上千個彩球就會拖慢整個動畫的速度。
   - 迴圈將巡過 `balls` 陣列中的所有彩球，並執行各個彩球的 `draw()` 與 `update()` 函式，以於畫面中逐一繪製，接著對下個畫格的位置與速度執行必要更新。
   - 再以 `requestAnimationFrame()` 函式執行過此函式 — 當此函式持續執行並傳送相同的函式名稱時，就會每秒執行此函式達特定次數，以產生流暢的動畫。接著重複執行此作業，也就是函式每次執行時均會呼叫自身 1 次，進而循環執行。

3. 最後將下列程式碼加入最底端，呼叫函式 1 次讓動畫開始運作。

   ```js
   loop();
   ```

基本就是這樣了。試著儲存並重新整理檔案，讓你的彩球開始跳動吧！

## 另增碰撞偵測

現在弄點有趣的東西，就把碰撞偵測 (Collision detection) 加進程式裡，讓彩球知道自己碰到其他球了。

1. 首先將下列函式定義加進你自己定義 `update()` 函式中 (例如 `Ball.prototype.update` 區塊)：

   ```js
   Ball.prototype.collisionDetect = function () {
     for (j = 0; j < balls.length; j++) {
       if (
         !(
           this.x === balls[j].x &&
           this.y === balls[j].y &&
           this.velX === balls[j].velX &&
           this.velY === balls[j].velY
         )
       ) {
         var dx = this.x - balls[j].x;
         var dy = this.y - balls[j].y;
         var distance = Math.sqrt(dx * dx + dy * dy);

         if (distance < this.size + balls[j].size) {
           balls[j].color = this.color =
             "rgb(" +
             random(0, 255) +
             "," +
             random(0, 255) +
             "," +
             random(0, 255) +
             ")";
         }
       }
     }
   };
   ```

   這函式有點複雜，所以現在不瞭解如何運作的也別擔心。解釋如下：

   - 對每個彩球來說，我們必須檢查是否碰撞到其他球。所以要設定另一個 `for` 迴圈以循環檢視 `balls[]` 陣列中的所有彩球。
   - 在我們的 for 迴圈中，我們立刻使用 `if` 陳述式檢查「現正透過迴圈循環檢查中」的彩球，是否即為我們目前檢查中的同一彩球。我們不需要檢查彩球是否碰撞到自己！為了達到此效果，我們檢查彩球目前的 `x`/`y` 座標與速度，是否等同於迴圈檢查的彩球。接著透過「`!`」否定檢查，所以在 if 陳述式中的程式碼，只有在彩球相異時才會執行。
   - 接著使用一般演算法檢查 2 個球體之間的碰撞。我們基本上會檢查任 2 個球體的範圍是否重疊。另將透過〈[2D 碰撞偵測](/zh-TW/docs/Games/Techniques/2D_collision_detection)〉一文進一步解釋。
   - 如果偵測到碰撞，則隨即執行內部 `if` 陳述式的程式碼。在本範例中，我們剛設定了 2 個球體的 `color` 屬性為新的隨機色彩。但當然可以更複雜點，像是讓彩球更逼真的互相反彈，但這實作起來就更複雜了。對這類的物理模擬，開發者就必須使用如 [PhysicsJS](http://wellcaffeinated.net/PhysicsJS/)、[matter.js](http://brm.io/matter-js/)、[Phaser](http://phaser.io/) 等的遊戲＼物理函式庫。

2. 你也可以在動畫的每一畫格中呼叫此一函式。在 `balls[i].update();` 這一行下方新增下列程式碼即可：

   ```js
   balls[i].collisionDetect();
   ```

3. 儲存並重新整理之後，就能看到球體在碰撞時變更其色彩了！

> [!NOTE]
> 如果你無法讓此範例順利運作，可比較我們的[最後版本](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) (另可參閱[實際執行情形](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html))。

## 摘要

希望你喜歡撰寫出隨機彩球碰撞範例，其內並包含我們前面說過的多樣物件與 OO 技術！本文應該已提供你有用的物件實作與絕佳的實際文本。

物件實體就到這裡。接著就是你要磨練自己的物件技術了！

## 參見

- [Canvas 線上教學](/zh-TW/docs/Web/API/Canvas_API/Tutorial) — 2D canvas 初學者指南
- [requestAnimationFrame()](/zh-TW/docs/Web/API/Window/requestAnimationFrame)
- [2D 碰撞偵測](/zh-TW/docs/Games/Techniques/2D_collision_detection)
- [3D 碰撞偵測](/zh-TW/docs/Games/Techniques/3D_collision_detection)
- [只使用 JavaScript 的 2D 打磚塊遊戲](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — 2D 遊戲開發初學者的絕佳線上教學
- [剖析器 (Phaser) 的 2D 打磚塊遊戲](/zh-TW/docs/Games/Tutorials/2D_breakout_game_Phaser) — 以 JavaScript 遊戲函式庫建構 2D 遊戲的基本概念

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
