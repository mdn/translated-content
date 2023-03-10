---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
---

{{APIRef("HTML DOM")}}

**`HTMLDetailsElement`** 接口提供了特殊的属性 (除了常规的 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承获得这些属性) 用于操作 {{HTMLElement("details")}} 元素。

{{InheritanceDiagram(600, 120)}}

## 属性

_从其父级 {{domxref("HTMLElement")}} 继承属性._

- {{domxref("HTMLDetailsElement.open")}}
  - : 是一个 {{domxref("boolean")}} 反射 {{htmlattrxref("open", "details")}} HTML 属性，指示是否向用户显示元素的内容 (不包括 {{HTMLElement("summary")}})

## 方法

_没有特定的方法；继承其父方法 {{domxref("HTMLElement")}}._

## 规格

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/interactive-elements.html#htmldetailselement)
- [HTML 5.2 (W3C Proposed Recommendation)](https://www.w3.org/TR/html52/interactive-elements.html#htmldetailselement)

## 浏览器兼容性

{{Compat}}

## 另见

- 实现此接口的 HTML 元素： {{HTMLElement("details")}}
