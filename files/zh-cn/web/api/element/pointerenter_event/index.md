---
title: Element：pointerenter 事件
short-title: pointerenter
slug: Web/API/Element/pointerenter_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

`pointerenter` 事件会在定点设备移入元素以及其子孙元素的命中测试边界时激发，也包括由来自不支持悬停的设备的 {{domxref("Element/pointerdown_event", "pointerdown")}} 事件导致的情形（参见 {{domxref("Element/pointerdown_event", "pointerdown")}}）。另外，`pointerenter` 的运作方式与 {{domxref("Element/mouseenter_event", "mouseenter")}} 相同，并且会在同一时间被派发。视情况，它们也会与 {{domxref("Element/mouseover_event", "mouseover")}} 和 {{domxref("Element/pointerover_event", "pointerover")}} 事件在同一时间被派发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用此事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointerenter", (event) => { })

onpointerenter = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

para.addEventListener("pointerenter", (event) => {
  console.log("指针进入了元素");
});
```

使用 `onpointerenter` 事件处理器属性：

```js
const para = document.querySelector("p");

para.onpointerenter = (event) => {
  console.log("指针进入了元素");
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
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseenter_event", "mouseenter")}}
