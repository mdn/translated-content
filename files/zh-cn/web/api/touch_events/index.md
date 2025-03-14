---
title: 触摸事件
slug: Web/API/Touch_events
---

{{DefaultAPISidebar("Touch Events")}}

为了给基于触摸的用户界面提供高质量的支持，触摸事件提供了在触摸屏或触控板上解释手指（或触控笔）活动的能力。

触摸事件接口是较为底层的 API，可为特定程序提供多点触控交互（比如双指手势）的支持。多点触控交互开始于一个手指（或触控笔）开始接触设备平面的时刻。随后其他手指也可触摸设备表面，并随意进行划动。当所有手指离开设备平面时，交互结束。整个交互期间，程序接收开始、移动、结束三个阶段的触摸事件。

触摸事件与鼠标事件类似，不同的是触摸事件还提供同一表面不同位置的同步触摸。{{domxref("TouchEvent")}} 接口将当前所有活动的触摸点封装起来。{{domxref("Touch")}} 接口表示单独一个触摸点，其中包含参考浏览器视角的相对坐标。

## 定义

- 表面（surface）
  - : 可感知触摸的平面，可以是屏幕或触控板。
- 触摸点（touch point）
  - : 表面上的一个接触点.。有可能是手指 (或者胳膊肘、耳朵、鼻子都行。但一般是手指) 或者触摸笔。

## 接口

- {{ domxref("TouchEvent") }}
  - : 表示位于表面上的一个触摸点的某个状态发生改变时产生的事件。
- {{ domxref("Touch") }}
  - : 表示用户与触摸表面间的一个单独的接触点。
- {{ domxref("TouchList") }}
  - : 表示一组 Touch，用于多点触控的情况。

## 示例

本示例通过对多个触控点进行同步跟踪，让用户通过多点触控的方式在 {{ HTMLElement("canvas") }} 元素上用两个（或以上）手指同时画图。本示例只在支持触摸事件的浏览器下生效。

> [!NOTE]
> 下文中用“手指”表示与平面的交互，当然触控笔等也是可行的。

### 创建画布

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  你的浏览器不支持 canvas 元素。
</canvas>
<br />
日志：
<pre id="log" style="border: 1px solid #ccc;"></pre>
```

### 设置事件处理器

当页面加载时，下文的 `startup()` 函数由 `window.onload` 属性触发。

```js
window.onload = function startup() {
  const el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchmove", handleMove, false);
  log("初始化成功。");
};
```

该函数为 {{ HTMLElement("canvas") }} 元素设置了所有相关的事件监听器，使事件在触发时能够得到处理。

#### 跟踪新触摸

我们将跟踪当前存在的所有触摸点。

```js
const ongoingTouches = [];
```

当 [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) 事件触发时，平面上即出现一个新的触摸点，继而调用 `handleStart()` ：

```js
function handleStart(evt) {
  evt.preventDefault();
  console.log("触摸开始。");
  const el = document.getElementsByTagName("canvas")[0];
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    console.log("开始第 " + i + " 个触摸 ...");
    ongoingTouches.push(copyTouch(touches[i]));
    const color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);
    // 在起点画一个圆。
    ctx.fillStyle = color;
    ctx.fill();
    console.log("第 " + i + " 个触摸已开始。");
  }
}
```

{{ domxref("event.preventDefault()") }} 阻止了浏览器继续处理触摸（和鼠标）事件。然后我们取得上下文，从事件的 {{ domxref("TouchEvent.changedTouches") }} 属性中获得已改变的触摸点列表。

上述列表中所有的 {{ domxref("Touch") }} 对象即为当前所有活动的触摸点，把它们置于一个数组中，然后为每个触摸绘制起点。我们设置线条宽度为四像素，所以恰好会绘制一个半径为 4 像素的圆。

#### 当触摸移动时绘制

在触摸平面上移动一根或者几根手指会触发 [`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event) 事件，从而将调用`handleMove()` 函数。本例中这个函数用于更新触摸点信息，并为每个触摸点从之前位置到当前位置之间绘制直线。

```js
function handleMove(evt) {
  evt.preventDefault();
  const el = document.getElementsByTagName("canvas")[0];
  const ctx = el.getContext("2d");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const color = colorForTouch(touches[i]);
    const idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      log("继续第 " + idx + "个触摸。");
      ctx.beginPath();
      log(
        "ctx.moveTo(" +
          ongoingTouches[idx].pageX +
          ", " +
          ongoingTouches[idx].pageY +
          ");",
      );
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // 切换触摸信息
      console.log(".");
    } else {
      log("无法确定下一个触摸点。");
    }
  }
}
```

这个函数不仅对所有已改变的触摸点进行了遍历，还从缓存的触摸信息数组中得到了每个触摸点要绘制的新线段的起点。这是通过读取每个触摸点的 {{domxref("Touch.identifier")}} 属性实现的。对每个触摸点而言，该属性是个唯一的整数，且手指接触表面的整个过程中，这个属性保持不变。

这样我们就可以取得每个触摸点之前位置的坐标，并且使用恰当的上下文方法绘制片段，从而将新旧两个位置连接起来。

当片段绘制完毕后，我们调用 [`Array.splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 将 `ongoingTouches` 数组中触摸点之前的信息替换为当前信息。

#### 触摸结束处理

用户的手指从表面抬起时将触发 [`touchend`](/zh-CN/docs/Web/API/Element/touchend_event) 事件。我们通过调用下面的 `handleEnd()` 函数来处理此类事件。这个函数的工作就是为每个结束的触摸点绘制最后一个片段，然后将触摸点从 `ongoingTouches` 数组中移除。

```js
function handleEnd(evt) {
  evt.preventDefault();
  log("触摸结束。");
  const el = document.getElementsByTagName("canvas")[0];
  const ctx = el.getContext("2d");
  touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const color = colorForTouch(touches[i]);
    const idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);
      // 在终点画一个正方形
      ongoingTouches.splice(idx, 1); // 用完后移除
    } else {
      log("无法确定要结束哪个触摸点。");
    }
  }
}
```

这个函数与上一个很相像，唯一的实质性区别就是在调用 [`Array.splice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 时，我们把用过的触摸实体从 `ongoingTouches` 数组中直接移除了，不再添加更新信息。对这个触摸点的跟踪随之终止。

#### 触摸取消处理

如果用户的手指不小心滑入浏览器界面，或者触摸需要取消时，会触发 [`touchcancel`](/zh-CN/docs/Web/API/Element/touchcancel_event) 事件。从而会调用下面的 `handleCancel()` 函数：

```js
function handleCancel(evt) {
  evt.preventDefault();
  console.log("触摸取消。");
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1); // 用完后移除
  }
}
```

这里的想法是立刻结束触摸，所以我们直接从 `ongoingTouches` 数组中将其移除，而不去绘制最后的片段。

### 便捷函数

本例中使用了几个便捷函数，有必要简单了解一下，对理解其他代码很有帮助。

#### 为每个触摸点选择一个颜色

为了区分每个触摸点绘制的内容，我们引入 `colorForTouch()` 函数，根据每个触摸点所独有的标记设定一个颜色。这个标记在这里可能是一个无意义的数字，但我们至少可以利用它“对于每个触摸点的值都不同”这一特性。

```js
function colorForTouch(touch) {
  let r = touch.identifier % 16;
  let g = Math.floor(touch.identifier / 3) % 16;
  let b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // 转换为十六进制字符串
  g = g.toString(16); // 转换为十六进制字符串
  b = b.toString(16); // 转换为十六进制字符串
  const color = "#" + r + g + b;
  log("identifier " + touch.identifier + " 触摸的颜色为：" + color);
  return color;
}
```

这个函数返回一个表示颜色的字符串，可以在调用 {{ HTMLElement("canvas") }} 的函数时使用。比如，若 {{ domxref("Touch.identifier") }} 的值为 10，则返回的字符串为 "#aaa"。

> [!WARNING]
> 这里的 `colorForTouch()` 不是一个好主意。`Touch.identifier` 是一个实验性属性，存在兼容性问题，不同浏览器之间实现方法不同，因此会得到不同的结果。

#### 拷贝触摸对象

有些浏览器（比如 mobile Safari）会在不同事件之间复用触摸点对象，因此只复制所需的部分，要优于引用整个对象。

```js
function copyTouch(touch) {
  return {
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
  };
}
```

#### 查找触摸点

`ongoingTouchIndexById()` 函数通过遍历 `ongoingTouches` 数组来寻找与给定标记相匹配的触摸点，返回该触摸点在数组中的下标。

```js
function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1; // 未找到
}
```

#### 显示后台操作记录

```js
function log(msg) {
  const p = document.getElementById("log");
  p.innerHTML = msg + "\n" + p.innerHTML;
}
```

如果你的浏览器支持触摸，就可以 [在线试用](https://roy-tian.github.io/mdn-examples/javascript/touch-paint/)。

[jsFiddle 上的示例](https://jsfiddle.net/Darbicus/z3Xdx/10/)

## 附加信息

本节提供了在 web 应用中处理触摸事件的其他信息。

### 处理点击

由于在 [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event)（或系列 [`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event) 事件里的首个）中调用 `preventDefault()` 也会阻止相应的鼠标事件的触发，因此一般情况下我们在[`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event) 而不是 [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) 中调用它，这样，鼠标事件仍可正常触发，链接等部件也可继续工作。有些框架采取了一个替代方案，使用触摸事件代替鼠标事件来达到相同目的。 (下面的示例过于简单，可能产生奇怪的行为。这里仅仅作为一个引导。)

```js
function onTouch(evt) {
  evt.preventDefault();
  if (
    evt.touches.length > 1 ||
    (evt.type == "touchend" && evt.touches.length > 0)
  )
    return;

  const newEvt = document.createEvent("MouseEvents");
  let type = null;
  let touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(
    type,
    true,
    true,
    evt.originalTarget.ownerDocument.defaultView,
    0,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    evt.ctrlKey,
    evt.altKey,
    evt.shiftKey,
    evt.metaKey,
    0,
    null,
  );
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### 只在第二次触摸时调用 preventDefault()

为了阻止页面产生类似 pinchZoom 的行为，可以通过“在系列触摸点的第二个调用 `preventDefault()`”技术来实现。但是该技术的行为并没有在触摸事件的标准中做出完整定义，并且在不同浏览器中会产生不同行为（比如，iOS 将阻止缩放，但允许二指平移；Android 允许缩放但阻止平移；Opera 和 Firefox 目前会阻止所有缩放和平移操作）。目前，对于此类情况最好依靠 `meta viewport` 来阻止缩放，而不要依赖于上述行为。

## 规范

{{Specifications}}

## 浏览器兼容性

### `Touch`

{{Compat}}

### Firefox，触摸事件以及多进程（e10s）

在 Firefox 中，触摸事件随 e10s（electrolysis 即 [多进程 Firefox](/zh-CN/docs/Mozilla/Firefox/Multiprocess_Firefox)）的禁用而禁用。e10s 在 Firefox 中默认为可用，但可以在某些特定情形下关闭它，比如在安装一些要求禁用 e10s 的工具或扩展时。这意味着即使在支持触屏的桌面或便携设备上，触摸事件也可能失效。

你可以使用 `about:support` 查看“应用程序概要”部分中“多进程窗口”一栏来确定 e10s 是否启用。1/1 表示启用，0/1 表示禁用。

如果你想强制性的开启 e10s（来显式重新启用触摸事件支持），你需要使用 about:config 创建一个布尔类型的设置 `browser.tabs.remote.force-enable`，将它设置为 `true`，重启浏览器，e10s 将始终启用而不受其他设置的影响。
