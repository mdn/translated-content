---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
l10n:
  sourceCommit: 31adb079729df4b96305b4ffa396bd4216042124
---

{{ APIRef("HTML DOM") }}

**`HTMLLegendElement`** 是一个允许访问 {{HTMLElement("legend")}} 元素属性的接口，它从 {{domxref("HTMLElement")}} 接口继承属性和方法。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLLegendElement.align")}} {{deprecated_inline}}
  - : 表示关于表单集对齐的字符串。
- {{domxref("HTMLLegendElement.form")}} {{ReadOnlyInline}}
  - : 表示图例所属的表单的 {{domxref("HTMLFormElement")}}。如果图例有一个 fieldset 元素作为其父元素，则此属性返回与父 **form** 属性相同的值。否则，它将返回 `null`。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("legend")}}
