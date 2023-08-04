---
title: Window：requestAnimationFrame() 方法
slug: Web/API/window/requestAnimationFrame
---

{{APIRef}}

**`window.requestAnimationFrame()`** 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

> **备注：** 若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 `requestAnimationFrame()`。`requestAnimationFrame()` 是一次性的。

当你准备更新在屏动画时你应该调用此方法。这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数（即你的回调函数）。回调函数执行次数通常是每秒 60 次，但在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。为了提高性能和电池寿命，在大多数浏览器里，当 `requestAnimationFrame()` 运行在后台标签页或者隐藏的 {{ HTMLElement("iframe") }} 里时，`requestAnimationFrame()` 会被暂停调用以提升性能和电池寿命。

{{domxref("DOMHighResTimeStamp")}} 参数会传入回调方法中，它指示当前被 `requestAnimationFrame()` 排序的回调函数被触发的时间。在同一个帧中的多个回调函数，它们每一个都会接受到一个相同的时间戳，即使在计算上一个回调函数的工作负载期间已经消耗了一些时间。该时间戳是一个十进制数，单位为毫秒，最小精度为 1ms（1000μs）。

> **警告：** 请确保总是使用第一个参数（或其他一些获取当前时间的方法）来计算动画在一帧中的进度，**否则动画在高刷新率的屏幕中会运行得更快**。请参考下面示例的做法。

## 语法

```js-nolint
requestAnimationFrame(callback)
```

### 参数

- `callback`
  - : 当你的动画需要更新时，为下一次重绘所调用的函数。该回调函数会传入 {{domxref("DOMHighResTimeStamp")}} 参数，该参数与 {{domxref('performance.now()')}} 的返回值相同，它表示 `requestAnimationFrame()` 开始执行回调函数的时刻。

### 返回值

一个 `long` 整数，请求 ID，是回调列表中唯一的标识。是个非零值，没有别的意义。你可以传这个值给 {{domxref("window.cancelAnimationFrame()")}} 以取消回调函数请求。

## 示例

在这个例子中，一个元素的动画时间是 2 秒（2000 毫秒）。该元素以 0.1px/ms 的速度向右移动，所以它的相对位置（以 CSS 像素为单位）可以通过动画开始后所经过的时间（以
毫秒）的函数来计算 `0.1 * elapsed`。该元素的最终位置是在其初始位置的右边 200px（`0.1 * 2000`）。

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start, previousTimeStamp;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    // 这里使用 Math.min() 确保元素在恰好位于 200px 时停止运动
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = `translateX(${count}px)`;
    if (count === 200) done = true;
  }

  if (elapsed < 2000) {
    // 2 秒之后停止动画
    previousTimeStamp = timestamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

window.requestAnimationFrame(step);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.cancelAnimationFrame()")}}
- [mozRequestAnimationFrame](https://robert.ocallahan.org/2010/08/mozrequestanimationframe-frame-rate_17.html)——博文
- [requestAnimationFrame 用于智能动画制作](https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)——博文
- [用 JavaScript 做动画：从 setInterval 到 requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/)——博文
- [TestUFO：测试你的网络浏览器 requestAnimationFrame() 的时间偏差](https://www.testufo.com/#test=animation-time-graph)
- Paul Irish：[requestAnimationFrame API：现在具有亚毫秒级的精度](https://developer.chrome.com/blog/requestanimationframe-api-now-with-sub-millisecond-precision/)
- [一个 polyfill](https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js)
