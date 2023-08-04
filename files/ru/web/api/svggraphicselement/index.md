---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
---

{{APIRef("SVG")}}

Интерфейс **`SVGGraphicsElement`** представляет элементы SVG, основной целью которых является прямое отображение графики в группу.

{{InheritanceDiagram(600, 120)}}

> **Примечание:** Этот интерфейс был введён в SVG 2 и заменяет интерфейсы {{domxref("SVGLocatable")}} и {{domxref("SVGTransformable")}} из SVG 1.1.

## Свойства

_Этот элемент наследует свойства от своего родителя, {{domxref("SVGElement")}}._

- {{domxref("SVGGraphicsElement.transform")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedTransformList")}} reflecting the computed value of the {{cssxref("transform")}} property and its corresponding {{SVGAttr("transform")}} attribute of the given element.

## Методы

_Этот элемент наследует методы своего родителя, {{domxref("SVGElement")}}._

- {{domxref("SVGGraphicsElement.getBBox()")}}
  - : Returns a {{domxref("DOMRect")}} representing the computed bounding box of the current element.
- {{domxref("SVGGraphicsElement.getCTM()")}}
  - : Returns a {{domxref("DOMMatrix")}} representing the matrix that transforms the current element's coordinate system to its SVG viewport's coordinate system.
- {{domxref("SVGGraphicsElement.getScreenCTM()")}}
  - : Returns a {{domxref("DOMMatrix")}} representing the matrix that transforms the current element's coordinate system to the coordinate system of the SVG viewport for the SVG document fragment.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
