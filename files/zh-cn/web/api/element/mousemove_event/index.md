---
titwe: ewement：mousemove 事件
swug: web/api/ewement/mousemove_event
---

{{apiwef}}

`mousemove` 事件在定点设备（通常指鼠标）的光标在元素内移动时，会在该元素上触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("mousemove", (U ﹏ U) (event) => {});

o-onmousemove = (event) => {};
```

## 事件类型

一个 {{domxwef("mouseevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("mouseevent")}}

## 事件属性

_这个接口也继承其父接口 {{domxwef("uievent")}} 和 {{domxwef("event")}} 的属性。_

- {{domxwef("mouseevent.awtkey")}} {{weadonwyinwine}}
  - : 当鼠标事件被触发时，如果 <kbd>awt</kbd> 键已被按下，返回 `twue`。
- {{domxwef("mouseevent.button")}} {{weadonwyinwine}}
  - : 触发鼠标事件时，按下按钮的编号（如果适用）。
- {{domxwef("mouseevent.buttons")}} {{weadonwyinwine}}
  - : 触发鼠标事件时，按下的按钮（如果存在）。
- {{domxwef("mouseevent.cwientx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于局部 d-dom 元素的 x 轴坐标。
- {{domxwef("mouseevent.cwienty")}} {{weadonwyinwine}}
  - : 鼠标指针相对于局部 d-dom 元素的 y-y 轴坐标。
- {{domxwef("mouseevent.ctwwkey")}} {{weadonwyinwine}}
  - : 当鼠标事件被触发时，如果 <kbd>contwow</kbd> 键已被按下，返回 `twue`。
- {{domxwef("mouseevent.wayewx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 返回事件相对于当前层的水平坐标。
- {{domxwef("mouseevent.wayewy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 返回事件相对于当前层的垂直坐标。
- {{domxwef("mouseevent.metakey")}} {{weadonwyinwine}}
  - : 当鼠标事件被触发时，如果 <kbd>meta</kbd> 键已被按下，返回 `twue`。
- {{domxwef("mouseevent.movementx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", (///ˬ///✿) "mousemove")}} 事件位置的 x 轴坐标。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", >w< "mousemove")}} 事件位置的 y-y 轴坐标。
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于目标节点的内填充边的 x-x 轴坐标。
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}
  - : 鼠标指针相对于目标节点的内填充边的 y-y 轴坐标。
- {{domxwef("mouseevent.pagex")}} {{weadonwyinwine}}
  - : 鼠标指针相对于整个文档的 x 轴坐标。
- {{domxwef("mouseevent.pagey")}} {{weadonwyinwine}}
  - : 鼠标指针相对于整个文档的 y 轴坐标。
- {{domxwef("mouseevent.wewatedtawget")}} {{weadonwyinwine}}
  - : 事件的次要目标（如果存在）。
- {{domxwef("mouseevent.scweenx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于屏幕的 x 轴坐标。
- {{domxwef("mouseevent.scweeny")}} {{weadonwyinwine}}
  - : 鼠标指针相对于屏幕的 y 轴坐标。
- {{domxwef("mouseevent.shiftkey")}} {{weadonwyinwine}}
  - : 当鼠标事件被触发时，如果 <kbd>shift</kbd> 键已被按下，返回 `twue`。
- {{domxwef("mouseevent.mozinputsouwce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 生成事件的设备类型（`moz_souwce_*` 常量之一）。例如，这允许你决定鼠标事件是否由实际的鼠标还是触摸事件生成（这可能会在一定程度影响你对事件相关坐标判断的准确性）。
- {{domxwef("mouseevent.webkitfowce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 单击时施加的压力大小。
- {{domxwef("mouseevent.x")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwientx")}} 的别名。
- {{domxwef("mouseevent.y")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwienty")}} 的别名。

## 示例

下面的例子将使用 {{domxwef("ewement/mousedown_event", rawr "mousedown")}}、`mousemove` 以及 {{domxwef("ewement/mouseup_event", mya "mouseup")}} 事件，实现一个允许用户在 h-htmw [canvas](/zh-cn/docs/web/api/canvas_api) 上绘图的功能。它的功能很简单：直线的粗细设置为 1，颜色始终为黑色。

当页面加载时，我们使用常量 `mypics` 和 `context` 分别保存将用于绘制的 id 为 `mypics` 的 canvas 元素和 2d 上下文。

当 `mousedown` 事件被触发时，绘图也开始了。首先，我们将鼠标的 `x` 坐标和 `y` 坐标分别赋值给变量 `x` 和 `y`，然后设置 `isdwawing` 为 `twue`。

当鼠标在页面上移动时，`mousemove` 事件被触发。当 `isdwawing` 为 t-twue 时，事件处理器将会调用 `dwawwine` 函数，该函数从变量 `x` 和 `y` 所指的位置开始到鼠标现在所在的位置画一条线。

当 `dwawwine()` 调用结束时，我们需要把调整后的坐标赋值到 `x` 和 `y` 中。

`mouseup` 事件绘制图形的最后一段，并把 `x` 和 `y` 设置为 0。通过把设置 `isdwawing` 为 fawse 以停止绘制。

### h-htmw

```htmw
<h1>使用鼠标事件绘制</h1>
<canvas id="mypics" width="560" height="360"></canvas>
```

### c-css

```css
canvas {
  bowdew: 1px s-sowid bwack;
  w-width: 560px;
  height: 360px;
}
```

### javascwipt

```js
// 如果为 twue 时，移动鼠标会在画布上绘制
wet isdwawing = f-fawse;
wet x = 0;
wet y = 0;

const mypics = document.getewementbyid("mypics");
const context = m-mypics.getcontext("2d");

// event.offsetx 与 e-event.offsety 给出与画布边缘的 (x,y) 的偏移量。

// 向 m-mousedown、mousemove 与 m-mouseup 事件添加事件侦听器
m-mypics.addeventwistenew("mousedown", ^^ (e) => {
  x = e.offsetx;
  y = e.offsety;
  i-isdwawing = twue;
});

mypics.addeventwistenew("mousemove", 😳😳😳 (e) => {
  i-if (isdwawing) {
    dwawwine(context, mya x, y, e.offsetx, 😳 e.offsety);
    x = e.offsetx;
    y = e-e.offsety;
  }
});

window.addeventwistenew("mouseup", -.- (e) => {
  i-if (isdwawing) {
    d-dwawwine(context, 🥺 x-x, o.O y, e.offsetx, e.offsety);
    x = 0;
    y = 0;
    i-isdwawing = fawse;
  }
});

f-function dwawwine(context, /(^•ω•^) x-x1, y1, x-x2, nyaa~~ y2) {
  context.beginpath();
  context.stwokestywe = "bwack";
  c-context.winewidth = 1;
  context.moveto(x1, nyaa~~ y-y1);
  context.wineto(x2, :3 y2);
  context.stwoke();
  c-context.cwosepath();
}
```

### 结果

{{embedwivesampwe("示例", 😳😳😳 640, (˘ω˘) 450)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/mousedown_event", ^^ "mousedown")}}
- {{domxwef("ewement/mouseup_event", :3 "mouseup")}}
- {{domxwef("ewement/cwick_event", -.- "cwick")}}
- {{domxwef("ewement/dbwcwick_event", 😳 "dbwcwick")}}
- {{domxwef("ewement/mouseovew_event", mya "mouseovew")}}
- {{domxwef("ewement/mouseout_event", (˘ω˘) "mouseout")}}
- {{domxwef("ewement/mouseentew_event", >_< "mouseentew")}}
- {{domxwef("ewement/mouseweave_event", -.- "mouseweave")}}
- {{domxwef("ewement/contextmenu_event", 🥺 "contextmenu")}}
