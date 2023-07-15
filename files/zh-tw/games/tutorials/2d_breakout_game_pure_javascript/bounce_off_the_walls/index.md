---
title: 讓球碰到牆壁後反彈
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

這是 [Gamedev Canvas tutorial](/zh-TW/docs/Games/Workflows/Breakout_game_from_scratch)中的第三步 你可以在以下的連結中查看原始碼[Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

很好我們現在可以讓球移動了, 但目前他會在移動到邊緣後消失, 這使我們少了點樂趣! 為了解決這個問題我們稍後會加入一些碰撞處理 ( [later](/zh-TW/docs/Games/Workflows/Breakout_game_from_scratch/Collision_detection) ) 使球可以再碰到邊緣時反彈.

## 簡單的碰撞偵測

為了偵測碰撞的發生，我們將檢查球是否接觸(相撞)牆壁，如果有碰到，我們將改變球的行進方向。

為了方便計算，我們定義一變數 `ballRadius` 代表球的半徑。在你程式碼宣告變數的地方加入以下內容:

```js
var ballRadius = 10;
```

接著更新繪製球的 `drawBall()` 函數，加入以下內容:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

## 從頂部和底部反彈

總共有四面牆壁會與球發生碰撞 — 首先處理上方的牆壁，我們在每個影格檢查球是否有接觸到 Canvas 上方壁面 —如果是的話，我們將扭轉球的運動，所以它將開始在相反的方向移動，並保持在可見邊界。記住坐標係從左上角開始，我們可以得到這樣的東西：

```js
if (y + dy < 0) {
  dy = -dy;
}
```

如果球位置的 Y 值低於零，改變 Y 軸上的運動的方向，通過設置它等於本身，扭轉。如果球是向上移動的速度為每幀的 2 個像素，現在它將移動「了」的速度為- 2 像素，這實際上等於在每幀的 2 個像素的速度向下移動。

上面的代碼將處理球反彈的頂部邊緣，所以現在讓我們想想下邊緣：

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

如果球的 Y 位置大於畫布的高度（請記住，我們計算從左上角的 Y 值，所以頂部邊緣開始在 0 和底部邊緣是在 480 像素，畫布的高度），然後通過反轉的 Y 軸運動的底部邊緣，如前。
我們可以將這兩個語句為一個節省代碼冗長：

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

如果兩個語句中的一個是真的，則反轉球的運動。

## 從左邊和右邊反彈

我們有頂部和底部邊緣覆蓋，所以讓我們想想左，右的。它實際上是非常相似的，你所要做的就是重複 X 而不是 Y 的陳述：

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

在這一點上你應該插入上面的代碼塊到 draw()功能，在關閉括號。

## 球不斷地消失在牆上！

測試你的代碼在這一點上，你會留下深刻的印象-現在我們有一個球，反彈了所有四個邊緣的畫布！然而，我們有另一個問題-當球擊中每一個牆，它下沉到它略有改變方向：

![](ball-in-wall.png)

這是因為我們計算的牆壁和球的中心的碰撞點，而我們應該做它的圓周。球應該反彈後，如果接觸牆，而不是當它已經在牆上的一半，所以讓我們調整我們的陳述有點包括。更新您添加到的最後一個代碼：

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

當球的中心與牆的邊緣之間的距離與球的半徑完全相同時，它會改變運動方向。從邊緣減去一個半徑的寬度以及添加到另一個方向給我們在碰撞檢測在中球彈回牆壁的印象。

## 比較你的程式碼

讓我們用剛剛所學的再次檢查完成的程式碼，並把玩一下：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/redj37dc/","","370")}}

> **備註：** 每次球撞到牆上時嘗試改變球的顏色為隨機的顏色。

## 下一步

我們現在已經進入了舞台，我們的球是移動和停留在遊戲板上。 在第四章中，我們將討論實現一個可控制的球拍 - 參見 [Paddle and keyboard controls](/zh-TW/docs/Games/Workflows/Breakout_game_from_scratch/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
