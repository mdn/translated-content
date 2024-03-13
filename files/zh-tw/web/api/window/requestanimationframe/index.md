---
title: Window.requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
---

{{APIRef}}

**`window.requestAnimationFrame()`**方法通知瀏覽器我們想要產生動畫，並且要求瀏覽器在下次重繪畫面前呼叫特定函數更新動畫。這個方法接受一個引數作為下次重繪前調用的回呼函數。

> **備註：** 若是想要在下次重繪時產生另一個動畫，這個回呼函數內必須自行呼叫 requestAnimationFrame()。

當準備好更新頁面上的動畫時應當呼叫這個方法。這表示向瀏覽器請求在下次重繪前呼叫這個動畫函數。回呼的次數通常落在每秒 60 次，但通常會根據 W3C 的建議符合多數瀏覽器重新整理的頻率。當頁面處於背景或隱藏狀態時 {{ HTMLElement("iframe") }} ，多數的瀏覽器會暫停 `requestAnimationFrame()` 的呼叫，從而改善效能表現及電池壽命。

回呼方法會得到一個 {{domxref("DOMHighResTimeStamp")}} 的引數，作為指示目前的時間（基於 [time origin](/zh-TW/docs/Web/API/DOMHighResTimeStamp#The_time_origin) 之後經過的毫秒數）。當 `requestAnimationFrame()` 佇列了數個回呼並且在同一幀開始觸發多個回呼時，儘管每一個之前的回呼在運作時會消耗一定的時間，但它們都會取得同樣的時間戳記。時間戳記是由十進位數字表示的毫秒且最小的精準度為 1 毫秒（1000 µs）。

## 語法

```plain
window.requestAnimationFrame(callback);
```

### 參數

- `回呼`
  - : 當下次重新繪製時用於呼叫並更新動畫。回呼函數會得到一個引數—— {{domxref("DOMHighResTimeStamp")}} ——類似於由 {{domxref('performance.now()')}} 回傳的結果，其用於指示當 `requestAnimationFrame()` 開始執行回呼函數的時間。

### 回傳值

`long` 型別的整數值表示請求的 id，作為其進入回呼清單中的唯一識別。雖然回傳值是一個非零值，但不應該對其有其他任何的假設。將這個值傳遞給 {{domxref("window.cancelAnimationFrame()")}} 可以取消重新整理頁面回呼的請求

## 範例

```js
var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform =
    "translateX(" + Math.min(progress / 10, 200) + "px)";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

## 備註

Edge 低於 17 的版本和 Internet Explorer 無法保證在繪製循環前觸發 `requestAnimationFrame`。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 其他參考

- {{domxref("Window.mozAnimationStartTime")}}
- {{domxref("Window.cancelAnimationFrame()")}}
- [mozRequestAnimationFrame](https://robert.ocallahan.org/2010/08/mozrequestanimationframe-frame-rate_17.html) - Blog post
- [requestAnimationFrame for smart animating](http://paulirish.com/2011/requestanimationframe-for-smart-animating/) - Blog post
- [Animating with javascript: from setInterval to requestAnimationFrame](http://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog post
- [Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 1](http://blogs.msdn.com/b/ie/archive/2011/07/05/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-1.aspx) - Blog post
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](http://www.testufo.com/#test=animation-time-graph)
- Paul Irish: [requestAnimationFrame API: now with sub-millisecond precision](http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision)
