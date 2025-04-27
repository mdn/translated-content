---
title: HTMLModElement
slug: Web/API/HTMLModElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLModElement`** 接口提供特定的属性（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用），用于操作修改元素，即 {{HTMLElement("del")}} 和 {{HTMLElement("ins")}}。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLModElement.cite")}}
  - : 一个字符串，反映 [`cite`](/zh-CN/docs/Web/HTML/Reference/Elements/del#cite) HTML 属性，包含解释更改的资源的 URI。
- {{domxref("HTMLModElement.dateTime")}}
  - : 一个字符串，反映 [`datetime`](/zh-CN/docs/Web/HTML/Reference/Elements/del#datetime) HTML 属性，包含表示更改时间戳的日期和时间的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("ins")}}、{{HTMLElement("del")}}。
