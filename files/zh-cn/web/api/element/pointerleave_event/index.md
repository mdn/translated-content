---
title: Element：pointerleave 事件
short-title: pointerleave
slug: Web/API/Element/pointerleave_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

`pointerleave` 事件会在定点设备移出元素的命中测试边界时激发。对于触控笔设备，该事件会在触控笔离开数位板可探测的悬停范围时激发。另外，`pointerleave` 的运作方式与 {{domxref("Element/mouseleave_event", "mouseleave")}} 相同，并且会在同一时间被派发。视情况，它们也会与 {{domxref("Element/mouseout_event", "mouseout")}} 和 {{domxref("Element/pointerout_event", "pointerout")}} 事件在同一时间被派发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用此事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointerleave", (event) => { })

onpointerleave = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

para.addEventListener("pointerleave", (event) => {
  console.log("指针离开了元素");
});
```

使用 `onpointerleave` 事件处理器属性：

```js
const para = document.querySelector("p");

para.onpointerleave = (event) => {
  console.log("指针离开了元素");
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
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseleave_event", "mouseleave")}}
