---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLOListElement`** 接口提供特定的属性（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用），用于操作有序列表元素。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLOListElement.reversed")}}
  - : 一个布尔值，反映 [`reversed`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#reversed) 并定义是否序号是递减（即它的值是 `true`），还是递增（`false`）。
- {{domxref("HTMLOListElement.start")}}
  - : 一个 `long` 值，反映 [`start`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#start) 并定义列表第一个元素的开始序号的值。
- {{domxref("HTMLOListElement.type")}}
  - : 一个字符串，反映 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#type) 并定义要用于显示的标记种类，它可以具有以下的值：
    - `'1'` 意味着使用十进制数字：`1`、`2`、`3`、`4`、`5`、…
    - `'a'` 意味着使用小写拉丁字母：`a`、`b`、`c`、`d`、`e`、…
    - `'A'` 意味着使用大写拉丁字母：`A`、`B`、`C`、`D`、`E`、…
    - `'i'` 意味着使用小写拉丁数字：`i`、`ii`、`iii`、`iv`、`v`、…
    - `'I'` 意味着使用大写拉丁数字：`I`、`II`、`III`、`IV`、`V`、…

- {{domxref("HTMLOListElement.compact")}} {{deprecated_inline}}
  - : 一个布尔值，指示应减小列表项之间的间距，此属性仅反映 [`compact`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#compact) 属性，不考虑现代页面中用于该行为的 {{cssxref("line-height")}} CSS 属性。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{ HTMLElement("ol") }}
