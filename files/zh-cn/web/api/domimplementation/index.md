---
title: DOMImplementation
slug: Web/API/DOMImplementation
---

{{ ApiRef("DOM") }}

**`DOMImplementation`** 接口代表了一个对象，这个对象提供了不依赖于任何 document 的方法。这个对象可以通过{{domxref("Document.implementation")}}属性获得

## 属性

_这个接口没有特定的属性，并且也没有继承到任何属性。_

## 方法

_没有继承的方法。_

- {{domxref("DOMImplementation.createDocument()")}}
  - : 创建并返回一个 {{domxref("XMLDocument")}}对象。
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : 创建并返回一个 {{domxref("DocumentType")}}对象。
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : 创建并返回一个 {{domxref("Document")}}对象。
- {{domxref("DOMImplementation.hasFeature()")}}
  - : 返回一个是否支持所给定特性的{{domxref("Boolean")}}值。这个方法是不可靠的，仅用于兼容性目的：除了 SVG 相关的查询，它总是返回 `true`。旧浏览器的行为非常不一致

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
