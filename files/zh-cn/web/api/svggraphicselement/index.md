---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
---

{{APIRef("SVG")}}

**`SVGGraphicsElement`** 接口表示 SVG 元素，其主要目的是将图形直接渲染到组中。

{{InheritanceDiagram(600, 120)}}

> [!NOTE]
> 该接口是 SVG 2 中引入的，它取代了 SVG 1.1 中的{{domxref("SVGLocatable")}}和{{domxref("SVGTransformable")}}接口。

## 属性

此接口还从其父接口{{domxref("SVGElement")}}继承属性

- {{domxref("SVGGraphicsElement.transform")}} {{ReadOnlyInline}}
  - : 一个{{domxref("SVGAnimatedTransformList")}}反映给定元素的{{cssxref("transform")}}属性的计算值及其对应的{{SVGAttr("transform")}}属性。

## 方法

此接口还从其父方法{{domxref("SVGElement")}}继承方法。

- {{domxref("SVGGraphicsElement.getBBox()")}}
  - : 返回一个{{domxref("DOMRect")}}，它表示当前元素的计算出的边界框。
- {{domxref("SVGGraphicsElement.getCTM()")}}
  - : 返回一个{{domxref("DOMMatrix")}}，代表将当前元素的坐标系转换为其 SVG 视口的坐标系的矩阵。
- {{domxref("SVGGraphicsElement.getScreenCTM()")}}
  - : 返回一个{{domxref("DOMMatrix")}}代表表示将当前元素的坐标系转换为 SVG 文档片段的 SVG 视口的坐标系的矩阵。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
