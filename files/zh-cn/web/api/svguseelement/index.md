---
title: SVGUseElement
slug: Web/API/SVGUseElement
---

{{APIRef("SVG")}}

## SVG 使用 DOM 接口

该 **`SVGUseElement`** 接口对应于{{SVGElement("use")}}元素。

{{InheritanceDiagram(600, 140)}}

## 性质

_此接口还从其父接口{{domxref("SVGGraphicsElement")}} 继承属性，并从{{domxref("SVGURIReference")}}实现属性。_

- {{domxref("SVGUseElement.x")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given element.
- {{domxref("SVGUseElement.y")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given element.
- {{domxref("SVGUseElement.width")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given element.
- {{domxref("SVGUseElement.height")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given element.
- {{domxref("SVGUseElement.instanceRoot")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGElement")}} corresponding to the instance root of the given element, which is a direct child of the elements shadow root. If the element does not have a shadow tree (for example, because its URI is invalid or because it has been disabled by conditional processing), then getting this attribute returns `null`.
- {{domxref("SVGUseElement.animatedInstanceRoot")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGElement")}} corresponding to the instance root of the given element, which is a direct child of the elements shadow root. If the element does not have a shadow tree (for example, because its URI is invalid or because it has been disabled by conditional processing), then getting this attribute returns `null`.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGGraphicsElement")}} and implements methods from {{domxref("SVGURIReference")}}._

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("use")}}
