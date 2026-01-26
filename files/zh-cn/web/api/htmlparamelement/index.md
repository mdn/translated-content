---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLParamElement`** 接口提供用于操作 {{HTMLElement("param")}} 元素（表示一对充当 {{HTMLElement("object")}} 元素的参数的键和值）的特定属性（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用）。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLParamElement.name")}} {{Deprecated_Inline}}
  - : 表示参数名称的字符串。它反映 [`name`](/zh-CN/docs/Web/HTML/Reference/Elements/param#name) 属性。
- {{domxref("HTMLParamElement.value")}} {{Deprecated_Inline}}
  - : 表示与参数关联的值的字符串。它反映 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/param#value) 属性。
- {{domxref("HTMLParamElement.type")}} {{Deprecated_Inline}}
  - : 当 `valueType` 具有 `"ref"` 值时，表示包含参数类型的字符串。它反映 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/param#type) 属性。
- {{domxref("HTMLParamElement.valueType")}} {{Deprecated_Inline}}
  - : 包含 `value` 类型的字符串。它反映 [valuetype](/zh-CN/docs/Web/HTML/Reference/Elements/param#valuetype) 属性，且是以下值之一：`"data"`、`"ref"` 或 `"object"`。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("param")}}
