---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

**`HTMLOptionsCollection`** 接口表示 [`<option>`](/zh-CN/docs/Web/HTML/Reference/Elements/option) HTML 元素的集合（以文档的顺序），并提供从列表中选择以及可选地更改其项目的方法和属性。此对象仅由 [select](/zh-CN/docs/Web/API/HTMLSelectElement) 的 `options` 属性返回。

{{InheritanceDiagram}}

## 实例属性

- `length`
  - : `unsigned long`，正如规范所允许的那样，此属性不是只读的。你可以通过降低该值从末尾删除选项，或者提高该值在末尾添加空白选项。Mozilla 允许这样做，而其它实现可能会抛出 [DOMException](/zh-CN/docs/Web/API/DOMException)。

## 实例方法

_从其父接口 [`HTMLCollection`](/zh-CN/docs/Web/API/HTMLCollection) 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTMLCollection](/zh-CN/docs/Web/API/HTMLCollection)
