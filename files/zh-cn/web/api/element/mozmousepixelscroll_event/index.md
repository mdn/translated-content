---
title: Element：MozMousePixelScroll 事件
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}{{deprecated_header}}{{Non-standard_header}}

**`MozMousePixelScroll`** 事件是仅 Firefox 支持的、*非标准*且*已废弃*的事件，会在操作鼠标滚轮或类似设备时于 {{domxref("Element")}} 上异步触发。它由 {{domxref("MouseScrollEvent")}} 接口表示。

> [!NOTE]
> 请勿使用该非标准且已废弃的事件。应始终使用标准 {{domxref("Element.wheel_event", "wheel")}} 事件。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("MozMousePixelScroll", (event) => { })

onMozMousePixelScroll = (event) => { }
```

## 事件类型

{{domxref("WheelEvent")}}，继承自 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("WheelEvent")}}

## 获取滚动距离

事件的 {{domxref("UIEvent/detail", "detail")}} 属性以行为单位表示滚动距离：负值表示向下或向右滚动，正值表示向上或向左滚动。

如果平台原生鼠标滚轮事件以行或页为单位表示滚动距离，则 `detail` 的值由该值及包含目标元素的最近可滚动祖先元素的行高或页面宽高计算。

> [!NOTE]
> 在 macOS 上，滚动距离（因此也包括 `detail` 的值）根据加速后的滚动距离计算。

事件合法时，`detail` 的值绝不会为 0。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseScrollEvent")}}
- Gecko 的旧式按行或页滚动事件：`DOMMouseScroll`
- 非 Gecko 浏览器的旧式鼠标滚轮事件：`mousewheel`
- 标准化滚轮事件：`wheel`
