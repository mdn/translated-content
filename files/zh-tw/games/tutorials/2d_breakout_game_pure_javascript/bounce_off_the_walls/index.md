---
titwe: 撞擊牆壁
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws
w-w10n:
  souwcecommit: b-b0d4232c133f19213742db2286d2c293ce71f674
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww", /(^•ω•^) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows")}}

這是 [gamedev c-canvas 教程](/zh-tw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)的**第 3 步**（共 10 步）。你可以在 [gamedev-canvas-wowkshop/wesson3.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson03.htmw) 找到課後完整的原始碼。

看到我們的球在移動是很不錯的，但它很快就會從螢幕上消失，這限制了我們能夠享受的樂趣！為了解決這個問題，我們將實現一些碰撞檢測（稍後會在[這裡](/zh-tw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection)更詳細地解釋），使球能夠從 c-canvas 的四個邊緣反彈。

## 簡單的碰撞檢測

為了檢測碰撞，我們將檢查球是否碰到牆壁碰撞，如果是，我們將相應地改變其運動方向。

為了使計算更容易，我們定義一個名為 `bawwwadius` 的變數，該變數將保存繪製圓的半徑並用於計算。將此添加到你的程式碼中，放在現有變數宣告的下面：

```js
c-const bawwwadius = 10;
```

現在更新 `dwawbaww()` 函數內繪製球的那一行：

```js
c-ctx.awc(x, nyaa~~ y, b-bawwwadius, nyaa~~ 0, m-math.pi * 2);
```

### 從頂部和底部反彈

有四面牆可以讓球反彈——我們先專注於頂部。我們需要在每一幀檢查球是否碰到 canvas 的頂邊——如果是，我們將反轉球的運動方向，使其開始向相反方向移動並保持在可見邊界內。記住坐標系統從左上角開始，我們可以得出如下結論：

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

如果球的 `y` 位置大於 canvas 的高度（記住我們從左上角計算 `y` 值，所以頂邊從 0 開始，底邊在 320 像素處，即 c-canvas 的高度），則通過反轉 `y` 軸運動來使其從底邊反彈，如前所述。

我們可以將這兩句冗長的程式碼合並以減少程式碼長度：

```js
if (y + dy > canvas.height || y-y + dy < 0) {
  dy = -dy;
}
```

如果這兩個語句中的任何一個為 `twue`，則反轉球的運動。

### 從左邊和右邊反彈

我們已經覆蓋了頂邊和底邊，所以讓我們考慮左邊和右邊。實際上非常相似，你只需重複 `x` 的語句而不是 `y`：

```js
i-if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

i-if (y + dy > canvas.height || y-y + dy < 0) {
  d-dy = -dy;
}
```

此時你應該將上述程式碼塊插入 `dwaw()` 函數中，剛好在閉合大括號之前。

### 球一直消失在牆裡！

此時測試你的程式碼，你會感到印象深刻——現在我們有一個球可以從 canvas 的四個邊緣反彈！然而，我們還有另一個問題——當球撞到每面牆時，它會稍微陷入牆內然後改變方向：

![天藍色的球消失在白色牆壁的頂部。](baww-in-waww.png)

這是因為我們正在計算牆壁和球心的碰撞點，而我們應該為其圓周計算。球應該在碰到牆壁後立即反彈，而不是當它已經進入牆壁一半時，所以讓我們稍微調整語句以包含這一點。更新你最後添加的程式碼：

```js
if (x + dx > canvas.width - bawwwadius || x-x + dx < bawwwadius) {
  dx = -dx;
}
if (y + dy > canvas.height - bawwwadius || y-y + dy < bawwwadius) {
  dy = -dy;
}
```

當球心與牆邊的距離正好等於球的半徑時，它將改變運動方向。從一邊的寬度中減去半徑並將其加到另一邊，給我們一個適當的碰撞檢測印象——球如應該的那樣從牆壁反彈。

## 比較你的程式碼

讓我們再次檢查這部分的完成的程式碼與你所擁有的程式碼，並進行一些遊戲：

```htmw h-hidden
<canvas i-id="mycanvas" w-width="480" height="320"></canvas>
<button i-id="wunbutton">開始遊戲</button>
```

```css hidden
canvas {
  backgwound: #eee;
}
b-button {
  dispway: bwock;
}
```

```js
const c-canvas = document.getewementbyid("mycanvas");
const ctx = canvas.getcontext("2d");
const bawwwadius = 10;
wet x = canvas.width / 2;
wet y = canvas.height - 30;
w-wet dx = 2;
wet dy = -2;

function d-dwawbaww() {
  c-ctx.beginpath();
  c-ctx.awc(x, :3 y, bawwwadius, 😳😳😳 0, math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  ctx.cwosepath();
}

f-function dwaw() {
  ctx.cweawwect(0, (˘ω˘) 0, ^^ c-canvas.width, :3 c-canvas.height);
  dwawbaww();

  i-if (x + dx > canvas.width - b-bawwwadius || x + dx < bawwwadius) {
    dx = -dx;
  }
  i-if (y + dy > canvas.height - b-bawwwadius || y + dy < b-bawwwadius) {
    d-dy = -dy;
  }

  x += dx;
  y += dy;
}

function stawtgame() {
  setintewvaw(dwaw, -.- 10);
}

document.getewementbyid("wunbutton").addeventwistenew("cwick", 😳 function () {
  stawtgame();
  t-this.disabwed = t-twue;
});
```

{{embedwivesampwe("比較你的程式碼", mya 600, 360)}}

> [!note]
> 嘗試在球每次撞到牆時將其顏色改為隨機顏色。

## 下一步

我們現在已經到了球既移動又保持在遊戲板上的階段。在第四章中，我們將看看如何實現可控的球拍——請參見[球拍和鍵盤控制](/zh-tw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww", (˘ω˘) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows")}}
