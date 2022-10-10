---
title: SVGGeometryElement.getPointAtLength()
slug: Web/API/SVGGeometryElement/getPointAtLength
---

{{APIRef("SVG")}}

**`SVGGeometryElement.getPointAtLength()`** 方法沿路径返回给定距离的点。

> **备注：** This method was originally part of the {{domxref("SVGPathElement")}} interface. SVG 2 introduced the {{domxref("SVGGeometryElement")}} interface and moved the property to it.

## Syntax

```
DOMPoint someElement.getPointAtLength(float distance);
```

### Parameters

- distance
  - : A float referring to the distance along the path.

### Return value

A {{domxref("DOMPoint")}} indicating the point at a given distance along the path.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
