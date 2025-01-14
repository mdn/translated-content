---
title: 為彈跳彩球添增其他功能
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
original_slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

在本文中，你將繼續使用前一篇文章的彈跳彩球展示程式，另外加入幾項有趣的新功能。

<table>
  <tbody>
    <tr>
      <th scope="row">必備條件：</th>
      <td>在開始本文所提的實作之前，應先看過先前的相關文章。</td>
    </tr>
    <tr>
      <th scope="row">要點：</th>
      <td>測試 JavaScript 物件與 OO 架構的完整性。</td>
    </tr>
  </tbody>
</table>

## 開始

在開始之前，請先複製先前文章所提供的 [index-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index-finished.html)、[style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css)、[main-finished.js](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) 等檔案，儲存於本端磁碟的新資料夾中。

> [!NOTE]
> 你也可透過如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 等網站進行此一實作。你可將 HTML、CSS、JavaScript 貼入相關線上編輯器之一。如果你所用的線上編輯器並未提供獨立的 JavaScript/CSS 面板，則可將之放入 HTML 頁面內的行內 `<script>`/`<style>` 元素中。

## 專案簡介

彈跳彩球很有趣，但接著我們要加入使用者可控制的「邪惡圈」，在碰到彩球之後隨即吃掉彩球，添加更多互動性。也希望透過邪惡圈與彩球所繼承的通用 `Shape()` 物件，測試你的物件技術。最後還要加上計分功能，顯示尚未吃掉的彩球數量。

下方擷圖則讓你了解最終成品的樣子：

![](bouncing-evil-circle.png)

可先參考[完成範例](https://mdn.github.io/learning-area/javascript/oojs/assessment/)讓心裡有個底 (別偷看原始碼啊！)

## 須進行的步驟

下列段落將逐步說明。

### 建立新物件

首先將現有的 `Ball()` 建構子變更為 `Shape()` 建構子，以及新的 `Ball()` 建構子：

1. `Shape()` 建構子對 `x`、`y`、`velX`、`velY` 屬性的定義方式，就如同 `Ball()` 建構子所用的方式。
2. 另須定義新的 `exists` 屬性，用以追蹤球體是否存在於程式之中 (也就是尚未遭邪惡圈所吃掉)。此屬性必為布林值 (Boolean)，初始值為 `true`。
3. `Ball()` 建構子應從 `Shape()` 建構子繼承 `x`、`y`、`velX`、`velY`、`exists` 等屬性。另必須將這些屬性定義為參數以利呼叫之。
4. 必須定義 `color` 與 `size` 屬性各 1 組，且由於兩者均來自於原始的 `Ball()` 建構子之中，所以剛開始的隨機值亦須相同。
5. 記得應正確設定 `Ball()` 建構子的 `prototype` 與 `constructor`。

彩球的 `draw()`、`update()`、`collisionDetect()` 函式定義，均與之前完全相同。

到此為止可重新載入程式碼，搭配重新設計的物件也應該運作無誤。

### 定義 EvilCircle()

再來見見這個壞蛋 — `EvilCircle()`！這個遊戲要加入 1 個會吃球的邪惡圈，而且要透過繼承自 `Shape()` 的建構子來定義這個邪惡圈。你可能也想添增另個讓第二個玩家控制的圈圈，或許多加幾個由電腦控制的邪惡圈。當然，光一個邪惡圈並無法統治世界，但可為此遊戲增添不少樂趣。

`EvilCircle()` 建構子應繼承 `Shape()` 的 `x`、`y`、`exists`。

亦可定義自有的屬性如下：

- `color` — `'white'`
- `size` — `10`
- `velX` — `20`
- `velY` — `20`

再次提醒，請記得要將所繼承的屬性在建構子中定義為參數，並應正確設定 `prototype` 與 `constructor` 屬性。

### 定義 EvilCircle() 的函式

`EvilCircle()` 應具備 4 個函式，如下：

#### `draw()`

此函式的功能與 `Ball()` 的 `draw()` 函式相同，就是在 canvas 上繪製物件實體；且運作的方式也類似，所以你可以複製 `Ball.prototype.draw` 定義來開始。接著要完成下列改變：

- 我們要空心的邪惡圈，但不只是單純實心黑線畫成的圓而已 (要有邊框)。只要將 [`fillStyle`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/fillStyle) 與 [`fill()`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/fill) 更新成 [`strokeStyle`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/strokeStyle) 與 [`stroke()`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/stroke) 即可辦到。
- 還可以讓邊框更粗一點，有助你更容易看到邪惡圈。只要在 [`beginPath()`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/beginPath) 呼叫之後的某個地方設定 [`lineWidth`](/zh-TW/docs/Web/API/CanvasRenderingContext2D/lineWidth) 的值 (「3」就可以) 即可。

#### `checkBounds()`

此函式功能就與 `Ball()` 的 `update()` 函式第一部分相同，負責邪惡圈是否跳出螢幕邊界之外並適時阻止。同樣的，你還是可以複製 `Ball.prototype.update` 定義來用，但須更改下列：

- Get rid of the last two lines — we don't want to automatically update the evil circle's position on every frame, because we will be moving it in some other way, as you'll see below.
- Inside the `if()` statements, if the tests return true we don't want to update `velX`/`velY`; we want to instead change the value of `x`/`y` so the evil circle is bounced back onto the screen slightly. Adding or subtracting (as appropriate) the evil circle's `size` property would make sense.

#### `setControls()`

This method will add an `onkeydown` event listener to the `window` object so that when certain keyboard keys are pressed, we can move the evil circle around. The following code block should be put inside the method definition:

```js
var _this = this;
window.onkeydown = function (e) {
  if (e.keyCode === 65) {
    _this.x -= _this.velX;
  } else if (e.keyCode === 68) {
    _this.x += _this.velX;
  } else if (e.keyCode === 87) {
    _this.y -= _this.velY;
  } else if (e.keyCode === 83) {
    _this.y += _this.velY;
  }
};
```

So when a key is pressed, the event object's [keyCode](/zh-TW/docs/Web/API/KeyboardEvent/keyCode) property is consulted to see which key is pressed. If it is one of the four represented by the specified keycodes, then the evil circle will move left/right/up/down.

- For a bonus point, let us know which keys the specified keycodes map to.
- For another bonus point, can you tell us why we've had to set `var _this = this;` in the position it is in? It is something to do with function scope.

#### `collisionDetect()`

This method will act in a very similar way to `Ball()`'s `collisionDetect()` method, so you can use a copy of that as the basis of this new method. But there are a couple of differences:

- In the outer `if` statement, you no longer need to check whether the current ball in the iteration is the same as the ball that is doing the checking — because it is not longer a ball, it is the evil circle! Instead, you need to do a test to see if the ball being checked exists (with which property could you do this with?). If it doesn't exist, it has already been eaten by the evil circle, so there is no need to check it again.
- In the inner `if` statement, you no longer want to make the objects change color when a collision is detected — instead, you want to set any balls that collide with the evil circle to not exist any more (again, how do you think you'd do that?).

### Bringing the evil circle into the program

Now we've defined the evil circle, we need to actually make it appear in our scene. To do this, you need to make some changes to the `loop()` function.

- First of all, create a new evil circle object instance, then call its `setControls()` method. You only need to do these two things once, not on every iteration of the loop.
- At the point where you loop through every ball and call the `draw()`, `update()`, and `collisionDetect()` functions for each one, make it so that these functions are only called if the current ball exists.
- Call the evil ball instance's `draw()`, `checkBounds()`, and `collisionDetect()` methods on every iteration of the loop.

### Implementing the score counter

To implement the score counter, follow the following steps:

1. In your HTML file, add a {{HTMLElement("p")}} element just below the {{HTMLElement("h1")}} element containing the text "Ball count: ".
2. In your CSS file, add the following rule at the bottom:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. In your JavaScript, make the following updates:

   - Create a variable that stores a reference to the paragraph.
   - Keep a count of the number of balls on screen in some way.
   - Increment the count and display the updated number of balls each time a ball is added to the scene.
   - Decrement the count and display the updated number of balls each time the evil circle eats a ball (causes it not to exist).

## Hints and tips

- This assessment is quite challenging. Take each step slowly and carefully.
- It might be an idea to keep a separate copy of the demo after you get each stage working, so you can refer back to it if you find yourself in trouble later on.

## 交作業

如果你是在某個課堂上操作這份作業，那麼請將成品交給你的老師 / 助教；如果你是自學者，在我們的[專屬討論區](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294)或 [Mozilla IRC](https://wiki.mozilla.org/IRC) 上的 [#mdn](irc://irc.mozilla.org/mdn) 頻道都可以很輕鬆地找到人給予指教。記得先認真做一下習題，要怎麼收獲先那麼栽呀！

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
