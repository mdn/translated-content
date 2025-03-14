---
title: HTMLHtmlElement
slug: Web/API/HTMLHtmlElement
---

{{ APIRef("HTML DOM") }}

**`HTMLHtmlElement`** 接口是给定 HTML 文档的根节点。它继承了 {{domxref("HTMLElement")}} 对象的属性和方法。

你可以通过读取 {{domxref("document.documentElement")}} 属性的值来获取文档的 `HTMLHtmlElement` 对象。

{{InheritanceDiagram(600,120)}}

## 属性

_继承 {{domxref("HTMLElement")}}的属性。_

- {{domxref("HTMLHtmlElement.version")}} {{Deprecated_Inline}}
  - : 这是一个用于表示管理此文档的**HTML 文档类型定义（DTD）**版本的 {{domxref("DOMString")}}。但此属性不应再使用，因为它不符合要求。请仅忽略它。

## 方法

_没有明确的方法；可从父项继承——{{domxref("HTMLElement")}}。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 还可以看看

- 实现此接口的 HTML 元素 : {{HTMLElement("html")}}。
