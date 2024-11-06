---
title: Element：touchstart 事件
slug: Web/API/Element/touchstart_event
---

{{APIRef}}

`touchstart` 事件在一个或多个触点与触控设备表面接触时被触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("touchstart", (event) => {});

ontouchstart = (event) => {};
```

## 事件类型

一个 {{domxref("TouchEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("TouchEvent")}}

## 事件属性

_此接口从其父接口 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承属性。_

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示在事件触发时 Alt 键是否被按下。
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : 一个包含所有的 {{domxref("Touch")}} 对象的 {{domxref("TouchList")}}，这些 `Touch` 对象表示在前一个 touch 事件和当前的事件之间，状态发生变化的独立触点。
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示在事件触发时控制键是否被按下。
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示在事件触发时 Meta 键是否被按下。
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示在事件触发时 Shift 键是否被按下。
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : 一个包含所有的 {{domxref("Touch")}} 对象的 {{domxref("TouchList")}}，这些 `Touch` 对象表示当前与触摸表面接触的触点，且触点起始于事件发生的目标元素。
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : 一个包含所有的 {{domxref("Touch")}} 对象的 {{domxref("TouchList")}}，这些 `Touch` 对象表示当前与表面接触的触点（不论事件目标或状态变化）。
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 自事件开始以来的旋转角度变化（以度为单位）。正值表示顺时针旋转；负值表示逆时针旋转。初始值为 `0.0`。
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 自事件开始以来，两个数值之间的距离（缩放倍数）。表示事件开始至现在，触点距离的缩放倍数（浮点数）。小于 1.0 表示向内收缩（缩小），大于 1.0 表示向外松开（放大）。初始值为 `1.0`。

## 示例

这些事件的代码示例可在这个专用页面查看：[Touch 事件](/zh-CN/docs/Web/API/Touch_events)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Touch 事件](/zh-CN/docs/Web/API/Touch_events)
- 以 {{domxref("Document")}} 为目标的相同事件：{{domxref("Document/touchstart_event", "touchstart")}}
