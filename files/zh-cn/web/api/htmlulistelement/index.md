---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLUListElement`** 接口提供特定的属性（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用），用于操作无序列表（{{HTMLElement("ul")}}）元素。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLUListElement.type")}} {{deprecated_inline}}
  - : 一个字符串，反映 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/ul#type) 属性并定义要用于显示的标记种类。这些值依赖于浏览器，从未标准化。
- {{domxref("HTMLUListElement.compact")}} {{deprecated_inline}}
  - : 一个布尔值，指示应减小列表项之间的间距，此属性仅反映 [`compact`](/zh-CN/docs/Web/HTML/Reference/Elements/ul#compact) 属性，不考虑现代页面中用于该行为的 {{cssxref("line-height")}} CSS 属性。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("ul")}}
