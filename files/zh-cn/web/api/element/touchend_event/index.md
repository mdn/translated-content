---
title: Element：touchend 事件
slug: Web/API/Element/touchend_event
l10n:
  sourceCommit: 55847a077ad70782d775374c7f55679ef8d26657
---

{{APIRef}}

`touchend` 事件在一个或多个触点从触控平面上移开时触发。注意，也有可能触发 [`touchcancel`](/zh-CN/docs/Web/API/Element/touchcancel_event) 事件。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("touchend", (event) => {});

ontouchend = (event) => {};
```

## 事件类型

{{domxref("TouchEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("TouchEvent")}}

## 事件属性

_此接口继承其父接口 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 的属性。_

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : 一个表示触摸事件触发时是否按下了 alt 键的布尔值。
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : 表示在上一次触摸事件和本次触摸事件之间发生了状态变化的所有 {{domxref("Touch")}} 对象的 {{domxref("TouchList")}}。
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 一个表示触摸事件触发时是否按下了 Ctrl 键的布尔值。
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : 一个表示触摸事件触发时是否按下了 meta 键的布尔值。
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 一个表示触摸事件触发时是否按下了 shift 键的布尔值。
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : 当前与触摸表面接触**并且**在作为事件目标的同一元素上开始的所有 {{domxref("Touch")}} 对象的 {{domxref("TouchList")}}。
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : 表示当前与触摸表面接触（无论目标或状态是否发生变化）的所有 {{domxref("Touch")}} 对象的 {{domxref("TouchList")}}。
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 自事件开始以来的旋转角度变化（以度为单位）。正值表示顺时针旋转；负值表示逆时针旋转。初始值：`0.0`。
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 自事件开始以来的两个触点之间的距离。以事件开始时的两个触点之间的初始距离的浮点倍数表示。小于 1.0 的值表示向内捏（缩小）。大于 1.0 的值表示向外放（放大）。初始值：`1.0`。

## 示例

这些事件的代码示例可在专门的[触摸事件](/zh-CN/docs/Web/API/Touch_events)页面中找到。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [触摸事件](/zh-CN/docs/Web/API/Touch_events)
