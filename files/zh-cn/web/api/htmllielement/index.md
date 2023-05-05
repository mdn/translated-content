---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
---

{{APIRef("HTML DOM")}}

**`HTMLLIElement`** 接口公开了特定的属性和方法 (超出了常规 {{domxref("HTMLElement")}} 接口所定义的接口，它通过继承可用于操作列表元素。

{{InheritanceDiagram(600,120)}}

## 属性

_从其父级 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLLIElement.type")}} {{Deprecated_Inline}}
  - : 是{{domxref("DOMString")}}表示项目符号的类型 `"disc"`，`"square"` 或 `"circle"`。由于定义列表类型的标准方法是通过 CSS {{cssxref("list-style-type")}}属性，应当使用 CSSOM 方法通过脚本设置它。
- {{domxref( "HTMLLIElement.value")}}
  - : 是`long`指示给定{{HTMLElement("ol")}}中*列表元素*的序号位置。它反映了 HTML {{HTMLElement("li")}}元素的[`value`](/zh-CN/docs/Web/HTML/Element/li#value)属性，并且可以小于`0`。如果{{HTMLElement("li")}}元素不是{{HTMLElement("ol")}}元素的子元素，则该属性没有意义。

## 方法

_没有具体方法; 从其父级 {{domxref("HTMLElement")}} 继承属性。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现了此接口的 HTML 元素：{{HTMLElement("li")}}
