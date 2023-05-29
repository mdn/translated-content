---
title: DOMQuad
slug: Web/API/DOMQuad
---

{{SeeCompatTable}}{{APIRef("Geometry Interfaces")}}

DOMQuad 是四 DOMPoints 的集合，用于定义任意四边形的角。返回 DOMQuads 允许 getBoxQuads () 即使存在任意 2D 或 3D 转换，也可以返回准确的信息。它有一个方便的边界属性返回 DOMRectReadOnly 的那些情况下，你只需要一个轴对齐的边框。

- {{domxref("DOMQuad.DOMQuad()")}}
  - : Creates a new `DOMQuad` object.

## Properties

- p1,p2,p3,p4 {{readonlyinline}}
  - : are {{domxref("DOMPoint")}} objects for each of the `DOMQuad` object's four corners.

## Methods

- {{domxref("DOMQuad.fromRect()")}}
  - : Returns a new `DOMQuad` object based on the passed set of coordinates.
- {{domxref("DOMQuad.fromQuad()")}}
  - : Returns a new `DOMQuad` object based on the passed set of coordinates.
- {{domxref("DOMQuad.getBounds()")}}
  - : Returns a {{domxref("DOMRect")}} object with the coordinates and dimensions of the `DOMQuad` object.
- {{domxref("DOMQuad.toJSON()")}}
  - : Returns a JSON representation of the `DOMQuad` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
