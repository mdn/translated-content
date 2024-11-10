---
title: Window：requestAnimationFrame() 方法
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef}}

**`window.requestAnimationFrame()`** 方法会告诉浏览器你希望执行一个动画。它要求浏览器在下一次重绘之前，调用用户提供的回调函数。

对回调函数的调用频率通常与显示器的刷新率相匹配。虽然 75hz、120hz 和 144hz 也被广泛使用，但是最常见的刷新率还是 60hz（每秒 60 个周期/帧）。为了提高性能和电池寿命，大多数浏览器都会暂停在后台选项卡或者隐藏的 {{ HTMLElement("iframe") }} 中运行的 `requestAnimationFrame()`。

> [!NOTE]
> 若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 `requestAnimationFrame()`。`requestAnimationFrame()` 是一次性的。

> [!WARNING]
> 请确保总是使用第一个参数（或其他一些获取当前时间的方法）来计算动画在一帧中的进度，**否则动画在高刷新率的屏幕中会运行得更快**。有关方法请参考下面的示例。

## 语法

```js-nolint
requestAnimationFrame(callback)
```

### 参数

- `callback`
  - 该函数会在下一次重绘更新你的动画时被调用到。这个回调函数只会传递一个参数：一个 {{domxref("DOMHighResTimeStamp")}} 参数，用于表示上一帧渲染的结束时间（基于 [time origin](/zh-CN/docs/Web/API/Performance/timeOrigin) 的毫秒数）
  - 时间戳是一个以毫秒为单位的十进制数字，最小精度为 1 毫秒。对于 `Window` 对象（而非 `workers`）来说，它等同于 {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}}。此时间戳在同一代理上（所有同源的 `window`，更重要的是同源的 `iframe`）运行的所有窗口之间共享——它允许在多个 `requestAnimationFrame` 回调函数中执行同步动画。此时间戳值也近似于在回调函数开始时调用 {{domxref('performance.now()')}}，但它们永远都不会是相同的值。
  - 当 `requestAnimationFrame()` 队列中的多个回调开始在同一帧中触发时，它们都会收到相同的时间戳，即便在计算前一个回调函数工作量时这一帧的时间已经过去。

### 返回值

请求 ID 是一个 `long` 类型整数值，是在回调列表里的唯一标识符。这是一个非零值，但你不能对该值做任何其他假设。你可以将此值传递给 {{domxref("window.cancelAnimationFrame()")}} 函数以取消该刷新回调请求。

## 示例

在这个例子中，一个元素的动画时间是 2 秒（2000 毫秒）。该元素以 0.1px/ms 的速度向右移动，所以它的相对位置（以 CSS 像素为单位）可以通过动画开始后所经过的时间（以毫秒为单位）的函数来计算，即 `0.1 * elapsed`。该元素的最终位置是在其初始位置的右边 200px（`0.1 * 2000`）。

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

以下三个示例说明了设置时间零点的不同方法，时间零点是计算每帧中动画进度的起点。如果你想同步到外部时钟，例如 {{domxref("BaseAudioContext.currentTime")}}，可用的最高精度是单帧的持续时间（16.67ms @60hz）。回调函数的时间戳参数表示上一帧的结束，因此最快将在下一帧中呈现新计算的值。

此示例会等待第一个回调函数执行时设置 `zero`。如果你的动画在开始时跳转到新值，则必须采用这种结构。如果你无需与任意外部同步（例如音频），则建议使用此方法，因为某些浏览器在首次调用 `requestAnimationFrame()` 和首次调用回调函数之间会有多帧延迟。

```js
let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timeStamp) {
  zero = timeStamp;
  animate(timeStamp);
}
function animate(timeStamp) {
  const value = (timeStamp - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

此示例在第一次调用 `requestAnimationFrame` 前使用 {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}} 设置了一个零值。`document.timeline.currentTime` 与 `timeStamp` 参数对齐，因此零值等价于第 0 帧的时间戳。

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animate);
function animate(timeStamp) {
  const value = (timeStamp - zero) / duration; // animation-timing-function: linear
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

此示例使用 {{domxref("performance.now()")}} 而不是回调的时间戳值去设置动画。你可以使用它来实现稍高的同步精度，尽管附加精确度是易变的且增长不大。备注：此示例不能让你可靠地同步动画回调函数。

```js
const zero = performance.now();
requestAnimationFrame(animate);
function animate() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.cancelAnimationFrame()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- [用 JavaScript 做动画：从 setInterval 到 requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/)——博文
- [TestUFO：测试你的 web 浏览器 requestAnimationFrame() 的时间偏差](https://www.testufo.com/#test=animation-time-graph)
