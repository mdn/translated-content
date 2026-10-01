---
title: Element：pointermove 事件
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: 827686870ee416d6f01739a48931618b61f4ce4e
---

{{APIRef("Pointer Events")}}

`pointermove` 事件会在指针坐标变化，并且没有被浏览器的[触摸动作](/zh-CN/docs/Web/CSS/Reference/Properties/touch-action)[取消](/zh-CN/docs/Web/API/Element/pointercancel_event)时被激发。此事件也会在指针的其他属性变化时被激发，但前提是此变化不会产生其他指针事件。此种情况包括指针的压力、侧向压力、倾斜、轴向旋转、接触面（宽度和高度）和[组合按键](https://w3c.github.io/pointerevents/#dfn-chorded-buttons)的任何变化。

如果事件循环中存在具有相同指针 ID 的其他未被派发的 `pointermove` 事件，`pointermove` 事件可能会被合并。如果事件被合并了，被派发的事件的 `target` 会与最后一个被合并的事件相同。关于被合并事件的信息，参见 {{domxref("PointerEvent.getCoalescedEvents()")}} 文档。

此事件与 {{domxref("Element/mousemove_event", "mousemove")}} 事件非常相似，但拥有更多特性。此事件无论有无指针按键被按下都会触发。此事件能够以极高的速率激发，取决于用户移动指针的速度、机器的运行速度以及其他正在运行的任务和进程等。

{{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} 与 `pointermove` 的区别在于它们的激发频率。浏览器可能会推迟 `pointermove` 事件以改善性能，而 `pointerrawupdate` 事件则是浏览器能多快频率产生就多快频率派发。对于大多数使用场景，更推荐选择 `pointermove` 来避免性能问题。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用此事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointermove", (event) => { })

onpointermove = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 用法备注

{{domxref("PointerEvent")}} 类型的事件提供了全部你需要知道的关于用户与指针设备交互的信息，包括位置、移动距离、按钮状态等等。

## 示例

使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 为 `pointermove` 事件添加一个处理器：

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("指针移动了");
});
```

也可以使用 `onpointermove` 事件处理器属性：

```js
const para = document.querySelector("p");

para.onpointermove = (event) => {
  console.log("指针移动了");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件
  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mousemove_event", "mousemove")}}
