---
title: Window：requestAnimationFrame() 方法
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 90c1d8efd51c2f82d26e6b79e442f9dbcfafd048
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
  - : 该函数会在下一次重绘更新你的动画时被调用到。这个回调函数只会传递一个参数：
    - `timestamp`
      - : 一个 {{domxref("DOMHighResTimeStamp")}} 参数，用于表示上一帧渲染的结束时间（从[起始时间](/zh-CN/docs/Web/API/Performance/timeOrigin)开始的毫秒数）。时间戳是一个以毫秒为单位的十进制数字，最小精度为 1 毫秒。对于 `Window`（而非 `Workers`）对象来说，它等同于 {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}}。此时间戳在同一代理上（所有同源的 `window`，更重要的是同源的 `iframe`）运行的所有窗口之间共享——它允许在多个 `requestAnimationFrame` 回调函数中执行同步动画。此时间戳值也近似于在回调函数开始时调用 {{domxref('performance.now()')}}，但它们永远都不会是相同的值。

        当 `requestAnimationFrame()` 队列中的多个回调开始在同一帧中触发时，它们都会收到相同的时间戳，即便在计算前一个回调函数工作量时这一帧的时间已经过去。

### 返回值

一个 `unsigned long` 整数值，即请求 ID，用于唯一标识回调列表中的条目。不应该对该值做任何假设。你可以将此值传递给 {{domxref("window.cancelAnimationFrame()")}} 函数以取消该刷新回调请求。

> [!WARNING]
> 请求 ID 通常实现为每个窗口的递增计数器。因此，即使它从 1 开始计数，也可能会溢出并最终达到 0。虽然这不太可能对短期应用程序造成问题，但你应该避免使用 `0` 作为无效请求标识符 ID 的哨兵值，而应该使用无法达到的值，如 `null`。规范没有指定溢出行为，因此浏览器具有不同的行为。溢出时，该值要么回绕到 0，要么变为负值，要么抛出错误。除非溢出会抛出异常，否则请求 ID 也不是真正唯一的，因为对于可能无限多的回调函数，只有有限多个 32 位整数。但请注意，在 60Hz 渲染频率下，每帧调用一次 `requestAnimationFrame()`，大约需要 800 天才会出现此问题。

## 示例

在这个例子中，一个元素的动画时间是 2 秒（2000 毫秒）。该元素以 0.1px/ms 的速度向右移动，所以它的相对位置（以 CSS 像素为单位）可以通过动画开始后所经过的时间（以毫秒为单位）的函数来计算，即 `0.1 * elapsed`。该元素的最终位置是在其初始位置的右边 200px（`0.1 * 2000`）。

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  // Math.min() 用于确保元素精确停在 200px
  const shift = Math.min(0.1 * elapsed, 200);
  element.style.transform = `translateX(${shift}px)`;
  if (shift < 200) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
```

以下三个示例演示了设置时间零点（即每帧计算动画进度时的基准点）的不同方法。如果你想与外部时钟同步，例如 {{domxref("BaseAudioContext.currentTime")}}，可用的最高精度是单帧时长，即 60Hz 下为 16.67ms。回调的时间戳参数表示上一帧的结束时间，因此新计算的值最快会在下一帧中呈现。

此示例会等待第一个回调执行后再设置时间零点 `zero`。如果你的动画在开始时需要跳转到新值，则必须采用这种结构。如果你无需与任何外部元素（如音频）进行同步，则建议采用此方法，因为某些浏览器在首次调用 `requestAnimationFrame()` 和首次调用回调函数之间会存在多帧的延迟。

```js
let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timestamp) {
  zero = timestamp;
  animate(timestamp);
}
function animate(timestamp) {
  const value = (timestamp - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

此示例使用 {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}} 在首次调用 `requestAnimationFrame` 之前设置零值。`document.timeline.currentTime` 与 `timestamp` 参数保持一致，因此该零值等同于第 0 帧的时间戳。

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animate);
function animate(timestamp) {
  const value = (timestamp - zero) / duration; // animation-timing-function: linear
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

此示例使用 {{domxref("performance.now()")}} 而非回调的时间戳值来实现动画效果。你可以使用这种方法来获得略高的同步精度，不过这种额外的精度提升程度不一，且增幅不大。

> [!NOTE]
> 此示例无法可靠地同步动画回调。

```js
const zero = performance.now();
requestAnimationFrame(animate);
function animate() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame(animate);
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
- [TestUFO：测试你的 web 浏览器 requestAnimationFrame() 的时间偏差](https://testufo.com/#test=animation-time-graph)
- [Firefox 将 requestAnimationFrame 的请求 ID 切换为 uint32_t 类型](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
