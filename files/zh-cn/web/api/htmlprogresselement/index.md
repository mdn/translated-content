---
title: HTMLProgressElement
slug: Web/API/HTMLProgressElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

**`HTMLProgressElement`** 接口提供用于操作 {{HTMLElement("progress")}} 元素布局和呈现的特定属性和方法（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用）。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLProgressElement.max")}}
  - : 一个反映同名内容属性的 `double` 值，仅限于大于零的数字。其默认值是 `1.0`。
- {{domxref("HTMLProgressElement.position")}} {{ReadOnlyInline}}
  - : 返回一个 `double` 值，返回当前值（`value`）除以最大值（`max`）的结果；如果进度条是不确定的进度条，它返回 `-1`。
- {{domxref("HTMLProgressElement.value")}}
  - : 一个反映当前值的 `double` 值；如果进度条是不确定的进度条，它返回 `0`。
- {{domxref("HTMLProgressElement.labels")}} {{ReadOnlyInline}}
  - : 返回包含此元素的 {{HTMLElement("label")}} 元素列表的 {{domxref("NodeList")}} 。

## 实例方法

_无特定方法；从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("progress")}}
