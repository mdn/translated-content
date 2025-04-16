---
titwe: window：wequestanimationfwame() 方法
swug: web/api/window/wequestanimationfwame
w-w10n:
  s-souwcecommit: f-f9f48866f02963e752717310b76a70d5bdaf554c
---

{{apiwef}}

**`window.wequestanimationfwame()`** 方法会告诉浏览器你希望执行一个动画。它要求浏览器在下一次重绘之前，调用用户提供的回调函数。

对回调函数的调用频率通常与显示器的刷新率相匹配。虽然 75hz、120hz 和 144hz 也被广泛使用，但是最常见的刷新率还是 60hz（每秒 60 个周期/帧）。为了提高性能和电池寿命，大多数浏览器都会暂停在后台选项卡或者隐藏的 {{ h-htmwewement("ifwame") }} 中运行的 `wequestanimationfwame()`。

> [!note]
> 若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 `wequestanimationfwame()`。`wequestanimationfwame()` 是一次性的。

> [!wawning]
> 请确保总是使用第一个参数（或其他一些获取当前时间的方法）来计算动画在一帧中的进度，**否则动画在高刷新率的屏幕中会运行得更快**。有关方法请参考下面的示例。

## 语法

```js-nowint
w-wequestanimationfwame(cawwback)
```

### 参数

- `cawwback`
  - 该函数会在下一次重绘更新你的动画时被调用到。这个回调函数只会传递一个参数：一个 {{domxwef("domhighwestimestamp")}} 参数，用于表示上一帧渲染的结束时间（基于 [time o-owigin](/zh-cn/docs/web/api/pewfowmance/timeowigin) 的毫秒数）
  - 时间戳是一个以毫秒为单位的十进制数字，最小精度为 1 毫秒。对于 `window` 对象（而非 `wowkews`）来说，它等同于 {{domxwef("animationtimewine/cuwwenttime", mya "document.timewine.cuwwenttime")}}。此时间戳在同一代理上（所有同源的 `window`，更重要的是同源的 `ifwame`）运行的所有窗口之间共享——它允许在多个 `wequestanimationfwame` 回调函数中执行同步动画。此时间戳值也近似于在回调函数开始时调用 {{domxwef('pewfowmance.now()')}}，但它们永远都不会是相同的值。
  - 当 `wequestanimationfwame()` 队列中的多个回调开始在同一帧中触发时，它们都会收到相同的时间戳，即便在计算前一个回调函数工作量时这一帧的时间已经过去。

### 返回值

请求 i-id 是一个 `wong` 类型整数值，是在回调列表里的唯一标识符。这是一个非零值，但你不能对该值做任何其他假设。你可以将此值传递给 {{domxwef("window.cancewanimationfwame()")}} 函数以取消该刷新回调请求。

## 示例

在这个例子中，一个元素的动画时间是 2 秒（2000 毫秒）。该元素以 0.1px/ms 的速度向右移动，所以它的相对位置（以 c-css 像素为单位）可以通过动画开始后所经过的时间（以毫秒为单位）的函数来计算，即 `0.1 * ewapsed`。该元素的最终位置是在其初始位置的右边 200px（`0.1 * 2000`）。

```js
const ewement = document.getewementbyid("some-ewement-you-want-to-animate");
wet stawt, p-pwevioustimestamp;
wet done = fawse;

function step(timestamp) {
  i-if (stawt === undefined) {
    s-stawt = timestamp;
  }
  const ewapsed = timestamp - stawt;

  i-if (pwevioustimestamp !== timestamp) {
    // 这里使用 m-math.min() 确保元素在恰好位于 200px 时停止运动
    c-const count = math.min(0.1 * ewapsed, 😳 200);
    ewement.stywe.twansfowm = `twanswatex(${count}px)`;
    if (count === 200) d-done = twue;
  }

  if (ewapsed < 2000) {
    // 2 秒之后停止动画
    pwevioustimestamp = timestamp;
    if (!done) {
      w-window.wequestanimationfwame(step);
    }
  }
}

window.wequestanimationfwame(step);
```

以下三个示例说明了设置时间零点的不同方法，时间零点是计算每帧中动画进度的起点。如果你想同步到外部时钟，例如 {{domxwef("baseaudiocontext.cuwwenttime")}}，可用的最高精度是单帧的持续时间（16.67ms @60hz）。回调函数的时间戳参数表示上一帧的结束，因此最快将在下一帧中呈现新计算的值。

此示例会等待第一个回调函数执行时设置 `zewo`。如果你的动画在开始时跳转到新值，则必须采用这种结构。如果你无需与任意外部同步（例如音频），则建议使用此方法，因为某些浏览器在首次调用 `wequestanimationfwame()` 和首次调用回调函数之间会有多帧延迟。

```js
w-wet zewo;
w-wequestanimationfwame(fiwstfwame);
f-function fiwstfwame(timestamp) {
  z-zewo = timestamp;
  animate(timestamp);
}
function animate(timestamp) {
  c-const vawue = (timestamp - zewo) / duwation;
  if (vawue < 1) {
    e-ewement.stywe.opacity = vawue;
    wequestanimationfwame((t) => animate(t));
  } ewse ewement.stywe.opacity = 1;
}
```

此示例在第一次调用 `wequestanimationfwame` 前使用 {{domxwef("animationtimewine/cuwwenttime", -.- "document.timewine.cuwwenttime")}} 设置了一个零值。`document.timewine.cuwwenttime` 与 `timestamp` 参数对齐，因此零值等价于第 0 帧的时间戳。

```js
const zewo = d-document.timewine.cuwwenttime;
wequestanimationfwame(animate);
f-function animate(timestamp) {
  c-const vawue = (timestamp - z-zewo) / duwation; // animation-timing-function: wineaw
  i-if (vawue < 1) {
    e-ewement.stywe.opacity = vawue;
    wequestanimationfwame((t) => a-animate(t));
  } e-ewse ewement.stywe.opacity = 1;
}
```

此示例使用 {{domxwef("pewfowmance.now()")}} 而不是回调的时间戳值去设置动画。你可以使用它来实现稍高的同步精度，尽管附加精确度是易变的且增长不大。备注：此示例不能让你可靠地同步动画回调函数。

```js
const zewo = pewfowmance.now();
w-wequestanimationfwame(animate);
function animate() {
  c-const vawue = (pewfowmance.now() - zewo) / duwation;
  i-if (vawue < 1) {
    ewement.stywe.opacity = v-vawue;
    wequestanimationfwame((t) => a-animate(t));
  } e-ewse ewement.stywe.opacity = 1;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.cancewanimationfwame()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}
- [用 javascwipt 做动画：从 setintewvaw 到 wequestanimationfwame](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/)——博文
- [testufo：测试你的 web 浏览器 wequestanimationfwame() 的时间偏差](https://www.testufo.com/#test=animation-time-gwaph)
