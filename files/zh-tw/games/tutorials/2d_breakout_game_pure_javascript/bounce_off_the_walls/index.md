---
title: 撞擊牆壁
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

這是 [Gamedev Canvas 教程](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)的**第 3 步**（共 10 步）。你可以在 [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html) 找到課後完整的原始碼。

看到我們的球在移動是很不錯的，但它很快就會從螢幕上消失，這限制了我們能夠享受的樂趣！為了解決這個問題，我們將實現一些碰撞檢測（稍後會在[這裡](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)更詳細地解釋），使球能夠從 Canvas 的四個邊緣反彈。

## 簡單的碰撞檢測

為了檢測碰撞，我們將檢查球是否碰到牆壁碰撞，如果是，我們將相應地改變其運動方向。

為了使計算更容易，我們定義一個名為 `ballRadius` 的變數，該變數將保存繪製圓的半徑並用於計算。將此添加到你的程式碼中，放在現有變數宣告的下面：

```js
const ballRadius = 10;
```

現在更新 `drawBall()` 函數內繪製球的那一行：

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### 從頂部和底部反彈

有四面牆可以讓球反彈——我們先專注於頂部。我們需要在每一幀檢查球是否碰到 Canvas 的頂邊——如果是，我們將反轉球的運動方向，使其開始向相反方向移動並保持在可見邊界內。記住坐標系統從左上角開始，我們可以得出如下結論：

```js
if (y + dy < 0) {
  dy = -dy;
}
```

如果球的位置 `y` 值小於零，則通過將其設置為自身的反向來改變 `y` 軸上的運動方向。如果球以每幀 2 像素的速度向上移動，現在它將以 -2 像素的速度向「上」移動，這實際上等於以每幀 2 像素的速度向下移動。

上面的程式碼將處理球從頂邊反彈，所以現在讓我們考慮底邊：

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

如果球的 `y` 位置大於 Canvas 的高度（記住我們從左上角計算 `y` 值，所以頂邊從 0 開始，底邊在 320 像素處，即 Canvas 的高度），則通過反轉 `y` 軸運動來使其從底邊反彈，如前所述。

我們可以將這兩句冗長的程式碼合並以減少程式碼長度：

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

如果這兩個語句中的任何一個為 `true`，則反轉球的運動。

### 從左邊和右邊反彈

我們已經覆蓋了頂邊和底邊，所以讓我們考慮左邊和右邊。實際上非常相似，你只需重複 `x` 的語句而不是 `y`：

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

此時你應該將上述程式碼塊插入 `draw()` 函數中，剛好在閉合大括號之前。

### 球一直消失在牆裡！

此時測試你的程式碼，你會感到印象深刻——現在我們有一個球可以從 Canvas 的四個邊緣反彈！然而，我們還有另一個問題——當球撞到每面牆時，它會稍微陷入牆內然後改變方向：

![天藍色的球消失在白色牆壁的頂部。](ball-in-wall.png)

這是因為我們正在計算牆壁和球心的碰撞點，而我們應該為其圓周計算。球應該在碰到牆壁後立即反彈，而不是當它已經進入牆壁一半時，所以讓我們稍微調整語句以包含這一點。更新你最後添加的程式碼：

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

當球心與牆邊的距離正好等於球的半徑時，它將改變運動方向。從一邊的寬度中減去半徑並將其加到另一邊，給我們一個適當的碰撞檢測印象——球如應該的那樣從牆壁反彈。

## 比較你的程式碼

讓我們再次檢查這部分的完成的程式碼與你所擁有的程式碼，並進行一些遊戲：

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">開始遊戲</button>
```

```css hidden
canvas {
  background: #eee;
}
button {
  display: block;
}
```

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

function startGame() {
  setInterval(draw, 10);
}

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("比較你的程式碼", 600, 360)}}

> [!NOTE]
> 嘗試在球每次撞到牆時將其顏色改為隨機顏色。

## 下一步

我們現在已經到了球既移動又保持在遊戲板上的階段。在第四章中，我們將看看如何實現可控的球拍——請參見[球拍和鍵盤控制](/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
