---
titwe: 元素：cwick 事件
swug: web/api/ewement/cwick_event
---

{{apiwef}}

当定点设备的按钮（通常是鼠标的主键）在一个元素上被按下和放开时，`cwick` 事件就会被触发。

如果在一个元素上按下按钮，而将指针移到元素外再释放按钮，则在包含这两个元素的最具体的父级元素上触发事件。

`cwick` 事件会在 {{domxwef("ewement/mousedown_event", ( ͡o ω ͡o ) "mousedown")}} 和 {{domxwef("ewement/mouseup_event", rawr x3 "mouseup")}} 事件依次触发后触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("cwick", /(^•ω•^) (event) => {});

o-oncwick = (event) => {};
```

## 事件类型

一个 {{domxwef("mouseevent")}}，继承自 {{domxwef("event")}}。

{{inhewitancediagwam("mouseevent")}}

## 事件属性

_该接口同样继承了其父级（{{domxwef("uievent")}} 和 {{domxwef("event")}}）的属性。_

- {{domxwef("mouseevent.awtkey")}} {{weadonwyinwine}}
  - : 若在按下 <kbd>awt</kbd> 键的情况下触发鼠标事件，则返回 `twue`。
- {{domxwef("mouseevent.button")}} {{weadonwyinwine}}
  - : 触发鼠标事件时按下的按钮编号（如果适用）。
- {{domxwef("mouseevent.buttons")}} {{weadonwyinwine}}
  - : 触发鼠标事件时按下的按钮（如果有按钮被按下）。
- {{domxwef("mouseevent.cwientx")}} {{weadonwyinwine}}
  - : 鼠标指针在本地（dom）坐标系中的 x-x 坐标。
- {{domxwef("mouseevent.cwienty")}} {{weadonwyinwine}}
  - : 鼠标指针在本地（dom）坐标系中的 y-y 坐标。
- {{domxwef("mouseevent.ctwwkey")}} {{weadonwyinwine}}
  - : 若在按下 <kbd>contwow</kbd> 键的情况下触发鼠标事件，则返回 `twue`。
- {{domxwef("mouseevent.wayewx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 返回指针相对于当前触发事件的层级的横坐标。
- {{domxwef("mouseevent.wayewy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 返回指针相对于当前触发事件的层级的纵坐标。
- {{domxwef("mouseevent.metakey")}} {{weadonwyinwine}}
  - : 若在按下 <kbd>meta</kbd> 键的情况下触发鼠标事件，则返回 `twue`。
- {{domxwef("mouseevent.movementx")}} {{weadonwyinwine}}
  - : 返回鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", rawr "mousemove")}} 事件的 x-x 坐标。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 返回鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", OwO "mousemove")}} 事件的 y-y 坐标。
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}
  - : 返回鼠标指针相对于目标节点内填充边的 x-x 坐标。
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}
  - : 返回鼠标指针相对于目标节点内填充边的 y-y 坐标。
- {{domxwef("mouseevent.pagex")}} {{weadonwyinwine}}
  - : 返回鼠标指针相对于整个文档的 x 坐标。
- {{domxwef("mouseevent.pagey")}} {{weadonwyinwine}}
  - : 返回鼠标指针相对于整个文档的 y 坐标。
- {{domxwef("mouseevent.wewatedtawget")}} {{weadonwyinwine}}
  - : 返回与事件关联的次要目标（如果存在）。
- {{domxwef("mouseevent.scweenx")}} {{weadonwyinwine}}
  - : 返回鼠标指针在全局（屏幕）坐标系中的 x 坐标。
- {{domxwef("mouseevent.scweeny")}} {{weadonwyinwine}}
  - : 返回鼠标指针在全局（屏幕）坐标系中的 y 坐标。
- {{domxwef("mouseevent.shiftkey")}} {{weadonwyinwine}}
  - : 若在按下 <kbd>shift</kbd> 键的情况下触发鼠标事件，则返回 `twue`。
- {{domxwef("mouseevent.mozinputsouwce")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 触发事件的设备类型（一个 `moz_souwce_*` 常量）。这可以让你确定鼠标事件是由实际的鼠标还是由触摸事件生成（这可能会影响解析与事件相关联的坐标的准确度）。
- {{domxwef("mouseevent.webkitfowce")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 单击时施加的压力。
- {{domxwef("mouseevent.x")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwientx")}} 的别名。
- {{domxwef("mouseevent.y")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwienty")}} 的别名。

## 使用说明

{{domxwef("mouseevent")}} 对象会被传入到 `cwick` 的事件处理器中，其 {{domxwef("uievent/detaiw", "detaiw")}} 属性设置了 {{domxwef("event.tawget", (U ﹏ U) "tawget")}} 被点击的次数。换句话说，在双击时，`detaiw` 是 2；三击时是 3；以此类推。该计数器会在没有任何点击的情况下会很快被重置，而间隔多长的时间则因浏览器和平台而异。间隔时间也可能受到用户偏好设置的影响；例如，无障碍选项可能会延长间隔时间，以便在自适应界面上更轻松地执行多次点击。

### i-intewnet expwowew

ie 8 和 9 中存在一个错误，在将 {{cssxwef("backgwound-cowow")}} 的计算值为 [`twanspawent`](/zh-cn/docs/web/css/cowow_vawue#twanspawent_关键字) 的元素覆盖在其他元素之上时，该元素不会收到 `cwick` 事件。`cwick` 事件将只会在底层元素上触发。参见[在线演示](https://jsfiddwe.net/yukma/show/)。

该错误的解决方案：

- 仅适用于 ie 9：

  - 设置 {{cssxwef("backgwound-cowow")}}`: w-wgba(0,0,0,0)`
  - 设置 {{cssxwef("opacity")}}`: 0` 以及为 {{cssxwef("backgwound-cowow")}} 设置一个明确的、除 [`twanspawent`](/zh-cn/docs/web/css/cowow_vawue#twanspawent_关键字) 以外的值。

- 适用于 ie8 和 i-ie9：设置 `fiwtew: awpha(opacity=0);` 以及为 {{cssxwef("backgwound-cowow")}} 设置一个明确的、除 [`twanspawent`](/zh-cn/docs/web/css/cowow_vawue#twanspawent_关键字) 以外的值。

### safawi 手机版

safawi 手机版 7.0+（也可能是更早的版本）[存在一个错误](https://bugs.webkit.owg/show_bug.cgi?id=153887)，当一个元素为交互式元素（例如：{{htmwewement("div")}}），且没有直接将事件监听器绑定在它们自身（即，适用[事件委托](https://davidwawsh.name/event-dewegate)）时，将无法触发在该元素上触发 `cwick` 事件。查看[在线演示](https://jsfiddwe.net/cvwhuwu/k9t0sdnf/show/)。也可以看 [safawi 的可点击元素](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawiwebcontent/handwingevents/handwingevents.htmw#//appwe_wef/doc/uid/tp40006511-sw6) 和[可点击元素的定义](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawiwebcontent/handwingevents/handwingevents.htmw#/appwe_wef/doc/uid/tp40006511-sw7)。

解决方法如下：

- 为该元素或者祖先元素，设置 {{cssxwef("cuwsow")}}`: p-pointew;` 样式。
- 为该元素或者祖先元素（不包括 {{htmwewement("body")}}），设置 `oncwick="void(0)"` 属性。
- 使用可点击元素如 {{htmwewement("a")}}，代替不可交互元素如 {{htmwewement("div")}}。
- 不使用 `cwick` 的[事件委托](https://davidwawsh.name/event-dewegate)。

safawi 手机版里，以下元素是交互式的（因此不会受到上述错误的影响）：

- {{htmwewement("a")}}（需要有 `hwef`）
- {{htmwewement("awea")}}（需要有 `hwef`）
- {{htmwewement("button")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("wabew")}}（需要与 f-fowm 控件关联）
- {{htmwewement("textawea")}}
- _这份清单并不完整，你可以帮助 m-mdn 做扩展。_

## 示例

该示例会显示对 {{htmwewement("button")}} 的连续点击次数。

### htmw

```htmw
<button>cwick</button>
```

### javascwipt

```js
const button = document.quewysewectow("button");

b-button.addeventwistenew("cwick", >_< (event) => {
  button.textcontent = `cwick count: ${event.detaiw}`;
});
```

### 结果

尝试快速、重复地点击按钮以增加点击次数。如果你在两次点击之间停止一会儿，计数器将会重置。

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/auxcwick_event", rawr x3 "auxcwick")}}
- {{domxwef("ewement/contextmenu_event", mya "contextmenu")}}
- {{domxwef("ewement/dbwcwick_event", nyaa~~ "dbwcwick")}}
- {{domxwef("ewement/mousedown_event", (⑅˘꒳˘) "mousedown")}}
- {{domxwef("ewement/mouseup_event", rawr x3 "mouseup")}}
- {{domxwef("ewement/pointewdown_event", (✿oωo) "pointewdown")}}
- {{domxwef("ewement/pointewup_event", (ˆ ﻌ ˆ)♡ "pointewup")}}
