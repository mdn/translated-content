---
title: Element：pointercancel 事件
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: 827686870ee416d6f01739a48931618b61f4ce4e
---

{{APIRef("Pointer Events")}}

**`pointercancel`** 事件会在浏览器判断可能不再会有指针事件发生，或者在激发 {{domxref("Element/pointerdown_event", "pointerdown")}} 事件后指针被用于平移、缩放或滚动来操作视口时激发。

一些会触发 `pointercancel` 事件的情况的例子：

- 发生了取消指针活动的硬件事件。包括用户使用应用切换界面或移动设备上的“home”键切换了应用程序。
- 设备的屏幕方向在指针活动期间发生了改变。
- 浏览器认为用户的指针输入始于意外。例如，设备支持防手掌误触功能以防止用户使用触控笔时手倚靠在屏幕上而意外触发事件。
- CSS {{cssxref("touch-action")}} 属性打断了继续输入。
- 用户同时使用了太多指针进行交互，浏览器会在现有全部指针上激发此事件（即使用户仍在触摸屏幕）。

> [!NOTE]
> 在激发 `pointercancel` 事件后，浏览器也会发送 {{domxref("Element/pointerout_event", "pointerout")}} 事件，接着再发送 {{domxref("Element/pointerleave_event", "pointerleave")}} 事件。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用此事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointercancel", (event) => { })

onpointercancel = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

使用 `addEventListener()`：

```js
const para = document.querySelector("p");

para.addEventListener("pointercancel", (event) => {
  console.log("指针事件取消了");
});
```

使用 `onpointercancel` 事件处理器属性：

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("指针事件取消了");
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
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
