---
title: SVGElement
slug: Web/API/SVGElement
---

{{APIRef("SVG")}}

所有 SVG DOM 类的父类。

{{InheritanceDiagram}}

## 属性

- {{domxref("SVGElement.dataset")}}{{readonlyInline}}
  - : A {{domxref("DOMStringMap")}} object which provides a list of key/value pairs of named data attributes which correspond to [custom data attributes](/zh-CN/docs/Web/Guide/HTML/Using_data_attributes) attached to the element. These can also be defined in SVG using attributes of the form {{SVGAttr("data-*")}}, where `*` is the key name for the pair. This works just like HTML's {{domxref("HTMLElement.dataset")}} property and HTML's {{htmlattrxref("data-*")}} global attribute.
- {{domxref("SVGElement.id")}}{{readonlyInline}}
  - : A {{domxref("DOMString")}} representing the value of the {{SVGAttr("id")}} attribute on the given element, or the empty string if `id` is not present.
- {{domxref("SVGElement.xmlbase")}}{{readonlyInline}}
  - : A {{domxref("DOMString")}} corresponding to the {{SVGAttr("xml:base")}} attribute on the given element.
- {{domxref("SVGElement.ownerSVGElement")}}{{readonlyInline}}
  - : An {{domxref("SVGSVGElement")}} referring to the nearest ancestor {{SVGElement("svg")}} element. `null` if the given element is the outermost `<svg>` element.
- {{domxref("SVGElement.viewportElement")}}{{readonlyInline}}
  - : The {{domxref("SVGElement")}}, which established the current viewport. Often, the nearest ancestor {{SVGElement("svg")}} element. `null` if the given element is the outermost `<svg>` element.

## 方法

_`SVGElement` 类本身没有方法，但拥有从父类 {{domxref("Element")}} 继承的方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- HTML {{htmlattrxref("data-*")}} 属性
- SVG {{SVGAttr("data-*")}} 属性
- [使用数据属性](/zh-CN/docs/Web/Guide/HTML/Using_data_attributes)
