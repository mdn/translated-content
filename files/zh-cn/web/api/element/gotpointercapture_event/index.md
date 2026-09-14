---
title: Element：gotpointercapture 事件
short-title: gotpointercapture
slug: Web/API/Element/gotpointercapture_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

**`gotpointercapture`** 事件在元素使用 [`setPointerCapture()`](/zh-CN/docs/Web/API/Element/setPointerCapture) 捕获指针时触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("gotpointercapture", (event) => { })

ongotpointercapture = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

本示例获取一个 `<p>` 元素，并监听 `gotpointercapture` 事件。随后在 `pointerdown` 事件中对该元素调用 `setPointerCapture()`，从而触发 `gotpointercapture`。

```js
const para = document.querySelector("p");

para.addEventListener("gotpointercapture", () => {
  console.log("我被捕获了！");
});

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

同一示例，使用 `ongotpointercapture` 事件处理器属性：

```js
const para = document.querySelector("p");

para.ongotpointercapture = () => {
  console.log("我被捕获了！");
};

para.addEventListener("pointerdown", (event) => {
  para.setPointerCapture(event.pointerId);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件
  - {{domxref("Element/lostpointercapture_event", "lostpointercapture")}}
  - {{domxref("Element/pointerover_event", "pointerover")}}
  - {{domxref("Element/pointerenter_event", "pointerenter")}}
  - {{domxref("Element/pointerdown_event", "pointerdown")}}
  - {{domxref("Element/pointermove_event", "pointermove")}}
  - {{domxref("Element/pointerup_event", "pointerup")}}
  - {{domxref("Element/pointercancel_event", "pointercancel")}}
  - {{domxref("Element/pointerout_event", "pointerout")}}
  - {{domxref("Element/pointerleave_event", "pointerleave")}}
  - {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}
