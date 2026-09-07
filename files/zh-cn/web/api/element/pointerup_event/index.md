---
title: Element：pointerup 事件
short-title: pointerup
slug: Web/API/Element/pointerup_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

**`pointerup`** 事件在指针变为非活动状态时触发。请注意，也有可能收到 [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event) 事件，而非本事件。

这一行为与 {{domxref("Element/mouseup_event", "mouseup")}} 事件不同。使用物理鼠标时，每当释放鼠标上的任意按钮都会触发 `mouseup` 事件。而 `pointerup` 事件仅在释放最后一个按钮时触发；若仍按住其他按钮，释放某个按钮并不会触发 `pointerup` 事件。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointerup", (event) => { })

onpointerup = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

para.addEventListener("pointerup", (event) => {
  console.log("指针抬起");
});
```

使用 `onpointerup` 事件处理器属性：

```js
const para = document.querySelector("p");

para.onpointerup = (event) => {
  console.log("指针抬起");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件
  - {{domxref("Element/gotpointercapture_event", "gotpointercapture")}}
  - {{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
  - {{domxref("Element/pointerover_event", "pointerover")}}
  - {{domxref("Element/pointerenter_event", "pointerenter")}}
  - {{domxref("Element/pointerdown_event", "pointerdown")}}
  - {{domxref("Element/pointermove_event", "pointermove")}}
  - {{domxref("Element/pointercancel_event", "pointercancel")}}
  - {{domxref("Element/pointerout_event", "pointerout")}}
  - {{domxref("Element/pointerleave_event", "pointerleave")}}
  - {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - {{domxref("Element/mouseup_event", "mouseup")}}
