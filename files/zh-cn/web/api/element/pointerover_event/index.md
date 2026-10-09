---
title: Element：pointerover 事件
short-title: pointerover
slug: Web/API/Element/pointerover_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

`pointerover` 事件会在定点设备移入元素的命中测试边界时被激发。

`pointerover` 事件具有和 {{domxref("Element/mouseover_event", "mouseover")}} 事件相同的问题。如果目标元素拥有子元素，`pointerout` 和 `pointerover` 事件在指针移动到这些子元素的边界之上时也会激发，而不仅仅是在目标元素本身上激发。通常来说，{{domxref("Element/pointerenter_event", "pointerenter")}} 和 {{domxref("Element/pointerleave_event", "pointerleave")}} 事件的行为更合理，因为它们不受指针移入子元素的影响。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用此事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointerover", (event) => { })

onpointerover = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

para.addEventListener("pointerover", (event) => {
  console.log("指针移入了");
});
```

使用 `onpointerover` 事件处理器属性：

```js
const para = document.querySelector("p");

para.onpointerover = (event) => {
  console.log("指针移入了");
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
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseover_event", "mouseover")}}
