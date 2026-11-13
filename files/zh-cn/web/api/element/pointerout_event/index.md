---
title: Element：pointerout 事件
short-title: pointerout
slug: Web/API/Element/pointerout_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Pointer Events")}}

`pointerout` 事件会因为某些原因触发，包括：定点设备移出了元素的*命中测试*边界；在不支持悬停的设备上触发了 {{domxref("Element/pointerup_event", "pointerup")}} 事件（参见 {{domxref("Element/pointerup_event", "pointerup")}}）；在触发 {{domxref("Element/pointercancel_event", "pointercancel")}} 事件后被触发（参见 {{domxref("Element/pointercancel_event", "pointercancel")}}）；触控笔离开了数位板可探测的悬停范围。

`pointerout` 事件具有和 {{domxref("Element/mouseout_event", "mouseout")}} 事件相同的问题。如果目标元素拥有子元素，`pointerout` 和 `pointerover` 事件在指针移动到这些子元素的边界之上时也会激发，而不仅仅是在目标元素本身上激发。通常来说，{{domxref("Element/pointerenter_event", "pointerenter")}} 和 {{domxref("Element/pointerleave_event", "pointerleave")}} 事件的行为更合理，因为它们不受指针移入子元素的影响。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 中使用此事件名称：

```js-nolint
addEventListener("pointerout", (event) => { })
```

或者，对接口的[事件处理器属性](/zh-CN/docs/Web/API/Document_Object_Model/Events#使用_onevent_属性)赋值：

```js-nolint
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

使用 `onpointerout` 事件处理器属性（但请注意，这会替换掉之前使用 `onpointerout` 添加的其他事件监听器，如存在的话）：

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
