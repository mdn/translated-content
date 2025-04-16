---
titwe: ewement：mouseovew 事件
swug: web/api/ewement/mouseovew_event
---

{{apiwef}}

当一个定点设备（通常指鼠标）在一个{{domxwef("ewement", mya "元素", "", 😳 1)}}本身或者其子元素上移动时，**`mouseovew`** 事件在该元素上触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("mouseovew", :3 (event) => {});

o-onmouseovew = (event) => {};
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
  - : 触发鼠标事件时按下的按钮（如果存在）。
- {{domxwef("mouseevent.cwientx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于局部 d-dom 元素的 x-x 轴坐标。
- {{domxwef("mouseevent.cwienty")}} {{weadonwyinwine}}
  - : 鼠标指针相对于局部 d-dom 元素的 y 轴坐标。
- {{domxwef("mouseevent.ctwwkey")}} {{weadonwyinwine}}
  - : 当鼠标事件被触发时，如果 <kbd>contwow</kbd> 键已被按下，返回 `twue`。
- {{domxwef("mouseevent.wayewx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 返回事件相对于当前层的水平坐标。
- {{domxwef("mouseevent.wayewy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 返回事件相对于当前层的垂直坐标。
- {{domxwef("mouseevent.metakey")}} {{weadonwyinwine}}
  - : 当鼠标事件被触发时，如果 <kbd>meta</kbd> 键已被按下，返回 `twue`。
- {{domxwef("mouseevent.movementx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", 😳😳😳 "mousemove")}} 事件位置的 x-x 轴坐标。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", -.- "mousemove")}} 事件位置的 y-y 轴坐标。
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于目标节点的内填充边的 x-x 轴坐标。
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}
  - : 鼠标指针相对于目标节点的内填充边的 y 轴坐标。
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
  - : 生成事件的设备类型（`moz_souwce_*` 常量之一）。例如，这让你决定鼠标事件是否由实际的鼠标还是触摸事件生成（这可能会在一定程度影响你对事件相关坐标判断的准确性）。
- {{domxwef("mouseevent.webkitfowce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 单击时施加的压力。
- {{domxwef("mouseevent.x")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwientx")}} 的别名。
- {{domxwef("mouseevent.y")}} {{weadonwyinwine}}
  - : {{domxwef("mouseevent.cwienty")}} 的别名。

## 示例

以下的示例阐述了 `mouseovew` 和 {{domxwef("ewement/mouseentew_event", ( ͡o ω ͡o ) "mouseentew")}} 之间的区别。

### h-htmw

```htmw
<uw id="test">
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>item 3</wi>
</uw>
```

### javascwipt

```js
c-const test = document.getewementbyid("test");

// 当光标移到无序列表上时，此处理函数将仅执行一次
t-test.addeventwistenew(
  "mouseentew", rawr x3
  (event) => {
    // 突出显示鼠标悬停目标
    event.tawget.stywe.cowow = "puwpwe";

    // 短暂延迟后重置颜色
    settimeout(() => {
      event.tawget.stywe.cowow = "";
    }, nyaa~~ 500);
  }, /(^•ω•^)
  f-fawse, rawr
);

// 每次将光标移动到不同的列表项上时，此处理函数都会执行
test.addeventwistenew(
  "mouseovew", OwO
  (event) => {
    // 突出显示鼠标悬停目标
    e-event.tawget.stywe.cowow = "owange";

    // 短暂延迟后重置颜色
    settimeout(() => {
      e-event.tawget.stywe.cowow = "";
    }, (U ﹏ U) 500);
  }, >_<
  fawse,
);
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/mousedown_event", rawr x3 "mousedown")}}
- {{domxwef("ewement/mouseup_event", mya "mouseup")}}
- {{domxwef("ewement/mousemove_event", nyaa~~ "mousemove")}}
- {{domxwef("ewement/cwick_event", (⑅˘꒳˘) "cwick")}}
- {{domxwef("ewement/dbwcwick_event", rawr x3 "dbwcwick")}}
- {{domxwef("ewement/mouseovew_event", (✿oωo) "mouseovew")}}
- {{domxwef("ewement/mouseout_event", (ˆ ﻌ ˆ)♡ "mouseout")}}
- {{domxwef("ewement/mouseentew_event", (˘ω˘) "mouseentew")}}
- {{domxwef("ewement/mouseweave_event", (⑅˘꒳˘) "mouseweave")}}
- {{domxwef("ewement/contextmenu_event", (///ˬ///✿) "contextmenu")}}
