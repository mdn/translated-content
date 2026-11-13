---
title: Element：pointerdown 事件
short-title: pointerdown
slug: Web/API/Element/pointerdown_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointerdown` 事件会在指针变为活动状态时触发。对于鼠标，其会在设备由没有按键按下变为至少有一个按键被按下时触发。对于触控设备，其会在数位板发生物理接触时被触发。对于笔，其会在触控笔与数位板物理接触时触发。

此事件的行为不同于 {{domxref("Element/mousedown_event", "mousedown")}} 事件。当使用物理鼠标时，只要鼠标上的任何按键被按下就会触发 `mousedown` 事件。`pointerdown` 事件仅在第一个按键被按下时触发，后续按下按键不会触发 `pointerdown` 事件。

> [!NOTE]
> 对于允许[直接操控](https://w3c.github.io/pointerevents/#dfn-direct-manipulation)的触屏浏览器，`pointerdown` 事件会触发[隐式指针捕获](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture)，会导致目标捕获后续所有指针事件，就好像这些事件发生在捕获目标上一样。因此，`pointerover`、`pointerenter`、`pointerleave` 和 `pointerout` 在设置此种捕获后将**不再触发**。此种捕获可以通过在目标元素上调用 {{domxref('element.releasePointerCapture')}} 手动释放，或者其会在 `pointerup` 或 `pointercancel` 事件后被隐式释放。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 中使用此事件名称：

```js-nolint
addEventListener("pointerdown", (event) => { })
```

或者，对接口的[事件处理器属性](/zh-CN/docs/Web/API/Document_Object_Model/Events#使用_onevent_属性)赋值：

```js-nolint
onpointerdown = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

para.addEventListener("pointerdown", (event) => {
  console.log("指针按下事件");
});
```

使用 `onpointerdown` 事件处理器属性（但请注意，这会替换掉之前使用 `onpointerdown` 添加的其他事件监听器，如存在的话）：

```js
const para = document.querySelector("p");

para.onpointerdown = (event) => {
  console.log("指针按下事件");
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
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mousedown_event", "mousedown")}}
