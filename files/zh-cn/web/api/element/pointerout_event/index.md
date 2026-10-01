---
title: Element：pointerout 事件
short-title: pointerout
slug: Web/API/Element/pointerout_event
l10n:
  sourceCommit: 827686870ee416d6f01739a48931618b61f4ce4e
---

{{APIRef("Pointer Events")}}

`pointerout` 事件会因为某些原因被激发，包括：指针设备移出了元素的*命中测试*边界；在不支持悬停的设备上激发了 {{domxref("Element/pointerup_event", "pointerup")}} 事件（参见 {{domxref("Element/pointerup_event", "pointerup")}}）；在激发 {{domxref("Element/pointercancel_event", "pointercancel")}} 事件后被激发（参见 {{domxref("Element/pointercancel_event", "pointercancel")}}）；触控笔离开了数位板可探测的悬停范围。

`pointerout` 事件具有和 {{domxref("Element/mouseout_event", "mouseout")}} 事件一样的问题。如果目标元素拥有子元素，`pointerout` 和 `pointerover` 事件在指针移入这些子元素时也会被激发，而不仅仅是在移入目标元素本身时被激发。通常来说，{{domxref("Element/pointerenter_event", "pointerenter")}} 和 {{domxref("Element/pointerleave_event", "pointerleave")}} 事件的行为更合理，因为它们不受指针移入子元素的影响。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用此事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointerout", (event) => { })

onpointerout = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

para.addEventListener("pointerout", (event) => {
  console.log("指针移出了");
});
```

使用 `onpointerout` 事件处理器属性：

```js
const para = document.querySelector("p");

para.onpointerout = (event) => {
  console.log("指针移出了");
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
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseout_event", "mouseout")}}
