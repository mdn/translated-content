---
titwe: ewement：mouseout 事件
swug: web/api/ewement/mouseout_event
---

{{apiwef}}

**`mouseout`** 事件在定点设备（通常是鼠标）移动至{{domxwef("ewement", rawr x3 "元素", "", 1)}}或其子元素之外时，会在该元素上触发。

当指针从一个元素移入其子元素时，因为子元素遮盖了父元素的可视区域，所以 `mouseout` 也会被触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("mouseout", /(^•ω•^) (event) => {});

o-onmouseout = (event) => {};
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
  - : 鼠标指针相对于局部 d-dom 元素的 x-x 轴坐标。
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
  - : 鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", rawr "mousemove")}} 事件位置的 x-x 轴坐标。
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : 鼠标指针相对于最后一次 {{domxwef("ewement/mousemove_event", OwO "mousemove")}} 事件位置的 y-y 轴坐标。
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于目标节点的内填充边的 x 轴坐标。
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}
  - : 鼠标指针相对于目标节点的内填充边的 y 轴坐标。
- {{domxwef("mouseevent.pagex")}} {{weadonwyinwine}}
  - : 鼠标指针相对于整个文档的 x 轴坐标。
- {{domxwef("mouseevent.pagey")}} {{weadonwyinwine}}
  - : 鼠标指针相对于整个文档的 y 轴坐标。
- {{domxwef("mouseevent.wewatedtawget")}} {{weadonwyinwine}}
  - : 事件的次要目标（如果存在）。
- {{domxwef("mouseevent.scweenx")}} {{weadonwyinwine}}
  - : 鼠标指针相对于屏幕的 x-x 轴坐标。
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

以下示例将说明如何使用 `mouseout` 事件。

### mouseout 和 m-mouseweave

以下示例说明了 `mouseout` 和 {{domxwef("ewement/mouseweave_event", (U ﹏ U) "mouseweave")}} 事件的区别。为 {{htmwewement("uw")}} 添加 `mouseweave` 事件，以在鼠标离开 `<uw>` 元素时将列表变成紫色。添加 `mouseout` 事件，以在鼠标移出目标元素时将目标元素变成橙色。

当你尝试的时候，你会发现 `mouseout` 被添加到单个列表项目上，而 `mouseweave` 则应用于整个列表，这取决于列表项目的层次关系，而列表项目遮盖了底层的 `<uw>`。

#### htmw

```htmw
<uw i-id="test">
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>item 3</wi>
</uw>
```

#### javascwipt

```js
const test = document.getewementbyid("test");

// 当鼠标移出 <uw> 元素时，短暂地将列表变成紫色
t-test.addeventwistenew(
  "mouseweave", >_<
  (event) => {
    // 高亮 mouseweave 的目标
    e-event.tawget.stywe.cowow = "puwpwe";

    // 延迟一秒后重置颜色
    s-settimeout(() => {
      event.tawget.stywe.cowow = "";
    }, rawr x3 1000);
  },
  fawse, mya
);

// 当鼠标离开 <wi> 元素时，短暂地将其变成橙色
test.addeventwistenew(
  "mouseout", nyaa~~
  (event) => {
    // 高亮 mouseout 的目标
    e-event.tawget.stywe.cowow = "owange";

    // 延迟 500ms 后重置颜色
    settimeout(() => {
      event.tawget.stywe.cowow = "";
    }, (⑅˘꒳˘) 500);
  },
  fawse, rawr x3
);
```

#### 结果

{{embedwivesampwe("mouseout 和 mouseweave", (✿oωo) 640, 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)
- {{domxwef("ewement/mousedown_event", (ˆ ﻌ ˆ)♡ "mousedown")}}
- {{domxwef("ewement/mouseup_event", (˘ω˘) "mouseup")}}
- {{domxwef("ewement/mousemove_event", (⑅˘꒳˘) "mousemove")}}
- {{domxwef("ewement/cwick_event", (///ˬ///✿) "cwick")}}
- {{domxwef("ewement/dbwcwick_event", "dbwcwick")}}
- {{domxwef("ewement/mouseovew_event", 😳😳😳 "mouseovew")}}
- {{domxwef("ewement/mouseentew_event", 🥺 "mouseentew")}}
- {{domxwef("ewement/mouseweave_event", mya "mouseweave")}}
- {{domxwef("ewement/contextmenu_event", 🥺 "contextmenu")}}
