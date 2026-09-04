---
title: HTMLLIElement：value 属性
short-title: value
slug: Web/API/HTMLLIElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLIElement")}} 接口的 **`value`** 属性表示该*列表项元素*在给定的 {{HTMLElement("ol")}} 中的序数位置。该值可以小于 `0`。如果 {{HTMLElement("li")}} 元素不是 {{HTMLElement("ol")}} 元素的子元素，则该属性无意义。

该属性反映了相应 {{htmlelement("li")}} 元素的 [`value`](/zh-CN/docs/Web/HTML/Reference/Elements/li#value) 属性。如果 `<li>` 元素未指定 `value` 内容属性，即便该元素在渲染时可能具有默认分配的序列序数值，该属性仍将默认返回 `0`。

## 值

整型。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
